## Async and Await

**Introduction**

Asynchronous code can be difficult to follow when it has a lot of things.
`async` and `await` are two keywords that can help make asynchronous code read more like synchronous code. 

```
function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}
```
```
async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}
```

these two do the same thing. but `async` keyword before function declaration. How about `await` keyword.

**The async keyword**

- `async` keywork is what javascript know ur declaring asnychronous, required to use `await` inside the function.
- `async` function declared, automatically returns a promise. returning in `async` function is the same as resolving a promise. throw error reject prmise
- just syntactical sugar for `promises`

```
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}
```

**The await keyword**

- `await` does the following, tell JavaScript to wait for asynchronous action to finish before continuing funciton. like pause till done
- `await` keyword is use dto get value from function where you would normally use `/then()`.
- instead of calling `.then()` assign variable to the result using `await`

**Error Handling**

- `async` functions easy. promises have `catch()` for handling rejected promises. Since async just return a promise, can call function and append a `.catch()` method to the end

```
asyncFunctionCall().catch(err => {
  console.error(err)
});
```

- can also use `try...catch` with `async/await` syntax
- if JavaScript throws an error in the `try` block, `catch` block code will run instead

```
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
```
- can look messy, but easy way to handle error without appending `.catch()`
