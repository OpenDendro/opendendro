# Where the Methods Come From

## The Programs

Two Fortran programs defined how the field crossdates and standardizes tree-ring data.

**COFECHA** was written by the late Richard Holmes at the University of Arizona's Laboratory of Tree-Ring Research. It checks the dating of a collection by correlating each series, in segments, against a master built from the others. Holmes also wrote the Dendrochronology Program Library (the DPL), the set of utilities that grew up around it.

**ARSTAN** was written by Ed Cook at the Lamont-Doherty Earth Observatory. It detrends ring-width series, models their autocorrelation, and builds the standard, residual and ARSTAN chronologies.

Paul Krusic, Ed's long-time collaborator, has worked on both programs with him for years.

For signal-free standardization, the reference is **CRUST**, by Tom Melvin and Keith Briffa at the Climatic Research Unit.

## Where to Get Them

- [Dendro software from Lamont-Doherty](https://www.geog.cam.ac.uk/research/projects/dendrosoftware/){target=_blank}, hosted at Cambridge.
- [Software at the Laboratory of Tree-Ring Research](https://www.ltrr.arizona.edu/software.html){target=_blank}.
- [CRUST on GitHub](https://github.com/ClimaticResearchUnit/CRUST){target=_blank}.

## A Reference, Not a Target

dplR, dplPy and the openDendro apps come out of these programs. They are no longer checked against them.

COFECHA and ARSTAN were written for a terminal and a menu of numbered options. A program in that setting had to make most decisions for the person using it, and it did. Those decisions were choices, and some were argued over by the authors themselves. Ed Cook argued against making the log transform COFECHA's default. It stayed the default anyway.

Matching the old numbers means adopting the old choices whether or not they suit the data at hand. On one collection, a series' correlation with the master averaged 0.09 higher in dplR than in COFECHA. Nearly all of that traced to two COFECHA steps that dplR does not take, a log transform and a variance stabilization. Neither program was wrong. Closing the gap would have meant adopting both steps because COFECHA has them, which is not a reason.

So the original Fortran stays open on the desk. We read it to learn what a step does and why it was done. Where our result differs from ARSTAN or COFECHA, the documentation says which step causes it, so that someone coming from those programs knows what changed.

Some things do not change:

- A negative crossdating lag means a missing ring in the series, as it does in COFECHA.
- Tucson and the other legacy file formats are read and written faithfully. Decades of data are stored in them.
- Where an older program's approach is a reasonable choice, it is offered as an option.

openDendro exists because Richard Holmes, Ed Cook, Paul Krusic and others wrote these programs and shared them.
