# openDendro website

The source for [opendendro.org](https://opendendro.org). It is a
[MkDocs](https://www.mkdocs.org) site with the
[Material](https://squidfunk.github.io/mkdocs-material/) theme.

- Pages are the Markdown files in `docs/`.
- The menus, theme and plugins are set in `mkdocs.yml`.
- Colours and the home page layout are in `docs/stylesheets/extra.css`.

## Publishing

A push to `main` publishes the site. The GitHub Action in
`.github/workflows/publish-docs.yml` builds it and puts the result on the
`gh-pages` branch. Work on a branch until a change is ready.

## Previewing on your own computer

Once, to make a private Python environment for the site and install what it
needs:

    python3 -m venv .venv
    .venv/bin/pip install -r requirements.txt

Then, whenever you want to look at the site:

    .venv/bin/mkdocs serve

and open http://127.0.0.1:8000. The page reloads when a file is saved.
