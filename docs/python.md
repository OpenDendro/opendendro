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

!!! info "Usage"
    ```
    >>> dpl.ar_func(<data>["<series>"], <lag number>)
    ```

    Example:
    ```
    >>> dpl.ar_func(ca533["CAM191"], 10) 
    ```

    In the above example, we use dataset look at dataset `ca533` series `CAM191`  and specified a lag of `10`.

!!! Abstract "Expected output(s)"

    Users can expect an array of residual+mean for selected series. 
    
    The expected output from the example above will look similar to this:
    ```
    array([ 0.71130658, -0.23204695,  0.52121028,  0.57597523,  0.90108448,
            0.20495808, -0.23457629,  0.58819405,  0.66478718,  0.47521983,
            0.92695177, -0.35659493,  0.42220031, -0.19197698, -0.08828572,
            0.5320343 ,  0.28471761,  0.39486259,  0.10748019,  0.25214937,
            0.46500727,  1.45016901,  0.28605889,  0.29470389,  0.34120629,
           -0.31249819,  0.42380461,  0.23473108, -0.06796468,  0.38897624,
            0.68666198,  0.77677716,  0.62360082,  0.43398575,  0.74032758,
            0.5880663 ,  0.20567916,  0.23525549,  0.63297387,  0.94101874,
            0.06615244,  0.73838454,  0.51092414,  0.25087689,  0.3873105 ,
            0.48383716,  0.28317419,  0.46750972,  0.60187677,  0.40542752,
            0.54822178,  0.08560112,  0.26122762,  0.13318504,  0.25876284,
            0.56315817,  0.40823334,  0.36114307,  0.49613157,  0.4169329 ,
            0.40733772,  0.25578201,  0.42718681,  0.59555259, -0.21075308,
            0.11587297,  0.62082607,  0.65467697, -0.17674732,  0.56107325,
            0.51825623,  0.58111792,  0.61318262,  0.3742455 ,  0.07211766,
            0.01136486,  0.06596661,  0.32254786,  0.39898574,  0.22616678,
            0.34727753,  0.42409955,  0.51594014,  0.23294973,  0.50911683,
            0.84802911,  0.48218982,  0.393356  ,  0.22153173,  0.65209051,
            0.48231136,  0.19053267,  0.39660363,  0.39800466,  0.29138228,
           -0.030384  ,  0.49157549,  0.49579055,  0.25640508,  0.48196172,
            0.28278419,  0.53502938,  0.41559126,  0.34577752,  0.33023954,
            0.55383387,  0.4391052 ,  0.35063736,  0.20157626,  0.25298519,
            0.51312838,  0.53184596,  0.43997298,  0.27903576,  0.43143646,
            0.45186539,  0.3734363 ,  0.41050279,  0.67168476,  0.31693981,
            0.32281309,  0.5155617 ,  0.51985799,  0.48651392,  0.50650445,
    ...
            0.39541278,  0.47066705,  0.34558178,  0.46008747,  0.34158785,
            0.3672973 ,  0.37749446,  0.34939726,  0.37388067,  0.4241256 ,
            0.23815543,  0.29207569,  0.47247813,  0.44170539,  0.4410876 ,
            0.4007522 ,  0.29655365,  0.38460918,  0.39774193,  0.42761775,
            0.38384653])
    ```

### `autoreg`

Secondary function for AR modeling. Returns parameters of best fit AR model with specified lag (default = 5); Best AR model is selected based on AIC value.

!!! Warning "Note"
    This function and its outputs are integrated in the [`ar_func`](#ar_func) function.

!!! info "Usage" 
    ```
    >>> dpl.autoreg(<data>["<series>"], <lag number>)
    ```

    Example:
    ```
    dpl.autoreg(ca533["CAM191"], 10)
    ```

!!! Abstract "Expected output(s)"

    A table listing autoregressive paramenters for the specified series;

    The expected output from the example above will look similar to this:
    ```
    const         0.022210
    CAM191.L1     0.503373
    CAM191.L2     0.087230
    CAM191.L3     0.143716
    CAM191.L4     0.020119
    CAM191.L5    -0.027769
    CAM191.L6    -0.010029
    CAM191.L7     0.001373
    CAM191.L8     0.025588
    CAM191.L9     0.042340
    CAM191.L10    0.136916
    dtype: float64
    ```
 
### `chron`

Creates a mean value chronology for a dataset, typically the ring width indices of a detrended series. Takes three optional arguments `biweight`, `prewhiten`, and `plot`. They determine whether to find means using tukey's biweight robust mean (default True), whether to prewhiten data by fitting to an AR model (default False), and whether to plot the results of the chronology (default True).

!!! info "Usage" 
    ```
    >>> dpl.chron(<data>, prewhiten=<True/False>, biweight=<True/False>, plot=<True/False>)
    ```

    Example:
    ```
    # Detrending data first
    >>> rwi_data = dpl.detrend(ca533)

    # Creating chronology using detrended data 
    >>> dpl.chron(rwi_ca533, prewhiten=False, biweight=True, plot=True)
    ```

!!! Abstract "Expected output(s)"

    The expected output is the mean value chronology of a specific dataframe.

    The expected output from the example above will look similar to this:
    ```
            Mean RWI	Sample depth
    Year		
    626	    0.371605	1
    627	    0.284398	1
    628	    0.306523	1
    629	    0.416333	1
    630	    0.482462	1
    ...	    ...	        ...
    1979	1.053427	21
    1980	1.455353	21
    1981	1.252526	21
    1982	1.362244	21
    1983	1.314827	21
    1358 rows × 2 columns
    ```

    If `plot=True` then a plot will also be generated:
    ![py_ca533_chron](assets/py_ca533_chron.png)

### `detrend`

Detrends a given series or dataframe, first by fitting data to curve(s), with `spline` as the default, and then by calculating residuals (default = `residual`) or differences (`difference`) compared to the original data. Other supported curve fitting methods are `ModNegex` (modified negative exponential), `Hugershoff`, `linear`, `horizontal`.

!!! info "Usage" 
    ```
    # Detrend the entire dataframe
    >>> dpl.detrend(<data>)

    # Detrending a series part of the dataframe
    >>> dpl.detrend(<data>["<series>"])

    # Detrending function and its options
    >>> dpl.detrend(<data>["<series>"], fit="<fitting method>", method="<comparison method>", plot=<True/False>) 
    ```

    Example:
    ```
    # Detrending series CAM191 from dataframe ca533, using the spline fitting method and calculating residuals compared to the original data 
    >>> rwi_data = dpl.detrend(ca533["CAM191"], fit="spline", method="residual", plot=True)
    ```
    # Creating chronology using detrended data 
    >>> dpl.chron(rwi_ca533, prewhiten=False, biweight=True, plot=True)

!!! Abstract "Expected output(s)"

    The expected output is the a list of detrended values (for the entire dataset or for a specific series)

    The expected output from the example above will look similar to this:
    ```
    1180    1.180835
    1181    1.511543
    1182    1.870558
    1183    2.197630
    1184    1.815025
            ...   
    1966    1.060515
    1967    1.209514
    1968    1.282459
    1969    1.392746
    1970    1.239629
    Name: CAM191, Length: 791, dtype: float64
    ```

    If `plot=True` then a plot will also be generated:
    ![py_ca533_CA191_detrend](assets/py_ca533_CA191_detrend.png)

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