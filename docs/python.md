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
>> import dplpy as dpl
>> dpl.readme()
```

#### `readers`

Imports a `.rwl` or `.csv` format ring width series file and converts it to a dataframe (array). 

| full flag | short flag | Description |
|-----------|------------|-------------|
|`--format` | `-f` | File types accepted: `.rwl`,`.csv`, other file types will result in an error |
|`--input` | `-i` | Input files come from the localhost using the `--input` parameter or from any public URL using the `--url` parameter |
|`--name` | `-n` | name of the array created from the file |


CLI:

```
$ python dplpy read --format=rwl --input=/home/user/directory/filename.rwl --name=dataset1 --option1 --option2 --flag1 --flag2
$ python dplpy read rwl /home/user/directory/filename.rwl dataset1
$
$ python dplpy read --format=csv --input=/home/user/directory/filename.csv --name=dataset2 --option1 --option2 --flag1 --flag2
$ python dplpy read csv /home/user/directory/filename.csv dataset2
$
$ python dplpy read --format=rwl --url=https://data.cyverse.org/dav-anon/iplant/home/user/opendendro/data/filename.rwl --name=dataset3 --option1 --option2 --flag1 --flag2
$ python dplpy read rwl https://data.cyverse.org/dav-anon/iplant/home/user/opendendro/data/filename.rwl dataset3
```

Python Console:

```
>> import dplpy as dpl
>> dpl.read("/home/user/directory/filename.rwl", name, option1, option2, flag1, flag2)
>> dpl.read("/home/user/directory/filename.csv", name, option1, option2, flag1, flag2)
>> dpl.read("https://data.cyverse.org/dav-anon/home/user/opendendro/data/filename.rwl", name, option1, option2, flag1, flag2)
```

#### `summary`

Creates and prints the summary statistics for a ring width series dataframe

| full flag | short flag | Description |
|-----------|------------|-------------|
|`--format` | `-f` | File types accepted: `.rwl`,`.csv`, other file types will result in an error |
|`--input` | `-i` | Input files come from the localhost using the `--input` parameter or from any public URL using the `--url` parameter |
|`--stats` | `-s` | summary statistics to output `all` reports all stats |

CLI:
```
$ python dplpy.py summary --format=rwl --input=/home/user/directory/filename.rwl --stats=all
$ python dplpy.py summary rwl /home/user/directory/filename.rwl all
```

Python Console:
```
>> import dplpy as dpl
>> dpl.summary("/home/user/directory/filename.rwl", all)
>>
>> dpl.read("/home/user/directory/filename.csv", dataset1)
>> dpl.summary(dataset1)
```

## Development

We encourage community contributions through our [GitHub](https://github.com/opendendro/dplPy), feel free to create Issues and Pull Requests.

use the `dev` branch for our most up-to-date and bleeding edge version.

```
$ git clone https://github.com/opendendro/dplpy
$ cd dplpy
$ git switch dev
```
