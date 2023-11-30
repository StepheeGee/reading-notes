
# Day One


## CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value. Push the new value into a local array. Return the local array.

```javascript
const newArr = [];

const addOne = (arr) => {
  arr.forEach(number => {
    newArr.push(number + 1);
  });
  return newArr;
};
```

---

## CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string and add the updated value into a local array. Return the local array.

```javascript
const stringArr = [];

const addExclamation = (arr) => {
  arr.forEach(item => {
    stringArr.push(item + '!');
  });
  return stringArr;
};
```

---

## CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings and returns a new array of the strings converted to uppercase.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.

```javascript
const newUpperCase = [];

const allUpperCase = (arr) => {
  arr.forEach(item => {
    newUpperCase.push(item.toUpperCase());
  });
  return newUpperCase;
};
```

---

## CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function.

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array.

```javascript
const greeting = (word) => {
  return word.toUpperCase() + '!';
};

const speaker = (words, callback) => {
  const newArr = [];
  words.forEach(item => {
    newArr.push(callback(item));
  });
  return newArr;
};
```

---

## CHALLENGE 5

Write a function named `addValues` that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named `addNumbers` that takes in four arguments:
- A number to be added to an array
- An array into which the number should be added
- The number of times the number should be added
- A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the `addNumbers` function, invoke the callback function as many times as necessary, based on the third argument of the `addNumbers` function. Return the modified array.

```javascript
const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
};
```

---

## CHALLENGE 6

Write a function named `createList` that takes in an array of the current store inventory.

The inventory is formatted like this:

```javascript
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]
```

This function should use `forEach` to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.

```javascript
const createList = (availableItems) => {
  let groceryList = [];
  availableItems.forEach(function(item) {
    if (item.available) {
      groceryList.push(item.name);
    }
  });
  return groceryList;
};
```


# Day Two

## CHALLENGE 1 - Review

Write a function named `raisedToTheThird` that takes in an array of numbers and returns a new array of each of those numbers raised to the 3rd power (hint: look up `Math.pow()`). Use `forEach` to solve this problem.

```javascript
const newArr = [];

const raisedToTheThird = (arr) => {
  arr.forEach((num) => {
    newArr.push(Math.pow(num, 3));
  });
  return newArr;
};
```

---

## CHALLENGE 2

Write a function named `addOne` that, given an array of numbers, uses `map` to return a new array with each value simply incremented by 1.

```javascript
const addOne = (arr) => {
  return arr.map(num => {
    return num + 1;
  });
};
```

---

## CHALLENGE 3

Write a function named `addQuestion` that, given an array of strings, uses `map` to return a new array containing each string followed by a question mark character.

```javascript
const addQuestion = (arr) => {
  return arr.map((word) => {
    return (word + '?');
  });
};
```

---

## CHALLENGE 4

Write a function named `forLoopTwoToThe` that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a `for` loop, `for...in` syntax, or `for...of` syntax.

```javascript
const forLoopTwoToThe = (arr) => {
  const newArr = [];
  for (const num of arr) {
    newArr.push(Math.pow(2, num));
  }
  return newArr;
};
```

---

## CHALLENGE 5

Write a function named `forEachTwoToThe` that produces the same output as your `forLoopTwoToThe` function from challenge 4, but uses `forEach` instead of a `for` loop.

```javascript
const forEachTwoToThe = (arr) => {
  const newArr = [];
  arr.forEach((num) => {
    newArr.push(Math.pow(2, num));
  });
  return newArr;
};
```

---

## CHALLENGE 6

Write a function named `mapTwoToThe` that produces the same output as your `forLoopTwoToThe` function from challenge 4 and your `forEachTwoToThe` function from challenge 5, but uses `map` instead of a `for` loop or `forEach`.

```javascript
const mapTwoToThe = (arr) => {
  return arr.map((num) => {
    return(Math.pow(2, num));
  });
};
```

# Day Three



## CHALLENGE 1 - Review

Write a function called `addTwo` that takes in an array and adds two to every value using a for loop. Place the new value in a new array. Return the new array.

```javascript
const addTwo = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 2);
  }
  return newArr;
};
```

---

## CHALLENGE 2

Write a function named `typeNum` that, given an array as input, uses `filter` to return an array containing only the numbers.

```javascript
const typeNum = (arr) => {
  return arr.filter((element) => typeof element === 'number');
};
```

---

## CHALLENGE 3

Write a function named `containsAnd` that, given an array of strings as input, uses `filter` to return an array containing only strings that contain 'and' within the string.

```javascript
const containsAnd = (arr) => {
  return arr.filter((string) => string.includes('and'));
};
```

---

## CHALLENGE 4

Write a function named `oddValues` that, given an array of integers as input, uses `filter` to return an array containing only the odd integers.

```javascript
const oddValues = (arr) => {
  return arr.filter((num) => num % 2 !== 0);
};
```

---

## CHALLENGE 5

Write a function named `notInFirstArray` that, given two arrays as input, uses `filter` to return an array of all the elements in the second array that are not included in the first array.

```javascript
const notInFirstArray = (forbiddenValues, arr) => {
  return arr.filter((value) => !forbiddenValues.includes(value));
};
```

---

## CHALLENGE 6 - Stretch Goal

Write a function named `getBaseStatGreaterThan` that, given the `snorlaxData` and an integer as input, uses `filter` to return an array containing all stats with a `baseStat` greater than the integer.

```javascript
const snorlaxData = {
  stats: [
    //... stats data
  ],
  name: 'snorlax',
  weight: 4600,
};

const getBaseStatGreaterThan = (arr, minBaseStat) => {
  return arr.filter((stat) => stat.baseStat > minBaseStat);
};
```

---

## CHALLENGE 7 - Stretch Goal

Write a function named `getStatName` that extends the `getBaseStatGreaterThan` function from challenge 6. This function returns only the name of the stat, rather than the entire stat object.

```javascript
const getStatName = (arr, minBaseStat) => {
  return arr
    .filter((stat) => stat.baseStat > minBaseStat)
    .map((stat) => stat.stat.name);
};
```

---

## CHALLENGE 8 - Stretch Goal

Write a function named `getCharactersWithoutChildren` that, given the array of characters, uses `filter` to return an array of all characters without children.

```javascript
const characters = [
  //... characters data
];

const getCharactersWithoutChildren = (arr) => {
  return arr.filter((character) => !character.children || character.children.length === 0);
};
```

---

## CHALLENGE 9 - Stretch Goal

Write a function named `evenOddNumericValues` that, given an array as input, uses `filter` to remove any non-numeric values, then uses `map` to generate a new array containing the string 'even' or 'odd', depending on the original value.

```javascript
const evenOddNumericValues = (arr) => {
  const numericValues = arr.filter((value) => typeof value === 'number');
  const result = numericValues.map((value) => (value % 2 === 0 ? 'even' : 'odd'));
  return result;
};
```
