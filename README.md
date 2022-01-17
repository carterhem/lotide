# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @carterhem/lotide`

**Require it:**

`const _ = require('@carterhem/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: asserts if two arrays are equal
* `function2(assertEqual)`: asserts if items are equal
* `function3(assertObjectsEqual)`: asserts if two Objects are equal
* `function3(countLetters)`: counts the letters in a string
* `function3(countOnly)`: counts only the specified items from the second item in the first
* `function3(eqArrays)`: checks if arrays are equal
* `function3(eqObjects)`: checsk if objects are equal
* `function3(findKey)`: scans object and returns first key where callback finds truthy value
* `function3(findKeyByValue)`: scans object and returns first key with given value
* `function3(head)`: returns head of array
* `function3(letterPosition)`: retunrs all the indices in a string where each character is found
* `function3(map))`: creates new array with results of function called on original array
* `function3(middle)`: pulls middle of even or odd array
* `function3(tail)`: returns tail of array
* `function3(takeUntil)`: returns array with values up until given value
* `function3(without)`: makes new array with items specified removed

