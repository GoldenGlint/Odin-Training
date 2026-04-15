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