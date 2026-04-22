**Introduction**

- Introduction of ESM mitigate individual scripts.
- Awarness of bundlers and basic experience with them is valuable

**Lesson Overview**

- Explain the purpose of bundlers and how they work
- Configure Webpack to bundle JavaScript modules
- Configure Webpack to handle non-JavaScript files during bundling, including using HtmlWebpackPlugin
- Set up Webpack's development Server

**Bundling**

- Bundling, we provied the **entry point** based on a **dependency graph**

**Webpack**

- one of the most popular JavaScript bundlers.
- need to create `package.json` like this:
```
mkdir webpack-practice &&
cd webpack-practice &&
npm init -y --init-type=module
```

- included the `--save-dev` flag, or `-D` shortcut, which tells npm to record our two packages as development dependencies.
- npm creates `node_modules` and a `package-lock.json` file for us
- `nod_modules` is where Webpack code lives, and `package-lock.json` is just another file npm usesto track more specific package information

**src and dist**

- `src` short for "source" and `dist` short for "distribution`
- `src` is where we keep all of our website's source doe, where all the work will be dun
- run webpack to bundle code, output bundled in `dist` directory
- core idea, fork or clone project, can run Webpack to build from `src` into own `dist`. Only need `dist` code and nothing else. working inside `src`, build into `dist` then deploy there

**Bundling JavaScript**

- Webpack unlike dsm, will automatically check extension paths. 

```
// webpack.config.js
import path from "node:path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
};
```

`index.js` that imports from and depends on `greeting.js`
few key sections:
- `mode`: leave this in development, revisit this and production mode later
- `entry`: file path from config file to whichever file is our entry point, which in this case is `src/index.js`
- `output`: An object containing information about the output bundle.
-   `filename`: the name of the output bundle, can be anything you want
-   `path`: path of output directory, in this case `dist`. path to output directory. if it doesn't exist, it creates it but we have `path.resolve`
-   `clean`: if we include this option and set it to `true`, each time we run Webpack to bundle, empty the output directory first before bundling files into it. Helps us clean `dist` clean

running `npx webpack` created a lot of stuff in the `main.js` file. 