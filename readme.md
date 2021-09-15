# Firm-foundation.org Website: https://firm-foundation.org

At present this is an old static site published to a `gh-pages` branch on Github.

In order to make it easy to replace this site with a modern Vue/Nuxt or SvelteKit site, I've placed the old HTML into a static subfolder `/static/html`

To browse the site locally, simply open the index file `/static/html/index.html`

To deploy changes, simply commit and push to the repository, then use the npm script (defined in the package.json):

```npm run deploy```

This script pushes the static folder to the `gh-pages` branch on Github, updating the deployed website.

The first time you do this you will, naturally, need to install the npm script with `npm i`



