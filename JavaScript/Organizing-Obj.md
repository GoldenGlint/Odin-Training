**Overview:**
- Using objects to organize data
- objects organize functionality
- object methods and this keyword

**Refresher**
const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
  },
};

// dot notation
console.log(myObject.property); // "Value!"

// bracket notation
console.log(myObject["obnoxious property"]); // [Function]

Dot notation claner usually preferred. but sometimes it's not possible to use it.
- If there is spaces need to use bracket
- If using variable, need to use bracket

**Objects as a Data Structure**
function gameOver(winningPlayer) {
  console.log("Congratulations!");
  console.log(`${winningPlayer.name} (${winningPlayer.marker}) is the winner!`);
}

Grouping related data together into objects allows you to pass all data around more easily.
- Instead of having to have seperate parameters for name and marker, have one for entire object

**Objects as a design pattern**
- useful for organizing functionality as well
- Core tenets of Object Oriented Programming (OOP): based on "objects" can contain data and code. Daata in the form of fields, code in the form of procedures
    - In OOP, computer programs designed by making them out of objects that interact with one another
- Store logic via methods (functions part of objects), use methods interact with data
- eg: 

const car = {
  make: "Volkswagen",
  model: "Golf",
  year: 2026,
  color: "blue",
  priceUSD: 40000,
};

- *this* keyword is used to refer to the object a particular method is called from

const car = {
  make: "Volkswagen",
  model: "Golf",
  year: 2026,
  color: "blue",
  priceUSD: 40000,

  // a method is just a function assigned to a property
  applyDiscount: function(discountPercentage) {
    const multiplier = 1 - discountPercentage / 100;
    this.priceUSD *= multiplier;
  },
  // shorthand way to add a method to an object literal
  getSummary() {
    return `${this.year} ${this.make} ${this.model} in ${this.color}, priced at $${this.priceUSD} (USD).`;
  },

  // ...any other methods...
};

- *this* keyword can be used to read and assign properties of an object exactly the same ways as variable. 

- _someProperty, '_' is developer convention that states property is intended to be private. Only internal, cannot be read or called outside of the object itself.
- JavaScript does not have concept of real private properties

**Objects as machines**
- Obj manages other objs, "inventory" contains item objects in array, methods interact with array of items
- Listen for events that happen and respond appropriately (think of DOM)
- manages all things relating to the DOM, setting event listeners, call other objects' methods, displaying data from other objects
