***Introduction***

- Important to learn strategies for creating duplicates, or instances of objects, and using existing objects for creating new ones through inheritance. 

***Lesson Overview***

- Instantiating objects using constructors
- What a prototype is and how it can be used
- Prototypal inheritance
- Basic do's and dont's of prototpyal inheritance
- How to use `this` keyword behaves in different situations

***Object constructors***

Manually typing out all of our object literals is not feasible. Make constructor
```
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```

Only difference is you use it by calling the function with keyword 'new'

```
const player = new Player("steve", "X");
console.log(player.name); // "steve"
```

Not the same as calling `Player("steve", "X')` without the new keyword. 
- When we call a function with `new` it creates a new object, makes `this` inside the function refer to that object, makes that object inherit from function `.prototype` property
- new object is returned, (even though we don't specify `return` value)

Just like objects created using the object literal method, you can add functions to object:

```
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs "steve"
player2.sayName(); // logs "also steve"
```
```
function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  };
}
```

use the if(!new.target) meta property to throw error if called without new

exercise
```
function Book(title, author, pages, read){
   if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.info=function(){
    console.log("The book $(title) is written by $(author) with $(pages) pages. Read is $(read)")
  } 
}
```

**The Prototype**

All objects in JavaScript have a `[[Prototype]]`
- `[[Prototype]]` another object that the original object *inherits* from, original object has access to all of it's `[[Prototype]]`'s methods and properties

1. All objects in JavaScript have a [[Prototype]]
2. The [[Prototype]] is another object
- [[Prototype]] object can have properties and functions
3. ...that the original object inherits from, and has access to all of its [[Protypes]]'s methods and properties
- for example if prototype has '.sayHello()' function, player can use it too. 

Accessing an object's [[Prototype]]
How to know or see what the prototype of an object is. Try running the following code in the developer console of browser. 
```
Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
```

1. All objects in JavaScript have a `[[Prototype]]`:
- Check the obj prototype by using the `Object.getPrototypeOf()` function.
- Object.getPrototypeOf(player1) will return the object at the .prototype property of the Player constructor (i.e. Player.prototype).
2. The [[Prototype]] is another object...
- value of the `Player.prototype` contains an object
- reference to `Player.prototype` 
3. ... that the original object inherits from, and has acess to all of its prototype's methods and properties

```
Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
```
define `.sayHello` function on the `Player.prototype`. It's then available to player1 and player2. Now yo ucan attach other properties or functions you want to use on all `Player` objects by defining them on objects' `[[Prototype]]`

**`.prototype` is a property of functions that determines what a new instance's `[[Prototype]]` will be set to when function is called with new. it is *not* for accessing an objects prototype, that's what `Object.getPrototypeOf()` is for**

Prototypal inheritance

What use is an object's `[[Prototype]]`? What is the purpose of defining properties and functions on a prototype

1. Define properties and functions common among all objects on a prototype to save memory. Defining every property and function takes up a lot of memory, expecially if you have a lot of common properties and functions, and a lot of created objects! Defining them on centralized save memory
2. **Prototypal Inheritance** which we've referred to in passing earlier. 

```
// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
```