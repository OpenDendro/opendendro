![dplpy](https://github.com/opendendro/opendendro/raw/main/docs/assets/android-chrome-512x512.png){align="left" width="100"}

The `dplpy` library is hosted on [Pypi](https://pypi.org/project/dplpy/){target=_blank}  and can be run in any Python environment or Integrated Development Environment (IDE) including Jupyter Lab, RStudio, or VS Code.

The Python programming langauge is the most commonly used language in earth sciences. 

Functionally, `dplpy` is a Python implimentation of the `dplR` library. The `dplpy` library is intended to reproduce identical output as the `dplR` library. 

## Installation

Step 1: Ensure that you have Python version 3.10 or greater installed.

Step 2: Install `pip`

Step 3: Install `dplpy` using `pip`:

``` bash
pip install dplpy
```

!!! abstract "[:material-beta: `dplPy` User Manual](dplpy-man.md)"

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

    * `python` => v3.10.*

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

    if Mamba is installed; Activate environment: `conda activate dplpy`

    Import `dplpy` and begin to work:

    ``` python
    import os
    directory = os.getcwd().split("/")
    if directory[-1] != 'src':
        os.chdir("./src")
    import dplpy as dpl
    ```

## via Jupyter Notebook

Jupyter Notebooks are suggested for visualizing the graphical outputs.

[Example `dplpy` Jupyter Notebook](notebooks/intro_dplpy.ipynb)

[Floating Chronology Notebook](notebooks/floating_chronology_example.ipynb)

??? tip "Create `dplpy` Jupyter Lab kernel"

    On Mac OS X or Linux, add the conda installation to the PATH:

    ``` bash 
    python -m ipykernel install --user --name dplpy --display-name "Python (dplpy)"
    ```

    ``` bash
    echo ". /opt/conda/etc/profile.d/conda.sh" >> /home/jovyan/.bash_profile 
    echo "conda deactivate" >> /home/jovyan/.bash_profile 
    echo "conda activate Earthlab" >> /home/jovyan/.bash_profile
    . /opt/conda/etc/profile.d/conda.sh 
    mamba activate dplpy && python -m ipykernel install --user --name dplpy    
    source /home/jovyan/.bash_profile
    ```

    This will ensure that the dplPy environment created through conda is findable by Jupyter under the name `Python (dplpy)`.
