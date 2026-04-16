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


