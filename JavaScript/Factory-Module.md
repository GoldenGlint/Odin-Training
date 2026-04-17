**Introduction**

Many ways to organize your code. Object Constructors have flaws

**Lesson Overview**

Overview:
- Variable scope
- Closures
- Factory functions
- Private variables
- IIFEs and the module pattern
- Encapsulation

**Scoopfuls of scopes**
- word "scoping" asks where are certain variables available to me?
- variable not declared within any `{}` available *global scope*, or everywhere
- within function or `{}` they are *locally scoped*

**Closures aren't scary**

- Can use function to create another function

```
function makeAddingFunction(firstNumber) {
  // firstNumber is scoped anywhere within makeAddingFunction,
  // including returnedFunction
  // any variables declared here will also be accessible within returnedFunction

  // we don't need to name the returned function
  // this is just to reference more easily in explanation
  return function returnedFunction(secondNumber) {
    // secondNumber is scoped only within returnedFunction
    return firstNumber + secondNumber;
  }
}
```

- `returnedFunction` forms a closure around the `firstNumber` parameter.
- *closure* refers to the combination of a function and the **surrounding state* in which function was declared
- surrounding state also called **lexical environment**
- `add5` is a reference to the function returned by `makeAddingFunction(5)` call
- after `makeAddingFunction(5)` finishes executing, 5 not cleaned up in memory because returned function still needs it
- returned function **STILL** has access to its lexical environment (in this case, contains the `firstNumber` parameter)
- crucial behaviour of cuntions, allows us to associate data with functions and manipulate data anywhere outside the enclosing function

**What's wrong with constructors**
- don't provide automatic safeguards 
- look like regular functions, even though they don't behave like regular functions, eg can use without `new` keyword

**Factory Functions**
- levy power of closures, instead of using `new` they set up and return the new object when you call the function. 

```
function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}
```

normal function, don't need to call the `new` keyword

```
const name = "Bob";
const age = 28;
const color = "red";

const thatObject = { name: name, age: age, color: color };

```

if we have a variable with the same name as that of the property which we are assigning, we can write it once

```
const nowFancyObject={name, age, color};
console.log({ name, age, color });
```

the log also logs it much cleaner, don't need fancy variables

**Destructuring**

destructing same name as field 

```
const obj = { a: 1, b: 2 };

// equivalent of doing
// const a = obj.a;
// const b = obj.b;
const { a, b } = obj;
```

with arrays

```
const array = [1, 2, 3, 4, 5];

// equivalent of doing
// const zerothEle = array[0];
// const firstEle = array[1];
const [zerothEle, firstEle] = array;
```

**Private variable and functions**

where does closure come into this? Factories seem to be returning an object. This is where we can extend out `User` factory to add a few more variables.

```
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
```

- containes `reputation` variable, but not mentioned, has one that can get reputation, and one that can add
- private variable since we cannot add
- private variable or function uses closures to create smaller, dedicated variables, and functions within factory function
- In this case, do not need `reputation` variable itself. To avoid foot guns, use `getReputation` and `giveReputation`

**Prototypal inheritance with factories**

```
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => { level++; };
  return { name, getReputation, giveReputation, increaseLevel };
}
```

call the functions from get user so we can get them and use them, expose all htings we need. 
createUser(name) is created in the function

```
return Object.assign({}, user, { increaseLevel });
```

- means take an empty object, add the things from user in it, and add increaseLevel


**The module pattern**

IIFEs, sometime you do not need factory produce multiple objects, instead using it to wrap sections of code together
- easily achievable by wrapping your factory function in parentheses and immediately calling (invoking) it. Immediate function call is commonly referred to as an Immediately invoked function

```
const calculator = (() => {
  let lastResult;

  const add = (a, b) => {
    lastResult = a + b;
    return lastResult;
  };
  const subtract = (a, b) => {
    lastResult = a - b;
    return lastResult;
  };
  const multiply = (a, b) => {
    lastResult = a * b;
    return lastResult;
  };
  const divide = (a, b) => {
    lastResult = a / b;
    return lastResult;
  };
  const getLastResult = () => lastResult;

  return { add, subtract, multiply, divide, getLastResult };
})();
```

If we just made it an object literal, it would hhave all things public

**encapsulation**, bundling data, code, or something into a single unit, with selective access to things insade that unit itself 

Why the IIFE, we may only want to purposely invoke it once. Packing code to a module. 




