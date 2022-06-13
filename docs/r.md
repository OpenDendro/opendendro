![dplR](https://github.com/AndyBunn/dplR/raw/master/dplR_Sticker.png){align="left" width="100"}

The [dplR](https://github.com/AndyBunn/dplR) library is hosted on CRAN and can be run in RStudio and RStudio-Server (in browser).

## Overview

Perform tree-ring analyses such as detrending, chronology building, and crossdating. Read and write standard file formats used in dendrochronology.

## Introduction
The `R` language and programming environment is now commonly used in dendrochronology. `R` is the world's  preeminent open-source statistical computing software and its power can be harnessed for tree-ring science through the contribution of add-on packages which are freely available on the internet. The R version of `openDendro`'s codebase is contained in the package `dplR`.

## Installation

### CRAN

The latest, stable, release version of `dplR` can be installed from [The Comprehensive R Archive Network (CRAN)](https://cran.r-project.org/) as follows:

```R
install.packages("dplR")
```

This is the officially released version of `dplR`.

### Develoment Version
The code here on GitHub is the version of `dplR` that is currently being developed. It might be unstable.

You can install the development version using `r-universe`.

```R
install.packages("dplR", repos = "https://andybunn.r-universe.dev/")
```

Alternatively, the development version can be installed from the source code with the `devtools` package.

```R
devtools::install_github("andybunn/dplR")
```

Because `dplR` includes both C and Fortran code, you will need the appropriate compilers installed on your system to build from source.

## Getting Started

New users of dplR can begin by working with the introductory chapters in [Learning to Love dplR](https://opendendro.github.io/dplR-workshop/) which contains instructional material for using `dplR`.

Users interested in crossdating should visit the [`xDater` app](https://andybunn.shinyapps.io/xDateR/). 
