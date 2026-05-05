## Asynchronous Code

**Introduction**

- JavaScript langauge of the web, functions necessity take time to compete
- Support for asynchronous functions, functions happen in background while code executes

**Lesson Overview**
- what a calback is
- explain what a promise is
- circumstances promise better than callback
- `.then()` function does

**Callbacks**

- past used `callbacks`, though they are still used
- callbacks function passed to other functions

```
myDiv.addEventListener("click", function(){
  // do something!
})
```

- here the funciton `addEventListener()` takes a callback, the "do something" function and calls when `myDiv` gets clicked
- happens all the time, but this can get out of hand especially when you need to chain in a specific order

**Promises**

- multiple ways to handle async, prmises one of them.
- promise object might return value at some point

```
const getData = function() {
  // go fetch data from some API...
  // clean it up a bit and return it as an object:
  return data
}
```

- say `getData()` is a function that fetches some data from a server and returns in object we can use in code
- issue is that it takes some time to fetch data, unless we tell our code that, execute instantly so:

```
const myData = getData()
const pieceOfData = myData['whatever']
```

- run into trouble because `pieceOfData` extraction out of returned data, `getData()` likely still be fetching so `myData` will be `undefined`

```
const myData = getData() // if this is refactored to return a Promise...

myData.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})
```
