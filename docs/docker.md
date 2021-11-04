# Docker

We use [Docker](https://docker.com) to build our respective integrated development environments (IDE) for working with `dpl` software.

[RStudio](https://rstudio.com) containers are based on the [Rocker](https://github.com/rocker-org) R and RStudio builds. CyVerse rehosts the Rocker images in its data science workbench, the [Discovery Environment](https://de.cyverse.org).

CyVerse container builds are maintained on a [GitHub Organization](https://github.com/cyverse-vice/), and hosted on its private [Harbor Registry](https://harbor.cyverse.org). 

[JupyterLab](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html) containers are based on the [Project Jupyter](https://jupyter.org/) image stacks. 

## Usage

Run our Docker images on your local host 

Install the [Docker Desktop]() for Windows or Mac OS X, or command line for Linux. 

Pull the images from RStudio, Rocker, Jupyter, or CyVerse Harbor.

```
docker pull rocker/geospatial
```

From Rocker:
```
docker run -it --rm -p 8787:8787 -e PASSWORD=<reset the password> rocker/geospatial:latest
```

From Jupyter:
```
docker run -it --rm -p 8888:8888 jupyter/datascience-notebook:latest
```
