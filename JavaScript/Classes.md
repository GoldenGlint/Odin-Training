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
doesn't store it, recalculates on the spot when yo udo john.age

