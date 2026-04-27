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