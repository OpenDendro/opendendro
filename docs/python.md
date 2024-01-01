![dplpy](https://github.com/opendendro/opendendro/raw/main/docs/assets/dplpy.png){align="left" width="100"}

## Introduction

The `dplpy` library is hosted on [Pypi](https://pypi.org/project/dplpy/){target=_blank}  and can be run in any Python environment or Integrated Development Environment (IDE) including Jupyter Lab, RStudio, or VS Code. 

Functionally, `dplpy` is a Python implimentation of the `dplR` library. 

The `dplpy` library is intended to reproduce identical outputs as the `dplR` library when using any given dataset. 

## Working Online

You can run `dplpy` in the cloud using the openDendro [Hosted Apps](cloud.md) on CyVerse.

## Installation

### Stable Version

Step 1: Ensure that you have Python version 3.11 or greater installed.

Step 2: Install `pip`

Step 3: Install `dplpy` using `pip`:

``` bash
pip install dplpy
```

??? Example "Installing :simple-python: Python on your computer"

    We recommend using the [:simple-anaconda: Anaconda](https://www.anaconda.com/download){target=_blank} package management software for Python. 

    Anaconda comes with a Desktop interface that can help novice data scientists work with their installed packages and virtual environments.

    Anaconda uses a package manager called `conda` to install software libraries. `conda` can install both OS dependencies and Python packages. 

    [`mamba`](https://github.com/mamba-org/mamba) is a reimplementation of the `conda` package manager in C++. We frequently use of `mamba` instead of `conda` because of its faster package build speeds.
    
    For the command line savvy user, [:simple-python: Miniconda](https://docs.conda.io/en/latest/miniconda.html){target=_blank} is suggested. 
    
    Miniconda is a minimal installer that allows users to more selectively install only the packages they need using `conda`. 
    
    We do not recommend using Homebrew if you are on macOS.

    [:simple-pypi: `pip`](https://pip.pypa.io/en/stable/) is the default package installer for Python, enabling users to easily download and install additional packages from the ‘Python Package Index’ (PyPI). Pip will be installed automatically when you install Miniconda.

    [:simple-jupyter: Project Jupyter](https://jupyter.org/) is an open-source platform that facilitates interactive computing by providing a web-based interface for creating and sharing documents containing live code. Jupyter comes installed with the full Anaconda installation, but must be added to Miniconda installs. 

    ??? Question ":simple-anaconda: Anaconda vs :simple-python: Miniconda"

        Anaconda is a package management software that downloads a number of packages for data analysis and exploration – including base Python – with a total size of ~3GB. Since not all packages are always required, a “lite” version of Anaconda is also available: Miniconda. 
        
        Miniconda gives you base Python and allows for all Anaconda functions, but has a much smaller download size (~500MB) and installation time because it installs fewer packages. Once installed, both Anaconda or Miniconda will be referred to simply as `conda`.

    ??? Question "I’m on a Mac, why not use the pre-installed Python?"

        Mac OS X does come with a preinstalled version of Python (although typically lagging behind the latest version). However, it is used behind the scenes as part of the operating system, so modifying or updating this could have unintended consequences.  It is much safer to install a newer version from Anaconda or Miniconda as an environment.

    ??? Example "Installing via Miniconda and Setting Up a `dplpy` environment"

        In order to set up your own environment, you will need to download Miniconda according to your OS. Please go to the following page and download and execute the correct file for your OS: https://docs.conda.io/projects/miniconda/en/latest/

        ??? Success "Mac OS X"

            Downloading either the `bash` or `.pkg` version of Miniconda should yield the same result.
            
            Downloading the `.pkg` file will allow you to install Miniconda by clicking through an installer, whilst downloading the bash version will require you to execute the downloaded script in a Terminal.

        ??? Success "Windows"
            
            Downloading the Miniconda installer will result in a command prompt named “Anaconda”. This is where you will be able to access all of your conda installations. Packages installed through the conda command prompt are NOT available in PowerShell and/or other installed shells (e.g., git shell).
        
            https://docs.anaconda.com/free/anaconda/getting-started/ is a great starting point for learning about conda!

        Conda is used exclusively through the command line, therefore you should be comfortable using the shell (or the terminal in macOS). The Carpentries offer an Open Source tutorial on using the shell: https://swcarpentry.github.io/shell-novice/


!!! Info "[`dplPy` User Manual Documentation](dplpy-man.md)"

### Development Version

??? Example "Development Versions"

    !!! Note
        The dplPy Git repository contains:

        - source code (`src/`)
        - Jupyter Notebook example (`runnable_example.ipynb`)
        - Test files in `csv` and `rwl` formats (`tests/data/<format>/`)
  
    We encourage community contributions on [GitHub](https://github.com/opendendro/dplPy). 

    Software Requirements:

    * `git`

    * `pip`

    * `python` => v3.11.*

    * (recommended) [Miniconda3](https://docs.conda.io/en/latest/miniconda.html) & [Mamba](https://github.com/mamba-org/mamba)

    Clone the GitHub repository to your personal machine: 

    ``` bash
    git clone https://github.com/OpenDendro/dplPy.git
    cd dplPy
    ```

    Build the environment using the provided `environment.yml`: 

    ``` bash
    mamba env create -f environment.yml 
    ```

    Activate the new environment: `conda activate dplpy`

    Import `dplpy` and begin to work:

    ``` python
    import os
    directory = os.getcwd().split("/")
    if directory[-1] != 'src':
        os.chdir("./src")
    import dplpy as dpl
    ```

### via :simple-jupyter: Jupyter Notebook

Jupyter Notebooks are recommmended for visualizing the graphical output of `dplpy`.

[:simple-jupyter: Example `dplpy` Jupyter Notebook](notebooks/intro_dplpy.ipynb)

[:simple-jupyter: Floating Chronology Notebook](notebooks/floating_chronology_example.ipynb)

??? Example "Creating a `dplpy` Jupyter Lab kernel locally"

    Activate the environment and create the Jupyter kernel:

    ``` bash 
    mamba activate dplpy 
    python -m ipykernel install --user --name dplpy --display-name "Python (dplpy)"
    ```

    On Mac OS X or Linux, add the `conda` installation to the PATH:

    ``` bash
    echo ". /opt/conda/etc/profile.d/conda.sh" >> /home/jovyan/.bash_profile 
    echo "conda deactivate" >> /home/jovyan/.bash_profile 
    echo "conda activate dplpy" >> /home/jovyan/.bash_profile
    . /opt/conda/etc/profile.d/conda.sh 
    mamba activate dplpy 
    python -m ipykernel install --user --name dplpy --display-name "Python (dplpy)"
    source /home/jovyan/.bash_profile
    ```

    Restart Jupyter Lab

    ``` bash
    jupyter lab
    ```

    This will ensure that the dplpy environment created through `conda` is findable by Jupyter under the name `Python (dplpy)`.
