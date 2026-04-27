**Introduction**

Lot of this will become more natural. 

**Lesson Overview**

- how to write and run npm scripts
- what Webpack modes are and how to automate switching between modes
- how to create and use template repos

**npm scripts**

while `npx webpack` and `npx webpack serve` aren't particulary long to type, there are longer ones.
- can write npm scripts in `package.json` by adding `"scripts"`
- scripts can be written in the form `"name":"command"` and are executed by running `npm run <name>`

```
{
  // ... other package.json stuff
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
  // ... other package.json stuff
}
```

running `npm run build` = `npx webpack`
`npm run dev` = `npx webpack serve`
`npm run deploy` = `git subtree push --prefix dist origin gh-pages`

dopr `npx` from start of webpack and webpack serve as we only need `npx` to run directly in terminal

**Webpack Modes**

- `production` mode makes even more jumble of characters
- to save from manually editing configuration, can have a `webpack.dev.js` and `webpack.prod.js` then have your build and dev npm scripts specify which configuration files to use. (omitting the `--config` option makes Webpack search for `webpack.config.js` by default)

```
"build": "webpack --config webpack.prod.js",
"dev": "webpack serve --config webpack.dev.js"
```

`webpack-merge` tool that can make multiple webpack configs easier

**Template repositories**

- Option on Github for `Repository template`
- `Repository template` dropdown list any template you select
