# Docker

We use [Docker](https://docker.com) to build our respective integrated development environments (IDE) for working with `dpl` software.

[RStudio](https://rstudio.com) containers are based on the [Rocker](https://github.com/rocker-org) R and RStudio builds. CyVerse rehosts the Rocker images in its data science workbench, the [Discovery Environment](https://de.cyverse.org).

CyVerse container builds are maintained on a [GitHub Organization](https://github.com/cyverse-vice/), and hosted on its private [Harbor Registry](https://harbor.cyverse.org). 

[JupyterLab](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html) containers are based on the [Project Jupyter](https://jupyter.org/) image stacks. 

## Testing

Run Docker for testing the code with Jupyter Lab or RStudio-Server.

Install the [Docker Desktop](https://www.docker.com/products/docker-desktop) for Windows or Mac OS X, or command line for Linux. 

Pull pre-existing Docker images for [RStudio-Server](https://hub.docker.com/u/rocker) or [JupyterLab](https://hub.docker.com/u/jupyter):

```
docker pull jupyter/datascience-notebook:latest
```

To run RStudio-Server (authentication user: `rstudio`, password: set it yourself below):
```
$ git clone https://github.com/opendendro/dplPy
$ cd dplPy
$ docker run -it --rm -p 8787:8787 -e PASSWORD=new_password -v $PWD:/home/rstudio/dplPy -e REDIRECT_URL=http://localhost:8787 rocker/geospatial:latest
```

Open your browser and navigate to [http://localhost:8787](http://localhost:8787)

If you're running remotely, use the DNS of the virtual machine service with the `:8787` or allow it to open the tab for you, e.g., with CodeSpaces or GitPod. 

From the R Console:

```
> install.packages("dplR", dependencies=TRUE)
```

The Project Jupyter DataScience Notebook runs both Python and R:

```
$ git clone https://github.com/opendendro/dplPy
$ cd dplPy
$ docker run -it --rm -p 8888:8888 -v $PWD:/home/jovyan/dplPy -e REDIRECT_URL=http://localhost:8888 jupyter/datascience-notebook:latest jupyter lab --no-browser --NotebookApp.token=''
```

Open your browser and navigate to [http://localhost:8888](http://localhost:8888)

  * Note: that we're disabling the Notebook Token so you don't have to authenticate; remove `--NotebookApp.token=''` to re-enable.
