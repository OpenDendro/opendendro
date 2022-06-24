## Overview
In general, the tools at openDendro are meant to be used in a scripting environment. However, some tasks are better done interactively. With that in mind, there are currently two apps in development. 

## xDater
`xDateR` is a Shiny app for graphically and statistically crossdating tree-ring data. It can be launched in a browser from https://andybunn.shinyapps.io/xDateR/ or run from the command line in `R` via:

```
install.packages("shiny")
library(shiny)
runGitHub( "xDater", "opendendro",ref = "main")
```

## iDetrend 
`iDetrend` is a Shiny app for interactively detrending tree-ring data and very skeletal at the moment. It can be launched in a browser from https://andybunn.shinyapps.io/iDetrend/ or run from the command line in `R` via:

```
install.packages("shiny")
library(shiny)
runGitHub( "iDetrend", "opendendro",ref = "main")
```
