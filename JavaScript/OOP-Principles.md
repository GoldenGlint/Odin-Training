**Introduction**

- not straightforward when to make new object, when to let it inherit etc
- several concepts and principles that tell us how
- not rules, heplful guidelines

**Lesson Overview**

- "Single Responsibility Principle"
- SOLID principles
- tightly coupled objects, and why to avoid
- why composition preferred to inheritance

**Single Responsibility**

- class shold only have *one* responsibility. 
- Good idea to seperate DOM stuff from application logic

eg.

```
function isGameOver() {

  // game over logic goes here!

  if (gameOver) {
    const gameOverDiv = document.createElement('div');
    gameOverDiv.classList.add('game-over');
    gameOverDiv.textContent = `${this.winner} won the game!`;
    document.body.appendChild(gameOverDiv);
  }
}
```
- funciton and module it's in should not directly be the one to manipulate the DOM. extract all DOM Manipulation in it's own model

```
function isGameOver() {

  // game over logic goes here!

  if (gameOver){
    DOMStuff.gameOver(this.winner);
  }
}
```

- second issue remainig is that `isGameOver` function should only be responsible for checking if the `gameOver` condition is met
- Based on `isGameOver` return value function that handles game loop should call `DOMStuff.gameOver(this.winner)`
- Single Responsibility first commonly found set of 5 design principles called the **SOLID** principles. 

**Loosely coupled objects**

- individual objects can stand alone as much as possible
- **Tightly Coupled** means changing one means oy uneed to completely change another
- eg. if we are writing a game and change User Interface, should do that without reowrking game logic
    - should be able to write game using `console.log()` then adding in `DOM` stuff
