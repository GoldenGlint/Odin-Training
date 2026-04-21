**Introduction**

Learned about *module  pattern* in a previous lesson. ES6 lets us manage several modules.

**Lesson Overview**
- Explain what ES6 modules are and how ro import and export them
- Describe the difference between default and named exports
- Explain main differences between CommonJS modules, and ES6 modules

**Before ES6 modules: global scope problem**

```
<script src="one.js" defer></script>
<script src="two.js" defer></script>
// one.js
const greeting = "Hello, Odinite!";
// two.js
console.log(greeting);

```

This currently works, but if we swap `two.js` and `one.js` we would get error `greeting is not defined`

Before ESM, wrap things in an IIFE, which would run the same, however now variables scoped in function not globally. 
Problem in the sense that you can use IIFE to log some stuff, but not feasible for a lot of code.

**ES6** modules

ESM have more control over things. Each file has its private scope by default. Can choose what we export from that file. Can also choose what things to import into these files. 