**Introduction**

JavaScript does not have classes like Java or Ruby
However there is syntax for object create using `class`

**Lesson Overview**

- Explain differences between object constructor and a class
- What getters and setters are
- Describe basic class syntax
- Use inheritance with class
- Explain how to implement private class fields and methods
- Stats properties and methods

**Getters and Setters**

first kind of *data properties* . We already work with these

Second kind is accessor property. They are funcitons that execute on getting and setting a vlue.

**Getters and Setters**

- `get` and `set` properties

```
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```

outside, accessor property looks like a regulat one. Don't call `user.fullName`, read it normally
Currently, it only has a getter so user.fullName doesn't work

```
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

can make a setter so it works, now we have both a get and set. readable and writable

**Accessor descriptors**

accessor descriptor may have:
- `get`: function without arguments, works when a property is read
- `set`: function with one argument, called when property is set
- `enumerable` same as for data properties
- `configurable` same as for data properties

```
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```

- have both get and set that trigger depending on what they use. 

**Smarter getters/setters**

- used as wrappers over real property values to gain more control over operations with them.

```
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
```

name is stored in `_name` and the access is done via getter and setter
`user._name` technically they can use that, but _ is internal should not be touched

**Using for compatibility**

allowed to take control over reguar data by replacing it with setter and getter

```
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age
```
doesn't store it, recalculates on the spot when you do john.age

**Class Body**

3 aspects:
- kind: getter, setter, method or field
- location: Static or instance
- Visibility: Public or Private

Add up to 16 combinations

**Constructor**

special method for creating and initializing an object created with a class.
- can only be one special method with contructor
- can use super keyword to call constructor with super class

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

- static block lets you set initial values

**Methods**
- defined on prototype of each instance shared by all instances

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

**Static methods and fields**
- defined on the class itself instead of each instance

**Field Declarations**
- class field declaration syntax, constructor

**Field Declarations**
- don't use const to get them. Fields without values set to undefined

```
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

**Private Fields**
```
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```
use to declare using `#`

**Inheritance**

- `extends` keyword used in class declarations or class expressions to create a class as a child of another constructor

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```
- needs to use `super()` before using `this`
- `super` keyword can be used to call corresponding methods of super class

**Evaluation Order**

1. extends clause if present is first evaluated, must evaluate to a vlid constructor function or `null`
2. constructor method is extracted, substituted with `constructor` definition only method definition
3. the class elements' property keys are evaluated in order of declaration `this` value set to `this` none of the values are evaluated yet
4. methods accessors installed order of declaration, instance accessors prototype of current class, and static accessors on class itself. Private instance methods accessors saved to instance later
5. class initialized with prototype specified by `extends` and implimentation specified by `constructor`
6. class elements evaled order of declaration
-   instance field intializer expression is saved
-   static field, intializer evaluated with `this` set to class itself
7. class fully initialized used as constructor reference
