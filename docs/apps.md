# Shiny Apps

In general, the tools at openDendro are meant to be used in a scripting environment which makes analysis easier to reproduce. However, some tasks are better done interactively. Two very common tasks in dendrochronology that benefit from a dynamic graphical environment are crossdating and detrending.

In keeping with the rationale of openDendro, the entire workflow of these [Shiny](https://www.rstudio.com/products/shiny/){target=_blank} apps can be exported to an R script for reproducibility.

## [xDater](https://viz.datascience.arizona.edu/xDateR/){target=_blank}

[`xDateR`](https://viz.datascience.arizona.edu/xDateR/){target=_blank} is a Shiny app for graphically and statistically crossdating tree-ring data using `dplR`. 

`xDateR` produces many of the diagnostics and tables that users of [COFECHA](https://ltrr.arizona.edu/research/software) will be familiar with. 

It can be launched in a browser or run from the command line in `R` via:

```
install.packages("shiny") # if not already installed
library(shiny)
runGitHub("xDater", "opendendro",ref = "main")
```

## [iDetrend](https://viz.datascience.arizona.edu/iDetrend/){target=_blank}

[`iDetrend`](https://viz.datascience.arizona.edu/iDetrend/){target=_blank} is a Shiny app for interactively detrending tree-ring data using `dplR`. 

It can be launched in a browser or run from the command line in `R` via:

```
install.packages("shiny") # if not already installed
library(shiny)
runGitHub("iDetrend", "opendendro",ref = "main")
```

## treeSong

An aspect of openDendro involves understanding, interpretation, and communication of scientific information in non-traditional ways including data visualization, sonification, and using generative art.

Non-traditional approaches to scientific data, such as visualization, sonification, and generative art, provide benefits in understanding, communication, and exploration. These approaches offer alternative perspectives, making patterns and relationships more apparent, engaging a wider audience, and fostering deeper comprehension. By incorporating multiple senses, they enhance data exploration and help identify anomalies or patterns that traditional methods may miss. Non-traditional approaches encourage creativity, interdisciplinary connections, and innovative insights, pushing the boundaries of scientific understanding and facilitating novel discoveries.

`treeSong` is a [Shiny](https://www.rstudio.com/products/shiny/) app for converting the spectral properties of tree-ring data into audio.

It can be launched in a [browser](https://andybunn.shinyapps.io/treeSong/). It is fairly computationally expensive to run and users might find it easier to run from the command line in `R` via:

```
install.packages("shiny") # if not already installed
library(shiny)
runGitHub("treeSong", "opendendro",ref = "main")
```
