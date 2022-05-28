# The dplPy User Manual (Alpha)

Welcome to the dplPy manual.

---

## Requirements

* Python v3.8
* Pip
* [Miniconda3](https://docs.conda.io/en/latest/miniconda.html)
* [Jupyter Notebook](https://jupyter.org/install)

Suggested:

* [VSCode](https://code.visualstudio.com/)

### Installation (Alpha)

!!! Info "Planned release information"
        DplPy is planned to be released as a `pip` and `conda` packages for easy installation (`pip install dplpy` or `conda install -c conda-forge dplpy`). **As DplPy is still under development, the current installation process requires manual installation of specific packages.**

!!! Warning "Known nstallation issues"
        - Packages installing through `pip`, such as CSAPS or Jupyter Notebook, might return a `DuplicateOptionError` error upon installing. When running into said error, deactivate your conda enviroment and close and reopen your terminal/VScode.
        - **Best practice**: prior to creating an enviroment, ensure that you are outside of `base` by doing `conda deactivate`. This should be repeated at any give instance where the conda environment is shown as `base`.

1. Clone the GitHub repository to your personal machine: `git clone https://github.com/OpenDendro/dplPy.git`; move into the repository `cd dplPy/`
2. Build conda environment: `conda create -n dplpy3 python=3.8`; Activate: `conda activate dplpy3`
3. Install [CSAPS](https://pypi.org/project/csaps/#description): `pip install -U csaps`
4. Update conda environment: `conda env update -f environment.yml --prune`

---

## Access through Jupyter Notebook

Although dplPy is executable from the command line interface (CLI), e.g., BASH, ZSH, or a Cygwin terminal, The usage of Jupyter Notebook is suggested.

### Accessing Jupyter Notebook on Linux, MacOS

1. In your VScode terminal, activate the conda environment with `conda activate dplpy3`.
2. From the terminal, execute `jupyter notebook`.
2. If prompted to select a kernel, select `dplpy3`. This will automatically load the correct environment.

### Accessing Jupyter Notebook on Windows

In VScode:

1. In your VSCode terminal window, activate the conda environment with `conda activate dplpy3`. 
2. In the same terminal window, start a Jupyter Notebook with `jupyter notebook`. Jupyter will then return URLs that you can copy; *Copy* one of these URLs.
3. Open a Jupyter Notebook (`<file>.ipynb`) and from the **bottom right** of the VSCode screen, click **Jupyter Server**; A dropdown menu will open from the top of the screen: select Existing and paste the URL you copied.
4. Jupyter Notebook will now be able to access the environment created.

---

## Usage

### Obtain Git

Clone (and move into) the dplPy Git repository with:

```
$ git clone https://github.com/OpenDendro/dplPy.git
$ cd dplPy
```

!!! Note
        The dplPy Git repository contains:
        - source code (`src/`)
        - A jupyter notebook example (`runnable_example.ipynb`)
        - Test files in `csv` and `rwl` formats (`tests/data/<format>/`)
  
### Import the `dplpy` library

dplPy currently exists as a python library; ensure you are in the correct folder prior to execution.

```
import os
directory = os.getcwd().split("/")
if directory[-1] != 'src':
    os.chdir("./src")
import dplpy as dpl
```

### Readers

!!! Info "Supported data types"
        dplPy currently supports `csv` and `rwl` data formats.

To load (read) data into a dataframe, do:

```
>>> data = dpl.readers("path/to/data.format")
```

??? Example
    ```
    >>> data  = dpl.readers("../tests/data/rwl/ca533.rwl")
    ```

Expected outputs:
- A success/failure message;
- A list of series within the data file.

### Summary

The summary function generates a summary of each series recorded in `rwl`  and `csv` format files.

```
>>> dpl.summary(<data>)
```

Expected outputs:
- Table with `count`, `mean`, `std`, `min`, `25%`, `50%`, `75%`, `max` for each series in data file.

### General Statistics

Generates summary statistics for `rwl`  and `csv` format files.

```
>>> dpl.stats(<data>)
```

Expected outputs:
- Table with `first`, `last`, `year`, `mean`, `median`, `stdev`, `skew`, `gini`, `ar1` for each series in data file.

### Detrending

Detrends a series by fitting to spline and calculating residuals.

!!! Warning "Important"
        Spline is the current detrent default, line graph shows residuals. The `detrend` funtion can modified to fit Hugershoff, modified negative exponential, linear and horizonal methods.
        These will become an option available in the short term future.

```
>>> dpl.detrend(data["<series>"])
```
Change `<series>` to the desired series to detrend.

??? Example
    ```
    >>> dpl.detrend(data["CAM191"])
    ```

Expected outputs:
- A graph depicting the fitted curve;
- A graph depicting residuals variability.

### Autoregressive modeling

The current autoregressive modeling functions are called with

```
(1) >>> dpl.autoreg(<data>["<series>"], lag_number)
```
and
```
(2) >>> dpl.ar_func(<data>["<series>"])
```
As default, the max lag is set to 5; Adding a second parameter (integer) to change max lag (valid for function `(1)`).

The first `(1)` function calculates the autoregressive parameters, whilst th second `(2)` calculates the residual+mean (by choosing best AR model fit with the selected max lag.)

??? Example
    ```
    >>> dpl.autoreg(data["CAM191"], 10) #This changes the max lag to 10 instead of the default 5.
    >>> dpl.ar_func(data["CAM191"])
    ```

Expected outputs:
- (1) a table listing autoregressive paramenters for the specified series;
- (2) an array of residual+mean for selected series.

---

## Development & Future plans

We encourage community contributions through our [GitHub](https://github.com/opendendro/dplPy), feel free to create Issues and Pull Requests.

### Help menu

Echos the help menu on the CLI 

```
$ python dplpy.py help
```

```
>>> import dplpy as dpl
>>> dpl.help()
```

#### `readme`

Opens this webpage

CLI:

```
$ python dplpy.py readme
```

Python Console:

```
>> import dplpy as dpl
>> dpl.readme()
```

#### `readers`

Imports a `.rwl` or `.csv` format ring width series file and converts it to a dataframe (array). 

| full flag | short flag | Description |
|-----------|------------|-------------|
|`--input` | `-i` | Input files come from the localhost using the `--input` parameter |
| `--url` | `-u` | Input file from any public URL using the `--url` parameter |
| `--name` | `-n` | name of the array created from the file |


CLI:

```
$ python dplpy reader --input=/home/user/directory/filename.rwl --name=dataset1  
$ python dplpy reader -i /home/user/directory/filename.rwl -n dataset1 
$ python dplpy reader /home/user/directory/filename.rwl dataset1
$
$ python dplpy reader --input=/home/user/directory/filename.csv --name=dataset2 
$ python dplpy reader csv /home/user/directory/filename.csv dataset2
$
$ python dplpy reader --url=https://data.cyverse.org/dav-anon/iplant/home/user/opendendro/data/filename.rwl --name=dataset3 
$ python dplpy reader https://data.cyverse.org/dav-anon/iplant/home/user/opendendro/data/filename.rwl dataset3
```

Python Console:

```
>> import dplpy as dpl
>> dataset1 = dpl.reader("/home/user/directory/filename.rwl")
```

#### `summary`

Creates and prints the summary statistics for a ring width series dataframe

| full flag | short flag | Description |
|-----------|------------|-------------|
|`--input` | `-i` | Input files come from the localhost using the `--input` parameter or from any public URL using the `--url` parameter |
|`--stats` | `-s` | summary statistics to output `all` reports all stats |

CLI:
```
$ python dplpy.py summary --input=/home/user/directory/filename.rwl --stats=all
$ python dplpy.py summary /home/user/directory/filename.rwl all
$ python dplpy.py summary /home/user/directory/filename.rwl --stats=mean
$ python dplpy.py summary /home/user/directory/filename.rwl mean 
```

Python Console:
```
>> import dplpy as dpl
>> dataset1 = dpl.readers("/home/user/directory/filename.rwl")
>> dpl.summary(dataset1, all)
>>
>> summary_dataset1 = dpl.summary("/home/user/directory/filename.rwl")
```