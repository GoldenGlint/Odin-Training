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

**Import and export**

how do we actually import and export? Two types:
(they essentially do the same kind of thing slightly different. Can be mixed and match) 

`default`

a file can only default export one thing. Something exported this way does not have a name attached. 
Can do inline by prepending `export default` or we can export it at the end without curly braces. `default` replaces variable declaration

```
// one.js
export default "Hello, Odinite!";
or
// one.js
const greeting = "Hello, Odinite!";
export default greeting;

```

in other file, we can default import that string. we don't have to call it if we don't want to. 

```
// two.js
import helloOdinite from "./one.js";

console.log(helloOdinite); // "Hello, Odinite!"
```


`named`

use `export` keyword in front of declaration or add `export {}` somehwere in the file (typically the end)

```
// one.js
export const greeting = "Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";
or
// one.js
const greeting = "Hello, Odinite!";
const farewell = "Bye bye, Odinite!";
export { greeting, farewell };
```

Still need to import in the other file. Only import what we need. must specify names of things we want to import in `{}` and path to file we're importing from
```
// two.js
import { greeting, farewell } from "./one.js";

console.log(greeting); // "Hello, Odinite!"
console.log(farewell); // "Bye bye, Odinite!"
```

mix and match them importing like this

```
import greeting, { farewell } from "./one.js";

console.log(greeting); // "Hello, Odinite!"
console.log(farewell); // "Bye bye, Odinite!"
```

**Entry Points**

When we use ESM, instead of adding every JavaScript file to our HTML, we only need entry point. 
Importer depends on exporter. 

need to use type="module" like `<script src="two.js" type="module"></script>`

**CommonJS**

This is what node uses