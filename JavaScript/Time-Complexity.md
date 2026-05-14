## Time Complexity

**Introduction**

- Written a lot of code up to this point.
- Two kinds of efficiency time complexity and space complexity

**Lesson Overview**

- How the efficiency of an algorithm is measured
- What is Big O
- What are the Big O notations used to measure an algorithm's efficiency
- How else can we measure an algorithm's efficiency
- what to do when two algo's have the same complexity

**Efficiency basics**

```
function oddNumbersLessThanTen() {
  let currentNumber = 1;

  while (currentNumber < 10) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}
```

- we can count steps but that isn't useful

```
function oddNumbers(maxNumber) {
  let currentNumber = 1;

  while (currentNumber < maxNumber) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}
```


**Asymptotic notations**

- describe the running time of an algorithm
- Several notations that measure running time in different ways
- 3 most comming are:
    * Big O Notation - represents the upper bound of algorithm, worst-case scenario
    * Omega Notation - represents the lower bound of an algorithm, best-case scenario
    * Theta Notation - represents both the upper bound and lower boud, average-case scenario
- Big O one you'll most commonly see referenced because need to write worst-case scenario, make sure it's scalable
- Notations for Big O also apply to Omega and Theta notations. Difference are how they look to measure efficiency and therefore which notation, should become clearer as you read on. 

