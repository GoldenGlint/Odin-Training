**Introduction**

JSON (JavaScript Object Notation) is a standardized format for structuring data.
- based on syntax for JS objects
- encounter when working with APIs or external servers
- universal format transmitting data on the web

**Lesson Overview**
- Learn what JSON is
- Understand how to read and write JSON formatted data


**What is JSON**

Structured data as a string
- can be used independently from JS
- can be stored in own file, `.json`

**JSON structure**

```
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

- can parse like normal object, then access with dot/bracket notation

```
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

Can convert arrays to/from JSON

JSON syntax restrictions
- can only contain serializable data types
    - can only contain string literals, number literlas, true, false, and null. Cannot contain `undefined`, `NaN`, or `Infinity`
    - non-primitives, can contain object literals and arrays, but not functnios for any other object types such as ` Date`, `Set`, and `Map`
- strings must be enclosed w double quotes
- Numbers in decimal notation
- Each property must be in form `"key":value`
- Object arrays cannot contain trailing commas
- no comments

`parse()`: accepts a JSON string as a parameter, and returns the corresponding JavaScript object
`stringify()`: accepts an object as a parameter, and returns the equivalent JSON string

- retrive response as text rather than JSON, by calling `text()` method of the response

- use `JSON.parse()` to convert the text to a JS object
- when using the `JSON.parse()` on a JSON derived from an array, method return a JS array instead of JS object

- use `JSON.stringify()` to convert to a string
- `JSON.stringify()` can convery an JS value into a string
- will remove any functions from a js object, both key and value, should convert function to string before running `JSON.stringify()`

