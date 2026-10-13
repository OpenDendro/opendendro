# About openDendro

## Why It Exists

For decades, much of the software used in dendrochronology was written in Fortran and maintained by a very small number of volunteers. As computing moves on, those programs get harder to compile and harder to run. This is the ["some random person in Nebraska"](https://xkcd.com/2347/){target=_blank} problem, after the xkcd cartoon. In our field the random person is Ed Cook.

![xkcd 2347, Dependency: a tower of blocks labelled "all modern digital infrastructure" resting on one thin block labelled "a project some random person in Nebraska has been thanklessly maintaining since 2003"](https://imgs.xkcd.com/comics/dependency.png){width="300"}

openDendro started in 2021 to move that toolkit into open languages, spread the work of maintaining it across more people, and make it usable by anyone who works with tree-ring data, in or out of dendrochronology.

## What It Includes

- [dplR](r.md), the R package.
- [dplPy](python.md), the Python package.
- [xDateR and iDetrend](apps.md), apps for crossdating and detrending in a browser.
- [Learning to Love dplR](https://opendendro.github.io/learningToLoveDplR/){target=_blank}, a free book.

All of it is open source and on [GitHub](https://github.com/opendendro){target=_blank}.

## How We Work

- **Judge a method by what it does to the data.** The question for any step is its effect on the series and on the conclusions drawn from them.
- **Turn choices into arguments.** Where a careful analyst could go either way, the choice is an argument with a default we can defend and documentation of what it trades.
- **Say what was done.** Output records the settings used. A function does not quietly swap one method for another.
- **Fail loudly.** When a method cannot be applied to a series, the software stops or warns and names the series.
- **Keep reading the source.** COFECHA and ARSTAN are where these methods come from. We read them, cite them and credit the people who wrote them. We do not treat a difference from them as a defect. [More on that](fortran.md).

## People

Leads: [Andy Bunn](https://github.com/AndyBunn/) [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](http://orcid.org/0000-0001-9027-2162), [Kevin Anchukaitis](http://www.u.arizona.edu/~kanchukaitis/) [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](http://orcid.org/0000-0002-8509-8080), [Tyson Lee Swetnam](https://tyson-swetnam.github.io/) [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](http://orcid.org/0000-0002-6639-7181) and [Ed Cook](https://people.climate.columbia.edu/users/profile/edward-r-cook).

Developers: [Ifeoluwa Ale](https://github.com/ifeoluwaale) [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/0009-0003-8368-8575) and [Michele Cosi](https://cosimichele.github.io/) [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/0000-0001-7609-1939).

dplR has had many contributors over the years. They are listed in the package's [DESCRIPTION file](https://github.com/opendendro/dplR/blob/master/DESCRIPTION){target=_blank}.

## Funding

openDendro is supported by the Paleoclimate program of the US National Science Foundation through awards [2054514](https://nsf.gov/awardsearch/showAward?AWD_ID=2054514){target=_blank}, [2054515](https://nsf.gov/awardsearch/showAward?AWD_ID=2054515){target=_blank} and [2054516](https://nsf.gov/awardsearch/showAward?AWD_ID=2054516){target=_blank}.

## Citing

Software gets maintained when it gets cited. If openDendro tools are part of your work, please cite them.

- dplR: run `citation("dplR")` in R.
- dplPy: [doi:10.5281/zenodo.22695105](https://doi.org/10.5281/zenodo.22695105){target=_blank}
- openDendro: [doi:10.5281/zenodo.6110787](https://doi.org/10.5281/zenodo.6110787){target=_blank}

## License

The software is released under the GNU General Public License. Each repository has the details.

## Contact

Write to openDendro@gmail.com, or open an issue on [GitHub](https://github.com/opendendro){target=_blank}.
