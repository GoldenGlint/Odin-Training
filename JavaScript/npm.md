**Introduction**

Learned about ES6 modules and the syntax used for importing and exporting things between modules. Might not want to write everything ourselves. Might want to import thid party code to handle some things. To find these, may need NPM to help. 

**Lesson Overview**

- Understand what npm is
- Understand purpose of `package.json` file

**npm**

Package manager, gigantic repository of plugins, libraries, and other tools, provides us with command-line tool we can use to install. Have all our installed packages code locally.

**package.json**

npm revolves around a file called `package.json`, JSON file containing information about our project, such as its name, or any dependencies and their version numers.
- npm can read this file and do things such as install all of the listed dependencies with correct versions
- `package.json` file for Odin curriculum repos

```
{
  "name": "curriculum",
  "version": "1.0.0",
  "description": "[The Odin Project](https://www.theodinproject.com/) (TOP) is an open-source curriculum for learning full-stack web development. Our curriculum is divided into distinct courses, each covering the subject language in depth. Each course contains a listing of lessons interspersed with multiple projects. These projects give users the opportunity to practice what they are learning, thereby reinforcing and solidifying the theoretical knowledge learned in the lessons. Completed projects may then be included in the user's portfolio.",
  "scripts": {
    "lint": "markdownlint-cli2",
    "fix": "markdownlint-cli2 --fix"
  },
  "license": "CC BY-NC-SA 4.0",
  "devDependencies": {
    "markdownlint-cli2": "^0.12.1"
  }
}
```

if you ran `npm install`, npm would read the `package.json` file and see it needs to install `markdownlint-cli2` package
- `npm install` grabs the code
- once we use npm to install any new packages or uninstall any, it will autimatically update our `package.json` file

**Downloading and installing packages locally**

use Node.js require, this is only local, and also `npm install`'s default

Installing an unscoped package
- Unscoped package always public, meaning they can be searched for, downloaded, installed by anyone

`npm install <package_name>`
- this will create the `node_modules` directory in current directory, and download the package in that directory

Installing a scoped public package
- downloaded and installed by anyone

Installing private package
- only those who have been granted read access to package

Testing package installation
- confirm `npm install` worked correctly, check `node_modules` directory exists and that it contains directory

**Creating a package.json file**

- lists packages your project depends on
- specifies versions of package that your project can use
- makes your build reproducible, easier to share with other devs

Requires name and version fields
- `name` field contains package name must be lowercase w/o spaces
- `version` must be in the form `x.x.x`

Author field
- `"author"` field following format `Your Name <email@example.com> (https://example.com)`

Example
```
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "author": "Your Name <email@example.com> (https://example.com)"
}
```

Creating a new `package.json` file- can create one by running CLI questionnaire, or creating defaul `package.json` file


Create CLI questionnaire, use `npm init`
1. navigate to root directory of package
2. run `npm init`
3. Answer questoin in ommand line questionnaire

Creating a default `package.json` file
1. navigate to root directory of package
2. run `npm init --yes`


`devDependencies` are necessary for dev
`dependencies` necessary for both
