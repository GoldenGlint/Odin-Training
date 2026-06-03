### HashMap Data Structure

#### Introduction
- takes in a key value pair, produces a hash code and stores the pair in a bucket

#### Lesson Overview
- hash codes and how to generate them
- hash maps and how they work internally

#### What is a hash code
- hashing means taking input in generate corresponding output. should be a pure function, no RNG

```cpp
function hash(name) {
  return name.charAt(0);
}
```

#### Use Cases
- organization, where a folder is organized into small folders
- we need to eliminate duplication, so rework hash function

```cpp
function hash(name, surname) {
  return name.charAt(0) + surname.charAt(0);
}
```

#### Buckets
- are the storage we need to store our elements
- consider each index of an array to have a bucket
- hash function returns a number that serves as the index of the array at which we store this specific key value pair
- Example, has person's full name as a key "Fred" with a value "Smith"
    1. Pass "Fred" into the hash function to get the hash code which is '385'
    2. Find the bucket at index '385'
    3. Store the key value pair in that bucket.
- what if the bucket at index 385 already contains the same key Fred, we check if it's the same item by comparing the keys, then overwrite with our new value  

To retrieve a value using the key:
- hash the key calculate index of its bucket
- if not empty, then we go to that bucket
- compare if the node's key is the same key that was used for the retrieval
- if it is, return node value, else return null

Insertion order no guaranteed
- does not follow linear progression, more unpredictable
- if iterating over it is your goal, the this data structure is not the right choice

#### Collisions
- occurs when two different keys generate the exact same hash code
Dealing with Collisions
- each `Node` inside the bucket has `Linked List`, each bucket is a Linked List
- if bucket is empty insert head of LinkedList, head exists in a bucket, follow LinkedList to add to the end of it

#### Growth of a hash map
- need to store buckets somewhere, start with 16 buckets
- use % operation to modulo them into the bucket
- collisions get more and more likely, more nodes than buckets guarantee colllisions
- to grow double the size
- hash map needs `capacity` and `load factor` 
    - `capacity` totla number of buckets we currently have
    - `load factor` is a number we assign out hashmap to at the start, load factor between 0.75 and 1

- product of these two numbers give us the number, know to grow when `total buckets*load factor<current buckets`

#### Computation complexity
- hash map has average O(1) for
    - insertion
    - retrieval
    - removal
- worst case is O(n) (all data hashes to same bucket)
- bucket growth is O(n) at all times