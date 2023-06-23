## CyVerse

Containers for running `dplR` or `dplPy` are hosted on the CyVerse.org [Discovery Environment](https://de.cyverse.org)

### Steps

1. Create a CyVerse account [here](https://user.cyverse.org)
 
2. request access to the [VICE](https://learning.cyverse.org/projects/vice/en/latest/)

3. Start one of the featured containers:

  CyVerse maintains featured apps from the [Rocker-Project](https://rocker-project/images){target=_blank}, [Project Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html){target=_blank}, and [Visual Studio Code](https://code.visualstudio.com/docs/remote/create-dev-container){target=_blank}

| quick launch | Base Images |
| ------------ |-------------|
| <a href="https://de.cyverse.org/apps/de/3548f43a-bed1-11e9-af16-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Verse-latest-blue?style=plastic&logo=rstudio"></a> | [Rocker-Project](https://rocker-project/images){target=_blank} |
| <a href="https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Datascience-latest-orange?style=plastic&logo=jupyter"></a> |[Project Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html){target=_blank} |
| <a href="https://de.cyverse.org/apps/de/091c830a-4be1-11ec-aad9-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/VS%20Code-latest-6C33AF?style=plastic&logo=visualstudiocode"></a> | [Visual Studio Code](https://code.visualstudio.com/docs/remote/create-dev-container){target=_blank} |

4. clone the repository into the running container:

  * Open a terminal and type:

```
git clone https://github.com/opendendro/dplPy
```

```
git clone https://github.com/andybunn/dplR
```
