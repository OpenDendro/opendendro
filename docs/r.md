![dplR](https://github.com/AndyBunn/dplR/raw/master/dplR_Sticker.png){align="left" width="100"}

The [dplR](https://github.com/AndyBunn/dplR) library is hosted on CRAN and can be run in RStudio and RStudio-Server (in browser).


## Installation

Basic installation:

```
install.packages("dplR", dependencies=TRUE)
library(dplR)
```

### Development install

```
devtools::install_github("andybunn/dplR")
```

## dplR Workshop

The [dplR-workshop](https://opendendro.github.io/dplR-workshop/) website contains the training material for using `dplR` and is linked here.

### Vignettes

View a vignette on time series analyses as pdf directly from R console:

```{R}
> vignette(topic="timeseries-dplR",package="dplR")
```

Edit the code in R:

```{R}
> edit(vignette(topic="timeseries-dplR",package="dplR"))
```
