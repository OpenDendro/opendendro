# Apps

Most of openDendro is meant to be used from a script, because a script is a record of what was done. Two jobs are better done by eye: crossdating and detrending. You need to look at each series, try something, and look again.

These [Shiny](https://shiny.posit.co/){target=_blank} apps do those two jobs in a web browser. There is nothing to install. Both are built on [dplR](r.md), and both keep the record for you: every report has R code that reproduces your results from the original file.

Each app comes with example data and guided walk-throughs. Look for "Show me how" in the sidebar.

## xDateR

[Open xDateR](https://viz.datascience.arizona.edu/xDateR/){ .md-button .md-button--primary target=_blank }
[Source on GitHub](https://github.com/OpenDendro/xDateR){ .md-button target=_blank }

xDateR is for checking the dating of a collection and fixing it. If you have used [COFECHA](fortran.md), the segment correlations and the flags will look familiar.

- **See the whole collection at once.** Each series is cut into overlapping segments and correlated against a master built from the others. Segments that fit poorly are flagged.
- **Find the lag.** Each segment is also tested a few years either side of where it is dated. A segment that fits better somewhere else is marked, with a hint on whether to look for a missing ring or a false one, and where.
- **Fix it.** Insert a ring, delete a ring or fill a gap, and watch the correlations respond. Edits can be undone one at a time.
- **Check the data first.** Data Checks on the Overview say in plain language what needs a look.
- **Date floating series.** Compare the candidate positions for an undated series against a dated master and choose one.

The statistics say where to look. The wood says what happened. Go back to the sample before you accept an edit.

## iDetrend

[Open iDetrend](https://viz.datascience.arizona.edu/iDetrend/){ .md-button .md-button--primary target=_blank }
[Source on GitHub](https://github.com/OpenDendro/iDetrend){ .md-button target=_blank }

iDetrend is for choosing a detrending curve for each series while you look at it. The app was rewritten for dplR 1.8.0.

- **See a curve move** as you change its rigidity, with the indices drawn underneath.
- **Compare methods** on one series, with the curves laid over each other.
- **See the series against the stand.** The mean of the other series sits behind each one, so you can tell a swing the trees share from one this tree has alone.
- **Be told what a setting does.** Under a spline's controls the app says, in years, which swings in growth it removes and which it keeps.
- **Be told where to look.** A series whose curve fell back to another method, or runs close to zero, is marked with the reason.
- **See what your choices did.** The chronology and its statistics are shown beside the same data detrended with dplR's defaults.
- **Pick up where you stopped.** A settings file restores the work in a later session.

iDetrend fits curves to single series. It does not do regional curve or signal-free standardization. Use `rcs` and `ssf` in dplR for those.

## Running the Apps on Your Own Computer

The hosted apps are the easy way in. If you would like to run one locally, say to work offline or on data you can't upload, you need R and dplR 1.8.0 or later:

```r
install.packages(c("shiny", "dplR"))
shiny::runGitHub("xDateR", "OpenDendro")
shiny::runGitHub("iDetrend", "OpenDendro")
```

R will tell you if another package is missing. Each app's README on GitHub says how to restore the exact package versions it was built with.

## treeSong

[Source on GitHub](https://github.com/OpenDendro/treeSong){ .md-button target=_blank }

treeSong turns the spectral properties of a tree-ring series into sound. It is an experiment in hearing a time series as well as plotting it. Because it plays audio, it runs best on your own computer:

```r
install.packages("shiny")
shiny::runGitHub("treeSong", "OpenDendro")
```
