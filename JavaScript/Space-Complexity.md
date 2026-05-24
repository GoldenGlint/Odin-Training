## Space Complexity

#### Introduction
focus on space complexity and show how same notation can be used for space
- memory means primary memory, which is working memory available to your system to execute algorithms

**Lesson Overview**
- what do we mean by space complexity
- why it's important to consider algorithm memory space
- how do we measure space complexity

#### What do we mean by space complexity

- total space used by an algorithm relative to the size of the input
- considers the space used by your algorithm and auxiliary space
    - these can be like temp variables, won't have lasting impact on memory space, but during the execution of algorithm needs to be considered
- total amount of working memory our algorithm needs

#### The importance of considering space complexity

- Memory these days is cheap, eg RAM is cheap
- most algos deal with very manageable input sizes
- hardware usually has fixed memory, can't expand memory easily on the fly

#### Measuring space complexity

- same as time complexity, difference is think about memory vs time

O(1) Constant complexity

```
function multiply(num1, num2) {
  return num1 * num2;
}

```

- no matter the arguments we pass, only a single value is created

O(N) - Linear complexity

- most programs are this way
- because increase number of items in your data structure, increases the space that DSA occupies in linear way

```
function sumArr(arr) {
  const copyArr = arr.slice();
  let sum = 0;
  copyArr.forEach((number) => {
    sum += number;
  });
  return sum;
}
```
- sum and copyArr, we then have a forEach
- space grows linearly 

**Other complexities**
- a lot of O(N) time and space for data structures
- many sorting structure have O(1) space complexity


**Other considerations**

```
function sumArr(arr) {
  let sum = 0;
  arr.forEach((number) => {
    sum += number;
  });
  return sum;
}
```

- things to consider: do we count arr as space? If we do, multiple things that count on it would use it. Otherwise everything would look great on paper. 