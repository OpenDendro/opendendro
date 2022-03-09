# The dplPy User Manual

Welcome to the dplPy manual.

## Requirements

* Python v3.6+
* Pip

Recommended:

* `Miniconda3` 
* `JupyterLab`

### Installation

```
pip install dplpy
```

```
conda install -c conda-forge dplpy
```

## Usage

From the command line interface (CLI), e.g., BASH, ZSH, or a Cygwin terminal 

#### help menu

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
>>> import dplpy as dpl
>>> dpl.readme()
```

#### `readers`

Imports a `.rwl` or `.csv` format ring width series file and converts it to a dataframe (array). 

| full flag | short flag | Description |
|-----------|------------|-------------|
|`--input` | `-i` | Input files come from the localhost using the `--input` parameter |

CLI:

```
$ python dplpy.py readers --input=/home/user/directory/filename.rwl  
$ python dplpy.py readers -i /home/user/directory/filename.rwl 
$ python dplpy.py readers /home/user/directory/filename.rwl
$
$ python dplpy.py readers --input=/home/user/directory/filename.csv  
$ python dplpy.py readers csv /home/user/directory/filename.csv 
$
$ python dplpy.py readers --url=https://data.cyverse.org/dav-anon/iplant/home/user/opendendro/data/filename.rwl  
$ python dplpy.py readers https://data.cyverse.org/dav-anon/iplant/home/user/opendendro/data/filename.rwl
```

Python Console:

```
>>> import dplpy as dpl
>>> dataset1 = dpl.readers("/home/user/directory/filename.rwl")
```

#### `summary`

Creates and prints the summary statistics for a ring width series dataframe

| full flag | short flag | Description |
|-----------|------------|-------------|
|`--input` | `-i` | Input files come from the localhost using the `--input` parameter or from any public URL using the `--url` parameter |

CLI:
```
$ python dplpy.py summary --input=/home/user/directory/filename.rwl --stats=all
$ python dplpy.py summary /home/user/directory/filename.rwl all
$ python dplpy.py summary /home/user/directory/filename.rwl --stats=mean
$ python dplpy.py summary /home/user/directory/filename.rwl mean 
```

Python Console:
```
>>> import dplpy as dpl
>>> dataset1 = dpl.readers("/home/user/directory/filename.rwl")
>>> dpl.summary(dataset1)
>>> summary_dataset1 = dpl.summary("/home/user/directory/filename.rwl")
```

## Development

We encourage community contributions through our [GitHub](https://github.com/opendendro/dplPy), feel free to create Issues and Pull Requests.

use the `dev` branch for our most up-to-date and bleeding edge version.

```
$ git clone https://github.com/opendendro/dplpy
$ cd dplpy
$ git switch dev
```
