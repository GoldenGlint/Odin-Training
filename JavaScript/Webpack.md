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

**Handling HTML**

- can use `HtmlWebpackPlugin` to download HTML into that
- run the following : `npm install --save-dev html-webpack-plugin` to install the app
- create a `template.html` inside the src. Fill it with the JavaScript file. Don't need to use the script tag because dist will bundle that autimatically with a script tag. Auto add output as script in it. 
- Inside `webpack.config.js` we can dd the following:
```
// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
```

If we provide a path to `src/template.html` from the `template` field, if we run `npx webpack`, `dist` also contains `index.html`

**Loading CSS**

Don't need one package for CSS, we need two,

`npm install --save-dev style-loader css-loader`

- `css-loader` read any css in the JavaScript file and store it as a string
- `style-loader` then takes that string and actually adds the JavaScript code that will apply those styles to the page
- `webpack.config.js` add this loader

```
// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

- if it ends with CSS, then you use this

```
Notice how we put css-loader at the end of the array. We must set this order and not the reverse.

Webpack will run the loaders starting at the end, so we want it to read the CSS file into a string with css-loader first, then use style-loader to inject the JavaScript that applies the CSS in that string to the page. It wouldn’t work the same the other way round.
```

in real life, it's a lot easier to link multiple small CSS files into the application rather than at once. could do it with loaders


**Loading Images**

1. Images inside our CSS inside `url()`
- `css-loader` already handles this for us, nothing extra to do for image paths in CSS
2. Image files we reference in our HTML template, e.g. as the `src` of an `<img>`
- need to install and tell Webpack to use something called 'html-lodaer' which will detect image file paths in our HTML template, load the right image files for us. without this, `src` like `./odin.png` would be a bit of text that would no longer reference correct file one we have `dist`

`npm install --save-dev html-loader`

add the following to `module.rules` array within `webpack.config.js`:

3. Images we use in our JavaScript, where we will need to import the files

we need to use local file from our JavaScript `img` elements and set their `src` attribute, we need to import into JavaScript module, need to tell Webpack these files will be assets by adding `asset/resource` rule. add the following. 

```
// src/index.js
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
```
need to import it so `odinImage` variable contains the correct file path, even when we bundle into `dist`

images included when bundling, output image file in `dist` has a different file name

`npm install --save-dev webpack-dev-server` makes it so you don't need to rebundle with every change. Won't need to rerun npx webpack every time.

add a source mape by setting `eval-source-map` as a `devtool` optoin. If we don't do this, error messages won't necessarily match up.

`webpack-dev-server- will only auto-restart when it detects any changes to files we import into our JavaScript bundle

run `npx webpack serve` to start the server


**Rounding Up**

apps more complex, need to potimize things. will use later lessons that make setting up easier and quicker. 


