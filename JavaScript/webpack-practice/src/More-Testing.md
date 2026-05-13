## More Testing

**Introduction**
- testing in isolation
- only test one method at a time
- not depend on external function behaving correctly
- tests fail, want to narrow failure as quickly as possible

**Lesson Overview**

- what is tightly coupled code
- describe a pure function and how it related to TDD
- what mockng is

**Pure Functions**

- many benefits using TDD, helps you write better code 

```
function guessingGame() {
  const magicNumber = 22;
  const guess = prompt('guess a number between 1 and 100!');
  if (guess > magicNumber) {
    alert('YOUR GUESS IS TOO BIG');
  } else if (guess < magicNumber) {
    alert('YOUR GUESS IS TOO SMALL');
  } else if (guess == magicNumber) {
    alert('YOU DID IT! 🎉');
  } else {
    return 'INVALID INPUT';
  }
}
```

- this would be extremely hard to debug
- easier to test like this when we untangle from program

```
function evaluateGuess(magicNumber, guess) {
  if (guess > magicNumber) {
    return 'YOUR GUESS IS TOO BIG';
  } else if (guess < magicNumber) {
    return 'YOUR GUESS IS TOO SMALL';
  } else if (guess == magicNumber) {
    return 'YOU DID IT! 🎉';
  } else {
    return 'INVALID INPUT';
  }
}

function guessingGame() {
  const magicNumber = 22;
  const guess = prompt('guess a number between 1 and 100!');
  const message = evaluateGuess(magicNumber, guess);
  alert(message);
}

guessingGame();

```

- easier to test because it has clear input output doesn't call other functions
- easier to extend as well

**Mocking**

- First and best option remove depndencies
- *Mocking* writing "fake" versions of a function that awlays behaves exactly what you want
    - create a fake verison of input grabbing function that returns a specific value and use that in your test
