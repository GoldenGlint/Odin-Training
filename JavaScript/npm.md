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

