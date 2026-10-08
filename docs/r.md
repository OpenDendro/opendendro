# dplR

![The dplR sticker](https://github.com/opendendro/dplR/raw/master/dplR_Sticker.png){align="right" width="130"}

dplR is the Dendrochronology Program Library in R. It reads and writes the standard tree-ring formats, checks a collection for problems, crossdates, detrends, builds chronologies and analyzes them. It is on CRAN and is the R side of openDendro.

## Install

Install [R](https://cloud.r-project.org/){target=_blank}, then:

```r
install.packages("dplR")
library(dplR)
```

That gives you the released version from [CRAN](https://cran.r-project.org/package=dplR){target=_blank}.

## Learn

[Learning to Love dplR](https://opendendro.github.io/dplR-workshop/){target=_blank} is a free online book on doing tree-ring analysis with dplR. It covers how to call the functions, what each method is doing, and when a method misleads. Start there.

The package also has a vignette, "Getting Started with dplR", and a help page for every function.

If you would sooner point and click for crossdating or detrending, the [apps](apps.md) run dplR in a web browser and hand you the R code afterwards.

## New in 1.8.0

1.8.0 is a large release. The highlights:

- `rwl.check` looks for defects in a collection: duplicate or empty series, gaps, zeros, units errors and dating errors.
- `xdate.report` writes a COFECHA-style crossdating report, with flags and the lag that would fix each flagged segment.
- `corr.rwl.seg` can test each segment at shifted dates and return the best lag.
- `read.sheet` and `write.sheet` read and write spreadsheet-shaped files.
- Ring-width indices and basal area increments have their own classes, so a function can warn when it is handed the wrong kind of series.

!!! warning "Two changes can affect old scripts"

    - `read.tucson` no longer fills a gap inside a series with zeros. A gap is now `NA`, and functions that reject `NA` inside a series will stop until you fill the gap on purpose.
    - `detrend` now defaults to `method = "Spline"`. The old default ran every method and returned a list.

    Read the [NEWS file](https://cran.r-project.org/web/packages/dplR/news/news.html){target=_blank} before you update.

## Development Version

The code on [GitHub](https://github.com/opendendro/dplR){target=_blank} is the version being worked on. It may be unstable. Install it from r-universe:

```r
install.packages("dplR", repos = "https://opendendro.r-universe.dev/")
```

Or build it from source. dplR includes C and Fortran code, so this route needs compilers on your system:

```r
remotes::install_github("opendendro/dplR")
```

## Bugs and Requests

Report a bug or ask for a feature on the [dplR issue tracker](https://github.com/opendendro/dplR/issues){target=_blank}.

## Citing dplR

If you use dplR, please cite it. In R, `citation("dplR")` prints the references.
