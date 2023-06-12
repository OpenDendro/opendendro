# The dplPy User Manual (Beta)

Welcome to the dplPy manual.

---

## Requirements, Installation and Accessibility

### Requirements

* Git 
* Python v3.10=< (although functional on Python v3.8=<, we suggest using Python v3.10=<)
* Pip
* [Miniconda3](https://docs.conda.io/en/latest/miniconda.html) (suggestion: select the python 3.10 version that best fits your OS)

Suggested:

* [VSCode](https://code.visualstudio.com/)
* Mamba:[repository](https://github.com/mamba-org/mamba), [anaconda.org link](https://anaconda.org/conda-forge/mamba)

### Installation

DplPy is planned to be released as a `pip` and `conda` packages for easy installation (e.g., `pip install dplpy` or `conda install -c conda-forge dplpy`). However, the current installation process for dplPy requires manual steps to be performed after cloning the GitHub repository.

1. Clone the GitHub repository to your personal machine: `git clone https://github.com/OpenDendro/dplPy.git`; move into the repository `cd dplPy/`
2. Build conda environment: `conda env create -f environment.yml` or `mamba env create -f environment.yml` if Mamba is installed; Activate environment: `conda activate dplpy`

!!! Warning "Known Issues"
    The [CSAPS](https://csaps.readthedocs.io/en/latest/) package, required for smoothing splines, may fail to install in rare occasions. If that is the case, please install CSAPS manually by doing `pip install -U csaps`.

### Accessing dplPy via Jupyter Notebook

Although dplPy is executable from the command line interface (CLI), e.g., BASH, ZSH, or a Cygwin terminal, the usage of Jupyter Notebooks is suggested for visualizing graphs.

!!! tip "Making the dplPy kernel findable"
    It is possible that your computer will not automatically find the dplPy [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system). If that is the case, execute the following command:
    
    ```
    python -m ipykernel install --user --name dplpy --display-name "Python (dplpy)"
    ```

    This will ensure that the dplPy environment created through conda is findable by Jupyter under the name `Python (dplpy)`.

#### Accessing Jupyter Notebook on Linux, MacOS

1. In your VScode terminal, activate the conda environment with `conda activate dplpy`.
2. From the terminal, execute `jupyter notebook`.
3. If prompted to select a kernel, select `dplpy`. This will automatically load the correct environment.

#### Accessing Jupyter Notebook on Windows

In VScode:

1. In your VSCode terminal window, activate the conda environment with `conda activate dplpy`. 
2. In the same terminal window, start a Jupyter Notebook with `jupyter notebook`. Jupyter will then return URLs that you can copy; *Copy* one of these URLs.
3. When propted to select a kernel (top right), select **Select Another Kernel** > **Existing Jupyter Server** and paste the URL you have copied.
4. Jupyter Notebook will now be able to access the environment created.

---

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

---

## Usage

DplPy is currently available as a Python [module](https://docs.python.org/3/tutorial/modules.html) with a number of [functions](https://www.w3schools.com/python/python_functions.asp), which in turn have parameters one can set. Here is a list of functions for dplPy (in alphabetical order):

| Function | Description |
| --- | --- |
| [`ar_func`](#ar_func) | Fits series to autoregressive (AR) models and related functions |
| [`autoreg`](#autoreg) | Fits series to autoregressive (AR) models and related functions |
| [`chron`](#chron) | Creates a mean value chronology for a dataset, typically the ring width indices of a detrended series |
| [`detrend`](#detrend) | Detrends a given series or data frame, first by fitting data to curve(s), with spline(s) as the default, and then by calculating residuals or differences compared to the original data. |
| [`help`](#help) | Displays help (alpha). |
| [`plot`](#plot) | Generates line, spaghetti or segment plots.|
| [`rbar`](#rbar) | Finds best interval of overlapping series over a  period of years, and calculating rbar constant for a dataset over period of overlap. |
| [`readers`](#readers) | Reads data from supported file types (*.CSV and *.RWL) and stores them in dataframe. |
| [`readme`](#readme) | Goes to this website. |
| [`report`](#report) | Generates a report about absent rings in the data set. |
| [`series_corr`](#series_corr) |  Crossdating function that focuses on the comparison of one series to the master chronology. |
| [`stats`](#stats) | Generates summary statistics for RWL and CSV format files. |
| [`summary`](#summary) | Generates a summary for RWL and CSV format files. |
| [`xdate`](#xdate) | Crossdating function for dplPy loaded datasets. |

### `ar_func`

Main function for autoregressive (AR) modeling. Returns residuals and mean of best AR fit with specified lag (default = 5).

Usage: 
```
>>> dpl.ar_func(<data>["<series>"], <lag number>)
```

Expected output(s):

- An array of residual+mean for selected series.


### `autoreg`

Secondary function for AR modeling. Returns parameters of best fit AR model with specified lag (default = 5); Best AR model is selected based on AIC value.

Usage: 
```
>>> dpl.autoreg(<data>["<series>"], <lag number>)
```

Expected output(s):

- A table listing autoregressive paramenters for the specified series;
 

### `chron`
### `detrend`

Detrends a series by fitting to spline and calculating residuals.

!!! Warning "Important"
        Spline is the current detrent default, line graph shows residuals. The `detrend` funtion can modified to fit Hugershoff, modified negative exponential, linear and horizonal methods.
        These will become an option available in the short term future.

```
>>> dpl.detrend(data["<series>"])
```
Change `<series>` to the desired series to detrend.

!!! Example
    ```
    >>> dpl.detrend(data["CAM191"])
    ```

Expected outputs:

- A graph depicting the fitted curve;
- A graph depicting residuals variability.

### `help`
### `plot`
### `rbar`
### `readers`

!!! Info "Supported data types"
        dplPy currently supports `csv` and `rwl` data formats.

To load (read) data into a dataframe, do:

```
>>> data = dpl.readers("path/to/data.format")
```

!!! Example
    ```
    >>> data  = dpl.readers("../tests/data/rwl/ca533.rwl")
    ```

Expected outputs:

- A success/failure message;
- A list of series within the data file.

### `readme`
### `report`
### `series_corr`
### `stats`

Generates summary statistics for `rwl`  and `csv` format files.

```
>>> dpl.stats(<data>)
```

Expected outputs:

- Table with `first`, `last`, `year`, `mean`, `median`, `stdev`, `skew`, `gini`, `ar1` for each series in data file.


### `summary`

The summary function generates a summary of each series recorded in `rwl`  and `csv` format files.

```
>>> dpl.summary(<data>)
```

Expected outputs:

- Table with `count`, `mean`, `std`, `min`, `25%`, `50%`, `75%`, `max` for each series in data file.

### `xdate`

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