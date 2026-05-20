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

#### Big O Notation
- consistent way to measure efficiency of an algorithm
- We need to count the number of steps
- when using data structures, we already kinda know how
- Fastest to slowest are
  - O(1)
  - O(logN)
  - O(N)
  - O(NlogN)
  - O(n^2)
  - O(n^3)
  - O(2^n)
  - O(N!)

O(1)
- to access an element in the array, it takes one step
- Big O doens't concern itself with incidental numbers

O(log N) -Logarithmic complexity
- number of steps to complete an algorithm increaes by 1 as data doubles
- eg binary search

O(N) -Linear complexity
- as number of items grows, number of steps grows as same rate
- in line with data structure

O(NlogN)- N x log N complexity
- merge sort is like this
- can be this pattern without splitting into O(N) and O(logn) complexities

O(N^2)- Quadratic complexity
- looping over a data set and within each loop you loop over it again

O(n^3) cubic complexity
- triple nesting a loop

O(2^n) Exponential complexity
- each item added to data size, doulbe from previous number of steps
- avoid this as much as posibble

O(N!) factorial complexity
- come across permutations and combinations
- this goes out of hand quickly

#### Alternatives to Big O

Big Omega
- best case scenario

```
function findValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item === 1) {
      return item;
    }
  }
}
```
- worst case big O is O(N)
- best case is O(1) because it's the first item in array
- not really useful

Big Theta Notation
- theta is useful range between upper and lower
- for loop, always O(N) so this is the theta notation
- Big O is the main why

#### Why Big O
- scale in all complexities
N=1, O(10N) = 10, O(n²) = 1

N = 5, O(10N) = 50, O(n²) = 25

N = 100, O(10N) = 1,000, O(n²) = 10,000 10x bigger

N = 1000, O(10N) = 10,000, O(n²) = 1,000,000 100x bigger

N = 10000, O(10N) = 100,000, O(n²) = 100,000,000 1000x bigger

-constants eventually become irrelevant