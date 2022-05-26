# The dplPy User Manual

Welcome to the dplPy manual.

---

## Requirements

* Python v3.8
* Pip
* [Miniconda3](https://docs.conda.io/en/latest/miniconda.html)
* [Jupyter Notebook](https://jupyter.org/install)

Suggested:

* [VSCode](https://code.visualstudio.com/)

### Installation

!!! Note
        DplPy is planned to be released as a `pip` and `conda` packages for easy installation (`pip install dplpy` or `conda install -c conda-forge dplpy`).

!!! Warning
        Prior to creating an enviroment, ensure that you are outside of `base` by doing `conda deactivate`. This should be repeated at any give instance where the conda environment is shown as `base`.

1. Clone the GitHub repository to your personal machine: `git clone https://github.com/OpenDendro/dplPy.git`; move into the repository `cd dplPy/`
2. Build conda environment: `conda create -n dplpy3 python=3.8`; Activate: `conda activate dplpy3`
3. Install [CSAPS](https://pypi.org/project/csaps/#description): `pip install -U csaps`
4. Update conda environment: `conda env update -f environment.yml --prune`

---

## Usage

Although DplPy is executable from the command line interface (CLI), e.g., BASH, ZSH, or a Cygwin terminal, The usage of Jupyter Notebook is suggested (operated through VSCode).

### Accessing Jupyter Notebook on Linux, MacOS

1. In your VSCode terminal, activate the conda environment with `conda activate dplpy3`. 
2. Open a Jupyer Notebook (`<file>.ipynb`) and select the `dplpy3` Kernel when prompted (or from the top right of your screen). This will automatically load the environment we created.

### Accessing Jupyter Notebook on Windows

In VSCode:

1. In your VSCode terminal window, activate the conda environment with `conda activate dplpy3`. 
2. In the same terminal window, start a Jupyter Notebook with `jupyter notebook`. Jupyter will then return URLs that you can copy; *Copy* one of these URLs.
3. Open a Jupyter Notebook (`<file>.ipynb`) and from the **bottom right** of the VSCode screen, click **Jupyter Server**; A dropdown menu will open from the top of the screen: select Existing and paste the URL you copied.
4. Jupyter Notebook will now be able to access the environment created.

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

## Development

We encourage community contributions through our [GitHub](https://github.com/opendendro/dplPy), feel free to create Issues and Pull Requests.

use the `dev` branch for our most up-to-date and bleeding edge version.

```
$ git clone https://github.com/opendendro/dplpy
$ cd dplpy
$ git switch dev
```
