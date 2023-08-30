## dplPy (Beta)

Welcome to dplPy.

---

### Requirements, Installation and Accessibility

#### Requirements

* Git 
* Python v3.10=< (although functional on Python v3.8=<, we suggest using Python v3.10=<)
* Pip
* [Miniconda3](https://docs.conda.io/en/latest/miniconda.html) (suggestion: select the python 3.10 version that best fits your OS)

Suggested:

* [VSCode](https://code.visualstudio.com/)
* Mamba:[repository](https://github.com/mamba-org/mamba), [anaconda.org link](https://anaconda.org/conda-forge/mamba)

### Installation

dplPy is planned to be released as a `pip` and `conda` packages for easy installation (e.g., `pip install dplpy` or `conda install -c conda-forge dplpy`). However, the current installation process for dplPy requires manual steps to be performed after cloning the GitHub repository.

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

### User Manual

[The dplPy User Manual (Beta)](dplpy-man.md)

## Development & Future plans

We encourage community contributions through our [GitHub](https://github.com/opendendro/dplPy), feel free to create Issues and Pull Requests. We are planning a PyPi release in order to streamline installation. Stay tuned!