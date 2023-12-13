
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

# Day Four


const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toys: 57,
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

In the `addPeople` function, use spread and destructuring assignments to:
- Create a new array called `newPeople` as a copy of the `people` array
- Add a person named 'Odie' added to the beginning of the array
- Add another one named 'Garfield' added to the end of the array

Prove that the original `people` array is unchanged

Using spread and destructuring assignment, create a new object called `newStuff`, which is a copy of the `stuff` object, with a new car added to the end of the cars array within it.
Create a `state` object with keys of `people` and `stuff` that contain the `people` and `stuff` data.
Do this using object destructuring assignment.
Using spread and destructuring assignments, create a new object called `newState`, repeating the `newPeople` and `newStuff` steps above but directly within the `people` and `stuff` nodes of the `state` object (don't just spread in `newPeople` and `newStuff`).
Ensure that the original `people`, `stuff`, and `state` are unchanged.
------------------------------------------------------------------------------------------------ */

const addPeople = (arr) => {
  const newPeople = ['Odie', ...people, 'Garfield'];
  return newPeople;
};

const newStuff = {...stuff};

const state = {
  people: [...people],
  stuff: {...stuff}
};

const newState = {
  people: ['Odie', ...people, 'Garfield'],
  stuff: {...stuff, cars: [...stuff.cars, 'newCar']}
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

In the `setState` function, use spread and destructuring assignments to:
- Create and return a state object with 2 keys:
  - `people`, which will contain a copy of the `people` array
  - `stuff`, which will contain a copy of the `stuff` object

Ensure that the original `people` array and `stuff` objects are unchanged.

Using spread and destructuring assignments, create a new object called `newState`, repeating the `newPeople` and `newStuff` steps above but directly within the `people` and `stuff` nodes of the `state` object (don't just spread in `newPeople` and `newStuff`).
Prove that the original `people`, `stuff`, and `state` are unchanged.
------------------------------------------------------------------------------------------------ */

const setState = (arr) => {
  const newState = {
    people: [...people] ,
    stuff:{...stuff}
  };
  return newState;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

In the `newState` function, use only spread and destructuring assignments to:
- Create and return a state object with 2 keys:
  - `people`, which will contain a copy of the `people` array
  - `stuff`, which will contain a copy of the `stuff` object
  - Add a new car ("Ford") added to the list of cars
  - Change the toothbrush from "frayed" to "brand new"
  - Add 1 to the number of toys

Ensure that the original `people` array and `stuff` objects are unchanged.
------------------------------------------------------------------------------------------------ */

const newState = (arr) => {
  const updatedState ={
    people: [...people],
    stuff: {
      ...stuff,
      cars:[...stuff.cars, 'Ford'],
      toothbrush: 'brand new',
      toys: stuff.toys + 1
    }
  }
  return updatedState;
};

# Day 5 

## Concepts
<details>
<summary>Find Maximum Value in Array </summary>


### Using Math.max() with Spread Operator:
```javascript
const numbers = [5, 2, 9, 1, 7];
const max = Math.max(...numbers);
console.log(max); // Output: 9
```

### Using Math.max() with apply():
```javascript
const numbers = [5, 2, 9, 1, 7];
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 9
```

### Using a Loop (for...of or forEach) to find the maximum:
```javascript
const numbers = [5, 2, 9, 1, 7];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); // Output: 9
```

### Using reduce():
```javascript
const numbers = [5, 2, 9, 1, 7];
const max = numbers.reduce((acc, curr) => (acc > curr ? acc : curr), numbers[0]);
console.log(max); // Output: 9
```

All these methods achieve the same result—finding the maximum value within the array. The choice of method depends on personal preference, readability, and specific requirements of your code.
</details>

<details>
<summary>Object to Array </summary>

### Object.values():
This method returns an array of the object's own enumerable property values.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.values(obj);
console.log(arr); // Output: [1, 2, 3]
```

### Object.keys():
This method returns an array of the object's own enumerable property names.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.keys(obj);
console.log(arr); // Output: ['a', 'b', 'c']
```

### Entries and Mapping:
Using `Object.entries()` to get an array of key-value pairs and then mapping it to the desired format.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.entries(obj).map(([key, value]) => ({ key, value }));
console.log(arr);
// Output: [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
```

Each method provides a different structure for the resulting array based on whether you need the values, keys, or key-value pairs from the object. Choose the method that best suits your requirements.
</details>

<details>
<summary>Check if a Value is in an Object</summary>


### Using Object.values():
```javascript
const valueInObject = (obj, value) => {
  return Object.values(obj).includes(value);
};

const sampleObj = { a: 1, b: 2, c: 3 };
console.log(valueInObject(sampleObj, 2)); // Output: true
console.log(valueInObject(sampleObj, 5)); // Output: false
```

### Using a for...in loop:
```javascript
const valueInObject = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
};

const sampleObj = { a: 1, b: 2, c: 3 };
console.log(valueInObject(sampleObj, 2)); // Output: true
console.log(valueInObject(sampleObj, 5)); // Output: false
```

### Using Object.keys():
```javascript
const valueInObject = (obj, value) => {
  return Object.keys(obj).some(key => obj[key] === value);
};

const sampleObj = { a: 1, b: 2, c: 3 };
console.log(valueInObject(sampleObj, 2)); // Output: true
console.log(valueInObject(sampleObj, 5)); // Output: false
```

All these functions take an object and a value as arguments. They check if the provided value exists within the object, returning `true` if it's found and `false` otherwise. You can choose the method that fits your coding style or requirements.
</details>

<details>
<summary>Change an Object to an Array</summary>

### Using `Object.entries()`:
This method returns an array of a given object's own enumerable property `[key, value]` pairs.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.entries(obj);
console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]
```

### Using `Object.keys()` and `Array.map()`:
This approach gets an array of the object's keys using `Object.keys()` and then maps over these keys to create an array of `[key, value]` pairs.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.keys(obj).map(key => [key, obj[key]]);
console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]
```

### Using `Object.values()` and `Object.keys()`:
Combining `Object.keys()` and `Object.values()` to create an array of `[key, value]` pairs.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
const values = Object.values(obj);
const arr = keys.map((key, index) => [key, values[index]]);
console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]
```

Each of these methods transforms an object into an array, providing different structures—such as key-value pairs or arrays with keys and values—depending on your specific needs or how you want to manipulate the data.
</details>

<details>
<summary>Dot Reduce</summary>


### Summing all numbers in an array:
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

### Flattening an array of arrays into a single array:
```javascript
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
```

### Counting occurrences of elements in an array:
```javascript
const colors = ['red', 'blue', 'green', 'red', 'blue', 'red'];
const colorCount = colors.reduce((acc, color) => {
  acc[color] = (acc[color] || 0) + 1;
  return acc;
}, {});
console.log(colorCount);
// Output: { red: 3, blue: 2, green: 1 }
```

### Grouping objects in an array by a property:
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 28 },
];

const groupedByName = people.reduce((acc, person) => {
  acc[person.name] = acc[person.name] || [];
  acc[person.name].push(person);
  return acc;
}, {});

console.log(groupedByName);
// Output: { Alice: [ { name: 'Alice', age: 25 }, { name: 'Alice', age: 28 } ], Bob: [ { name: 'Bob', age: 30 } ] }
```

In each example, `reduce()` accumulates the result based on the logic within its callback function, where the accumulator (`acc`) stores the accumulated value and the current element (`currentValue`) represents the current item in the array being processed.
</details>



c

### Extracting values of an object into an array:
```javascript
const obj = { a: 1, b: 2, c: 3 };
const valuesArray = Object.values(obj);
console.log(valuesArray); // Output: [1, 2, 3]
```

### Accessing values in a loop:
```javascript
const obj = { a: 1, b: 2, c: 3 };
for (const value of Object.values(obj)) {
  console.log(value);
}
// Output:
// 1
// 2
// 3
```

### Using Object.values() with map():
```javascript
const obj = { a: 10, b: 20, c: 30 };
const doubledValues = Object.values(obj).map(value => value * 2);
console.log(doubledValues); // Output: [20, 40, 60]
```

### Checking if a value exists in an object:
```javascript
const obj = { a: 1, b: 2, c: 3 };
const hasValue = Object.values(obj).includes(2);
console.log(hasValue); // Output: true
```

### Converting a Set of values:
```javascript
const obj = { a: 1, b: 2, c: 3 };
const valuesSet = new Set(Object.values(obj));
console.log(valuesSet); // Output: Set { 1, 2, 3 }
```

`Object.values()` simplifies working with object values by providing a straightforward way to extract them into an array. This method is handy for various operations like manipulation, iteration, checking for values, and more.
</details>

<details>
<summary>Array.find</summary>

### Example 1: Finding a specific element in an array:
```javascript
const numbers = [10, 20, 30, 40, 50];
const found = numbers.find(num => num > 25);
console.log(found); // Output: 30
```
Use case: Finding the first number greater than 25 in the `numbers` array.

### Example 2: Finding an object by a property value:
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];
const foundPerson = people.find(person => person.age === 30);
console.log(foundPerson); // Output: { name: 'Bob', age: 30 }
```
Use case: Finding the first person object with an age of 30 in the `people` array.

### Example 3: Finding an object based on multiple conditions:
```javascript
const products = [
  { id: 1, name: 'Chair', price: 50 },
  { id: 2, name: 'Table', price: 100 },
  { id: 3, name: 'Desk', price: 80 }
];
const foundProduct = products.find(prod => prod.price > 70 && prod.name.includes('Desk'));
console.log(foundProduct); // Output: { id: 3, name: 'Desk', price: 80 }
```
Use case: Finding the first product in the `products` array with a price greater than 70 and containing 'Desk' in its name.

### Example 4: Handling a condition when the element is not found:

```javascript
const numbers = [1, 3, 5, 7, 9];
const found = numbers.find(num => num === 6);
console.log(found); // Output: undefined
```
Use case: Finding a number in the array that does not exist, resulting in `undefined`.

`Array.find()` is useful when you need to locate the first element in an array that matches a specific condition, and it returns `undefined` if no matching element is found.
</details>

Here's the provided code converted into Markdown format:

```markdown
## CHALLENGE 1 - Review

Write a function that finds the maximum value in an array.

```javascript
const maxInArray = (arr) => {
  return Math.max(...arr);
};
```

---

## CHALLENGE 2

Write a function named `getCourseKeys` that takes in the `courseInfo` object and returns an array containing the keys for the `courseInfo` object.

```javascript
const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  return Object.keys(obj);
};
```

---

## CHALLENGE 3

Write a function named `checkValues` that takes in an object and a value and returns `true` if the value is in the object.

```javascript
const checkValues = (obj, value) => {
  return Object.values(obj).includes(value);
};
```

---

## CHALLENGE 4

You are given an object with names and their corresponding phone numbers. HR has asked you to change the data to make it easier to print.

```javascript
const updateNumbers = (obj) => {
  return Object.entries(obj).map(([name, phoneNumber]) => `${name}: ${phoneNumber}`);
};
```

---

## CHALLENGE 5

Write a function named `getHouses` that returns a new array containing the names of all the houses in the data set.

```javascript
const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  // ... other characters data ...
];

const getHouses = (arr) => {
  const houses = arr.reduce((housesArr, character) => {
    if (character.house && !housesArr.includes(character.house)) {
      housesArr.push(character.house);
    }
    return housesArr;
  }, []);
  return houses;
};

// Example usage:
const houses = getHouses(characters);
console.log(houses);
// Output: ['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Baratheon', 'Snow']

```

## CHALLENGE 6

Write a function named `hasChildrenValues` that uses `Object.values` to determine if any given character in the data set has children.

```javascript

const hasChildrenValues = (arr, character) => {

  const foundCharacter = arr.find(char => char.name === character);
  if (foundCharacter) {

    const values = Object.values(foundCharacter);

    return values.includes(null) ? false : values.includes(undefined) ? false : values.includes([]) ? false : values.includes('') ? false : true;
  }
  return false;
};
```

<details>
<summary>Array.reduce to reverse a string</summary>

You can utilize `reduce` to reverse a string by iterating through its characters in reverse order. Here's how you can do it:

```javascript
const reversedString = (str) => {
  return str.split('').reduce((reversed, character) => character + reversed, '');
};
```

Here's a breakdown of the process:

- `split('')` breaks the input string into an array of characters.
- `reduce` starts with an empty string as the initial `reversed` value.
- The callback function takes each `character` from the array and adds it before the current `reversed` string. This effectively reverses the string by accumulating characters in reverse order.
- Finally, `''` as the second argument in `reduce` represents the initial value for the `reversed` string.

For instance:

```javascript
const inputString = "Hello, world!";
const reversed = reversedString(inputString);
console.log(reversed); // Output: "!dlrow ,olleH"
```

This function reverses the input string without using the built-in `.reverse()` method by leveraging the `reduce` method and string manipulation.
</details>

<details>
<summary>Count number of elements in an array using reduce</summary>
 You can count the number of elements in an array using `reduce` without using the built-in `length` property. Here's an implementation for the `countNumberOfElements` function:

```javascript
const countNumberOfElements = (arr) => {
  return arr.reduce((count) => count + 1, 0);
};
```

This function takes an array as input and uses `reduce` to count the number of elements.

Example usage:

```javascript
const array = [1, 2, 3, 4, 5];
const numberOfElements = countNumberOfElements(array);
console.log(numberOfElements); // Output: 5
```

Here's how it works:
- The `reduce` method starts with an initial value of `0` as the `count`.
- For each element in the array, `reduce` increments the `count` by `1`.
- Finally, the accumulated `count` value is returned, representing the total number of elements in the array.

This function effectively counts the number of elements in the array using `reduce` without relying on the array's built-in `length` property.
</details>

<details>
<summary>Total amount purchased using reduce</summary>
Certainly! To find the total amount purchased from an array of objects containing `item` and `purchasePrice` keys, you can use `reduce` to sum up all the `purchasePrice` values. Here's how you can implement the `addPurchases` function:

```javascript
const addPurchases = (arr) => {
  return arr.reduce((total, purchase) => total + purchase.purchasePrice, 0);
};
```

This function `addPurchases` takes an array of objects as input and uses `reduce` to accumulate the `purchasePrice` values into a total sum.

Example usage:

```javascript
const purchases = [
  { item: 'switch', purchasePrice: 399 },
  { item: 'headphones', purchasePrice: 149 },
  { item: 'keyboard', purchasePrice: 79 }
];

const totalAmount = addPurchases(purchases);
console.log(totalAmount); // Output: 627 (399 + 149 + 79 = 627)
```

Here's how it works:
- The `reduce` method starts with an initial value of `0` for the `total`.
- For each object in the array, it adds the `purchasePrice` to the `total`.
- Finally, the accumulated `total` value is returned, representing the sum of all `purchasePrice` values in the array of objects.
</details>

## Day Six

Here are the JavaScript challenges converted into Markdown format:

```markdown
## CHALLENGE 1 - Review

Write a function that iterates over an array of people objects and creates a new list of each person's full name using the array method 'map'.

```javascript
const toLastNames = people => {
  return people.map(person => `${person.firstName} ${person.lastName}`);
};
```

---

## CHALLENGE 2

Write a function named `addValues` that, given an array of numbers as input, uses `reduce` to add the values in the array.

```javascript
const addValues = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
```

---

## CHALLENGE 3

Write a function named `addPurchases` that, given an array of objects as input, uses `reduce` to find the total amount purchased.

```javascript
const addPurchases = (arr) => {
  return arr.reduce((total, purchase) => total + purchase.purchasePrice, 0);
};
```

---

## CHALLENGE 4

Write a function named `countNumberOfElements` that, given an array as input, uses `reduce` to count the number of elements in the array.

```javascript
const countNumberOfElements = (arr) => {
  return arr.reduce((count) => count + 1, 0);
};
```

---

## CHALLENGE 5

Write a function named `returnNames` that, given the Star Wars data, uses `reduce` to return an array containing the names of the characters.

```javascript
let starWarsData = [ /* ... Star Wars data ... */ ];

const returnNames = (arr) => {
  return arr.reduce((names, character) => {
    names.push(character.name);
    return names;
  }, []);
};
```

---

## CHALLENGE 6

Write a function named `reversedString` that takes in a string and returns a string with the letters in reverse order using `reduce`.

```javascript
const reversedString = (str) => {
  return str.split('').reduce((reversed, character) => character + reversed, '');
};
```

---

## CHALLENGE 7 - Stretch Goal

To count the total number of children in the provided data set using `reduce`, you'll need to iterate through the `characters` array and calculate the cumulative count of children across all objects. Here's how you can implement the `countNumberOfChildren` function:

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

```javascript
const countNumberOfChildren = (arr) => {
  return arr.reduce((totalChildren, character) => {
    if (character.children) {
      return totalChildren + character.children.length;
    }
    return totalChildren;
  }, 0);
};
```

This function `countNumberOfChildren` takes the `characters` array as input and uses `reduce` to accumulate the total count of children across all characters.

Example usage:

```javascript
const totalChildrenCount = countNumberOfChildren(characters);
console.log(totalChildrenCount); // Output: 17 (sum of all children in the data set)
```

Here's how it works:
- The `reduce` method starts with an initial value of `0` for `totalChildren`.
- For each character in the array, it checks if the character has a `children` property.
- If the `children` property exists, it adds the length of the `children` array to the `totalChildren`.
- Finally, the accumulated `totalChildren` value is returned, representing the total number of children across all characters in the data set.

## CHALLENGE 8 - Stretch Goal

To calculate the average value of an array of numbers using `reduce`, you can use an accumulator object that keeps track of both the count of elements and their sum. Here's the implementation for the `calculateAverage` function:

```javascript
const calculateAverage = (arr) => {
  const initialValue = { count: 0, sum: 0 };

  const { count, sum } = arr.reduce(
    (accumulator, currentValue) => ({
      count: accumulator.count + 1,
      sum: accumulator.sum + currentValue,
    }),
    initialValue
  );

  return sum / count;
};
```

This function `calculateAverage` takes an array of numbers as input and calculates their average value using `reduce`.

Usage example:

```javascript
const numbers = [10, 20, 30, 40, 50];
const average = calculateAverage(numbers);
console.log(average); // Output: 30 (average of 10, 20, 30, 40, 50)
```

Here's the breakdown of how it works:
- The initial value for the accumulator is an object `{ count: 0, sum: 0 }`.
- The `reduce` function accumulates the count of elements and their sum by iterating through the array.
- Finally, it calculates the average by dividing the sum by the count of elements.

This function effectively computes the average value of the array by utilizing `reduce` and maintaining an accumulator object to keep track of the count and sum.


<details>
<summary>Remember</summary>

forEach iterates over each element in an array and executes the callback function

map will iterate through each element in the array and executes the callback function for each eleement and returns a value of any kind. That value is pushed into a new array

file will iterate through each element in the array and executes the callback function for each element. If the callback function returns true, the element itself is pushed into a new array
</details>

## Day Seven

Absolutely! Here's the Markdown version including the challenge instructions:

### Challenge 1 - Review

Write a function named `updateAnimal` that takes in an array of animals (strings) and some callback function. This function should first create a new array. Then iterate over the input array and modify each value based on the callback function provided. Push each updated animal string into the new array. Return the new array.

HINT: Look at the tests to see how the callback functions are used.

```javascript
function upper(str) {
  return str.toUpperCase();
}

function lower(str) {
  return str.toLowerCase();
}

const updateAnimal = (arr, callback) => {
  const updatedAnimals = [];
  arr.forEach(animal => updatedAnimals.push(callback(animal)));
  return updatedAnimals;
};
```

### Challenge 2

Write a function called `sortNames` that takes an array of names and sorts them alphabetically. Capital letters should come before lowercase letters.

For example: 'Cat' would come before 'apple'

```javascript
const sortNames = (arr) => {
  return arr.sort();
};
```

### Challenge 3

Write a function called `sortNumbers` that takes an array of numbers and sorts them from smallest to largest.

HINT: Beware... JS default is "Lexical" ordering.

```javascript
const sortNumbers = (arr) => {
  return arr.sort((a, b) => a - b);
};
```

### Challenge 4

Write a function named `sortBackwards` that takes in an array of numbers and returns the same array, with the numbers sorted, largest to smallest.

HINT: Do it with a custom sort callback, not with using `.reverse()`. ;)

```javascript
const sortBackwards = (arr) => {
  return arr.sort((a, b) => b - a);
};
```

### Challenge 5

Write a function named `alphabetize` that takes in an array of strings and returns the same array with the strings sorted alphabetically. In this alphabetization, capital letters come before lower case letters.

For example, `['Alphabet', 'Zebra', 'alphabet', 'carrot']` is correctly sorted.

```javascript
const alphabetize = (arr) => {
  return arr.sort((a, b) => a.localeCompare(b));
};
```

### Challenge 6

Write a function named `sortByPrice` that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:

```javascript
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
```

```javascript
const sortByPrice = (arr) => {
  return arr.sort((a, b) => a.price - b.price);
};
```

These functions perform various sorting tasks based on different criteria as specified in the challenges.

## Day Eight

<details><summary>Sort Array</summary>
You can sort an array from biggest to smallest by using the `sort()` method with a custom comparison function that sorts the elements in descending order. Here's an example:

```javascript
const sortBiggestToSmallest = (arr) => {
  return arr.sort((a, b) => b - a);
};

// Example usage:
const numbers = [10, 5, 8, 2, 14];
const sortedDescending = sortBiggestToSmallest(numbers);
console.log(sortedDescending); // Output: [14, 10, 8, 5, 2]
```

The `sort()` method takes a comparison function that subtracts `b` from `a`. If the result is negative (a < b), `b` is placed before `a`, effectively sorting the array in descending order.
</details>

<details><summary>Splice</summary>
Certainly! You can achieve this by using the `splice()` method. Here's an example of a function that removes three items from the array starting from the given index:

```javascript
const removeThreeItems = (index, arr) => {
  arr.splice(index, 3);
  return arr;
};

// Example usage:
const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const indexToRemove = 2;

const newArray = removeThreeItems(indexToRemove, myArray);
console.log(newArray); // This will log ['a', 'b', 'e', 'f', 'g']
```

In this example:
- `removeThreeItems` takes an index and an array as parameters.
- The `splice()` method is used on the array with the given index and a count of 3 to remove three items starting from the specified index.
- The modified array (with three items removed) is then returned.
</details>


<details><summary>Join</summary>
Sure, you can create a function that joins all elements of an array into a single string separated by spaces using the `join()` method. Here's an example:

```javascript
const joinWithSpace = (arr) => {
  return arr.join(' ');
};

// Example usage:
const myArray = ['This', 'is', 'an', 'example'];
const result = joinWithSpace(myArray);
console.log(result); // Output: 'This is an example'
```

In this example:
- The `joinWithSpace` function takes an array as a parameter.
- The `join()` method is called on the array with the argument `' '` to join the elements together with a space.
- The resulting string is returned.
</details>



<details><summary>Split</summary>
Here are a few examples of using the `.split()` function in JavaScript:

### Example 1: Splitting a String into Words
```javascript
const sentence = 'The quick brown fox';
const words = sentence.split(' '); // Splits the sentence at each space
console.log(words); // Output: ['The', 'quick', 'brown', 'fox']
```

### Example 2: Splitting a String by Comma
```javascript
const csvData = 'Alice,Bob,Charlie,David';
const names = csvData.split(','); // Splits the string at each comma
console.log(names); // Output: ['Alice', 'Bob', 'Charlie', 'David']
```

### Example 3: Splitting a String into Characters
```javascript
const word = 'Hello';
const chars = word.split(''); // Splits the string into individual characters
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']
```

In these examples, `.split()` is used to break a string into an array of substrings based on a defined separator (space, comma, or an empty string). The resulting array contains the substrings or characters obtained by splitting the original string.</details>



### CHALLENGE 1 - Review

Write a function called `sortStarWarsCharacters` that sorts the characters in the `starWarsPeople` array by height from tallest to shortest.

```javascript
let starWarsPeople = [
  {
    name: 'C-3PO',
    height: '167',
    eye_color: 'yellow'
  },
  {
    name: 'Luke Skywalker',
    height: '172',
    eye_color: 'blue'
  },
  {
    name: 'R2-D2',
    height: '96',
    eye_color: 'red'
  }
];

const sortStarWarsCharacters = (starWarsArr) => {
  return starWarsArr.sort((a, b) => Number(b.height) - Number(a.height));
};
```

*Explanation*: The solution uses `Array.sort` to sort the `starWarsPeople` array based on the characters' heights in descending order. It converts the `height` strings to numbers for proper comparison.

### CHALLENGE 2

Write a function named `removeThree` that takes an index and an array. The function should remove three items in the array starting with the value at the index.

*Solution*:
```javascript
const removeThree = (idx, arr) => {
  arr.splice(idx, 3);
  return arr;
};
```

*Explanation*: The `splice` method is used to remove three items from the array starting at the provided index `idx`.

### CHALLENGE 3

Write a function named `joinArray` that takes an array and joins all of the elements together in one string on a space.

*Solution*:
```javascript
const joinArray = (arr) => {
  return arr.join(' ');
};
```

*Explanation*: The solution uses the `join` method to concatenate all elements of the array into a single string separated by spaces.

Here's the continuation of the Markdown file with the solutions and explanations for Challenges 4 through 6:

### CHALLENGE 4

Write a function named `howMuchPencil` that takes in a string, as written on the side of a pencil. As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter. Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.

*Solution*:
```javascript
const howMuchPencil = (str) => {
  let result = [];
  for (let i = 0; i <= str.length; i++) {
    result.push(str.slice(i));
  }
  return result;
};
```

*Explanation*: The function uses a loop to create a sequence of strings obtained by removing one character at a time from the start using the `slice` method. It generates a progression of strings representing the text on the pencil as it gets shorter.

### CHALLENGE 5

Write a function named `wordsToCharList` that, given a string as input, returns a new array where every element is a character of the input string.

*Solution*:
```javascript
const wordsToCharList = (str) => {
  return str.split('');
};
```

*Explanation*: The function uses the `split` method to convert the input string into an array of individual characters, where each character becomes an element in the resulting array.

### CHALLENGE 6


You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful.

Do not use split for this function.


const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo',
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
};

*Solution*:

```javascript
const listFoods = (recipe) => {
  const { ingredients } = recipe;
  const result = ingredients.map((ingredient) => {
    const firstSpaceIndex = ingredient.indexOf(' ');
    const secondSpaceIndex = ingredient.indexOf(' ', firstSpaceIndex + 1);
    return ingredient.slice(secondSpaceIndex + 1);
  });

  return result;
};
```

*Explanation*: The function `listFoods` extracts the food names from the `ingredients` array of the `gruffaloCrumble` recipe. It uses the `slice` method to get the substring starting from the second space in each ingredient, effectively removing the amount and units.

## Day Nine

### Challenge 1

Write a function named getNames that, given an array of people objects, uses map to return an array of names reversed.

For example:
[
{
  name: 'lloyd',
  age: 32,
  shoeSize: 12
},
{
  name: 'jamie',
  age: 21,
  shoeSize: 8
}
]

Returns: ['dyoll', 'eimaj'];

<details>
<summary> Challenge 1</summary>
You can achieve this using the `map()` function along with the `reverse()` and `split()` methods to reverse each name in the array of objects:

Here's the implementation for the `getNames` function:

```javascript
const getNames = (arr) => {
  return arr.map(person => person.name.split('').reverse().join(''));
};
```

Explanation:
- The `map()` function iterates through each object in the array.
- For each object, `person.name` accesses the name property.
- `.split('')` splits the name into an array of characters.
- `.reverse()` reverses the order of the characters in the array.
- `.join('')` joins the characters back into a string, producing the reversed name.
- The resulting array contains the reversed names corresponding to each object's name property.

You can use this `getNames` function with an array of people objects to get an array of their names reversed. For instance:

```javascript
const people = [
  {
    name: 'lloyd',
    age: 32,
    shoeSize: 12
  },
  {
    name: 'jamie',
    age: 21,
    shoeSize: 8
  }
];

const reversedNames = getNames(people);
console.log(reversedNames); // Output: ['dyoll', 'eimaj']
```

This code takes the provided array of people objects, applies the `getNames` function, and generates an array with the names reversed.
</details>

### Challenge 2

<details>
<summary>Blah</summary>
Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.

------------------------------------------------------------------------------------------------ */

const appendTheEnd = (str) => {
  // Solution code here...

};

Certainly! To append " The end." to a string without modifying the original string, you can use string concatenation or template literals to create a new string that includes the original string along with the desired addition.

Here's the implementation for the `appendTheEnd` function:

```javascript
const appendTheEnd = (str) => {
  return str + ' The end.';
};
```

Alternatively, using template literals:

```javascript
const appendTheEnd = (str) => {
  return `${str} The end.`;
};
```

Both versions achieve the same result of creating a new string by appending " The end." to the input string without altering the original string.

You can use this function as follows:

```javascript
const originalString = 'This is the original string.';
const modifiedString = appendTheEnd(originalString);

console.log(originalString); // Output: 'This is the original string.'
console.log(modifiedString); // Output: 'This is the original string. The end.'
```

The `appendTheEnd` function takes a string as input, creates a modified version of that string with " The end." appended to it, and returns the modified string, leaving the original string unchanged.
</details>

### Challenge 3

<details>
<summary>Blah</summary>
blah blah blah
CHALLENGE 3

Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'.

Do not use a return statement.

For example:
const a = [1, 2, 3];
appendFirstToLast(a);
console.log(a) prints [1, 2, 3, 1]
------------------------------------------------------------------------------------------------ */

const appendFirstToLast = (arr) => {
  // Solution code here...
};

Certainly! To modify the array in place by appending its first element to the end, you can use array methods like `push()` to add the first element to the end of the array.

Here's the implementation for the `appendFirstToLast` function:

```javascript
const appendFirstToLast = (arr) => {
  arr.push(arr[0]);
};
```

This function takes an array as an argument and modifies it directly by using the `push()` method to add the first element of the array (`arr[0]`) to the end.

For example:

```javascript
const a = [1, 2, 3];
appendFirstToLast(a);
console.log(a); // Output: [1, 2, 3, 1]
```

When `appendFirstToLast(a)` is called with the array `[1, 2, 3]`, it modifies the array by adding the first element (1) to the end, resulting in `[1, 2, 3, 1]`. This change is reflected in the source array `a` as it modifies the array in place.
</details>

### Challenge 4

<details>
<summary>Blah</summary>
HALLENGE 4

Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn. The value of the yearBorn property should be the integer that was passed in.

The change should be reflected in the source object that was passed in to the function. That is, the function should modify the object 'in place'.

Do not use a return statement.

For example:
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }
------------------------------------------------------------------------------------------------ */

const addBirthYearProperty = (obj, year) => {
  // Solution code here...
};

Certainly! To modify the object in place by adding a new property called `yearBorn` with a specified integer value, you can directly assign a new property to the object using the provided `year` parameter.

Here's the implementation for the `addBirthYearProperty` function:

```javascript
const addBirthYearProperty = (obj, year) => {
  obj.yearBorn = year;
};
```

This function takes an object (`obj`) and an integer (`year`) as arguments and modifies the object by adding a new property called `yearBorn` with the value of the `year` parameter.

For example:

```javascript
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(octavia); // Output: { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }
```

When `addBirthYearProperty(octavia, 1947)` is called with the `octavia` object and the year `1947`, it modifies the object by adding the `yearBorn` property with the value `1947`. This change is reflected in the source object `octavia` as it modifies the object in place.
</details>

### Challenge 5



<details>
<summary>Blah</summary>
blah blah blah
</details>


CHALLENGE 5 - Stretch Goal

Write a function that accepts an array of people objects and adds a new property called isAuthor to each object in the list. Set the value of the new property to true.

The function should modify the object in place. Do not use a return statement.

For example:
const people = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor) prints true
------------------------------------------------------------------------------------------------ */

const setStatusAsAuthor = (people) => {
  // Solution code here...
};

Absolutely! To modify each object in the array by adding a new property called `isAuthor` with the value `true`, you can loop through the array using `forEach()` or a `for` loop and directly assign the `isAuthor` property to each object.

Here's an implementation using `forEach()`:

```javascript
const setStatusAsAuthor = (people) => {
  people.forEach(person => {
    person.isAuthor = true;
  });
};
```

This function, `setStatusAsAuthor`, takes an array of people objects and modifies each object by adding a new property `isAuthor` with the value `true`.

For example:

```javascript
const people = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor); // Output: true
```

When `setStatusAsAuthor(people)` is called with the `people` array, it modifies each object in the array by adding the `isAuthor` property with the value `true`. This change is reflected in the `people` array, and accessing `people[1].isAuthor` returns `true`.

## Day Ten



### CHALLENGE 1 - Review


Write a function named returnTen, takes in a string and uses split and splice to return the last 10 characters from that string as elements of an array.

```javascript
function returnTen(str){
  return str.split('').splice(-10);
}
```

Explanation:
- The `returnTen` function takes in a string `str`.
- `.split('')` splits the string into an array of characters.
- `.splice(-10)` extracts the last 10 characters from the array.

### CHALLENGE 2

Write a function named findMax that takes in a matrix of positive numbers and returns the number with the highest value.

For example:
[
  [1, 3, 4, 5],
  [4, 5, 6],
  [23, 5, 5]
]

return: 23

```javascript
const findMax = (matrix) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let arr of matrix) {
    for (let num of arr) {
      if (num > max) {
        max = num;
      }
    }
  }
  return max;
};
```

Explanation:
- The `findMax` function receives a matrix of positive numbers.
- `Number.NEGATIVE_INFINITY` initializes `max` as the smallest possible number.
- It iterates through each array within the matrix and each number within those arrays.
- It compares each number to `max`, updating `max` if the number is greater.

### CHALLENGE 3

Write a function named totalSum that takes in a matrix of numbers and returns the totalSum of all the numbers.

For example:
[
  [1, 3, 4, 5],
  [4, 5, 1],
  [2, 5, 5]
]

return: 35

```javascript
const totalSum = (matrix) => {
  return matrix.reduce((acc, curr) => acc + curr.reduce((sum, num) => sum + num, 0), 0);
};
```

Explanation:
- `reduce` is used to flatten and sum the matrix.
- The outer `reduce` goes through each array in the matrix.
- The inner `reduce` sums up the numbers within each array.
- The initial value for both `reduce` functions is set to `0`.

### CHALLENGE 4

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.

Write a function named grandTotal that adds up the cookies sales for each hour of operation for all of the stores combined. For example, the first element in the hourlySales array should be the sum of the cookies sold in the 9:00 a.m. hour at all five stores combined.

For this example, the total at 9:00 a.m. is 17 + 26 + 7 + 5 + 33, or 88 total cookies.

Return the array of the total number of cookies sold per hour for all of the stores combined.
------------------------------------------------------------------------------------------------ */

```javascript
const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (stores) => {
  return stores[0].map((_, index) => stores.reduce((acc, store) => acc + store[index], 0));
};
```

Explanation:


```javascript
const grandTotal = (stores) => {
  return stores[0].map((_, index) => stores.reduce((acc, store) => acc + store[index], 0));
};
```

This function uses the `map()` function on `stores[0]`, assuming that all stores have the same length of sales data (which seems to be the case according to your example). 

1. `stores[0].map((_, index) => ...)`:
   - It uses `map()` to iterate over the sales data for one store (in this case, `firstPike`).
   - The `_` is a placeholder for the elements in the `stores[0]` array (but it's not used inside the map function).
   - The `index` represents the index of each hour in the `stores[0]` array (`firstPike` array in this case).

2. `stores.reduce((acc, store) => acc + store[index], 0)`:
   - The `reduce()` function is used on the `stores` array.
   - For each hour (indexed by `index`), it iterates through each store (`firstPike`, `seaTac`, `seattleCenter`, `capHill`, `alkiBeach`).
   - It sums up the sales for that specific hour across all stores.
   - `acc` is the accumulator, starting from 0.
   - `store[index]` accesses the sales value at the specific `index` (hour) in each store.
   - It returns an array containing the total sales for each hour across all stores combined.

The resulting array will contain the total sales at each hour across all stores combined, calculated by summing the sales data for each hour from all the stores.

This function essentially transposes the data, summing up the sales at each hour across all stores.

In JavaScript, when you're using the `map()` function but you don't actually need to use the value of the elements in the array, you can use a placeholder to represent each element. The `_` (underscore) is often used as a convention for such a placeholder. 

In this specific scenario:
```javascript
stores[0].map((_, index) => ...)
```

The `map()` function expects a callback function that iterates over each element of the array. However, in this case, the callback function doesn't use the value of the elements themselves (`_`), but instead relies solely on the index to perform the necessary operations.

By using `_` as a placeholder, it serves as a way to indicate to other developers that the value of the element itself is not being used within the callback function. It's just a convention to communicate that the value is not relevant or needed for the particular operation being performed inside the callback function.


In the expression `stores.reduce((acc, store) => acc + store[index], 0)`, the `reduce()` function is being utilized.

Here's a breakdown of how this works:

- `reduce()` is a higher-order function that iterates over an array, performing some operation on each element and accumulating a final result.
- The first argument passed to `reduce()` is a callback function that handles the accumulation process. It takes two parameters:
  - `acc` (accumulator): This parameter stores the intermediate result or the accumulated value.
  - `store`: This represents each store array in the `stores` array.
- The second argument of `reduce()` is the initial value for the accumulator. In this case, it's set to `0`.

Inside the callback function:

- `acc + store[index]` is the logic used to accumulate the result. It adds the value of `store[index]` to the accumulator (`acc`).
- `store[index]` accesses the element at the given `index` from each `store` array. The `index` is determined by the iteration performed by `map()` on the `stores[0]` array.

In summary, the `reduce()` function takes each element from the `stores` array, accesses the element at the specific `index`, and accumulates the sum of these values for each index across all stores.

### CHALLENGE 5

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time.

Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.

Write a function named salesData that uses forEach to iterate over the hourlySales array and create an object for each hour. Return an array of the formatted data.
------------------------------------------------------------------------------------------------ */



```javascript
const salesData = (hours, data) => {
  const result = [];
  hours.forEach((hour, i) => {
    result.push({ sales: `${data[i]} cookies`, time: hour });
  });
  return result;
};
```



Challenge 5 involves writing a function called `salesData` that takes two arrays as parameters: `hours` and `data`. The `hours` array represents the hours of the day, and the `data` array represents the number of cookies sold per hour. 

The goal of the `salesData` function is to create an array of objects, where each object contains two properties: `sales` (representing the number of cookies sold during an hour) and `time` (representing the hour of the sale).

Here's a breakdown of the steps to solve this challenge:

1. **Looping through the `data` array using `forEach()`:** 
   Iterate over the `data` array to access each value representing the number of cookies sold per hour.

2. **Creating objects for each hour:**
   Inside the loop, create an object for each hour using the data from the `data` and `hours` arrays.

3. **Formatting the object with `sales` and `time` properties:**
   Each object should contain two properties:
   - `sales`: Set this property to the value representing the number of cookies sold during a specific hour.
   - `time`: Set this property to the corresponding hour from the `hours` array.

4. **Storing the created objects in an array:**
   Push each created object into a new array that will be returned at the end.

Here's an example implementation:

```javascript
const salesData = (hours, data) => {
  const result = [];

  data.forEach((cookiesSold, index) => {
    const hour = hours[index];
    const salesObj = {
      sales: cookiesSold,
      time: hour,
    };
    result.push(salesObj);
  });

  return result;
};
```

For instance, if you have arrays:
```javascript
const hours = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
const data = [88, 72, 63, 56, 90, 82, 74, 68, 91, 75, 66, 80];
```

Calling `salesData(hours, data)` will return an array of objects like this:
```javascript
[
  { sales: 88, time: '9 a.m.' },
  { sales: 72, time: '10 a.m.' },
  { sales: 63, time: '11 a.m.' },
  // ... and so on
]
```

Each object in the resulting array represents an hour and the number of cookies sold during that hour.

### CHALLENGE 6

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today from this array. The structure of the array will not change.
------------------------------------------------------------------------------------------------ */

const errands = [
  {
    store: 'Grocery store',
    items: [{ name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
  },
  {
    store: 'Drug store',
    items: [{ name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash', quantity: 1 }]
  },
  {
    store: 'Pet store',
    items: [{ name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 }]
  }
];

```javascript
const howManyTreats = (arr) => {
  return arr.find(store => store.store === 'Pet store').items.find(item => item.name === 'Treats').quantity;
};
```

Explanation:
- `find` is employed to get the store object for the 'Pet store'.
- Another `find` method extracts the item object for 'Treats'.
- It retrieves the `quantity` property from the 'Treats' item.

These methods were chosen because they are well-suited for their respective tasks, such as iterating through arrays, finding specific elements, or performing calculations on matrix data.



### CHALLENGE 7 - battleship
/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.

Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.

Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]

The top row of the board is considered row zero and row numbers increase as they go down.
------------------------------------------------------------------------------------------------ */

This function determines whether a given position on a battleship board is a "hit" or "miss." It takes a 2D array representing the battleship board and two coordinates: a row and a column. The function checks if the specified position on the board contains a '#' representing part of a boat or ' ' representing open water.

*Solution*:

```javascript
const battleship = (board, row, col) => {
  return board[row][col] === '#' ? 'hit' : 'miss';
};
```

The `battleship` function accesses the element at the given `row` and `col` indices in the `board` array. If the element is '#', it returns 'hit'; otherwise, it returns 'miss'.

### CHALLENGE 8 - calculateProduct

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.

For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */

This function calculates the product of all numbers in each sub-array of a 2D array and returns the final product. It multiplies all the numbers in each inner array together.

*Solution*:

```javascript
const calculateProduct = (numbers) => {
  return numbers.map(arr => arr.reduce((acc, num) => acc * num, 1)).reduce((acc, prod) => acc * prod, 1);
};
```

The `calculateProduct` function uses `map()` to iterate through each sub-array in the `numbers` array. It uses `reduce()` to multiply all the numbers within each sub-array and returns an array of the products. Finally, it uses another `reduce()` to multiply all the products together to get the final product.

### CHALLENGE 9 - averageDailyTemperature

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.

Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */

// Real daily average temperatures for Seattle, October 1-28 2017
const weeklyTemperatures = [
  [66, 64, 58, 65, 71, 57, 60],
  [57, 65, 65, 70, 72, 65, 51],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

This function calculates the average daily temperature from a 2D array representing average daily temperatures grouped week-by-week.

*Solution*:

```javascript
const averageDailyTemperature = (weather) => {
  const allTemps = weather.reduce((acc, week) => acc.concat(week), []);
  const sum = allTemps.reduce((acc, temp) => acc + temp, 0);
  return sum / allTemps.length;
};
```

The `averageDailyTemperature` function first flattens the 2D `weather` array into a single array (`allTemps`) using `reduce()` and `concat()`. Then, it calculates the sum of all temperatures and divides it by the total number of temperatures to get the average.

### CHALLENGE 10 - lowestWeeklyAverage

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.

Calculate the average temperature for each week and return the value of the lowest weekly average temperature.

For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

let lowestWeeklyTemperatureData = [
  [33, 64, 58, 65, 71, 57, 60],
  [40, 45, 33, 53, 44, 59, 48],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

This function calculates the average temperature for each week and returns the value of the lowest weekly average temperature.

*Solution*:

```javascript
const lowestWeeklyAverage = (weather) => {
  const weeklyAverages = weather.map(week => week.reduce((acc, temp) => acc + temp, 0) / week.length);
  return Math.min(...weeklyAverages);
};
```

The `lowestWeeklyAverage` function uses `map()` to calculate the average temperature for each week by summing up the temperatures and dividing by the number of temperatures in each week. Then, it uses `Math.min()` to find the lowest average temperature among all the weeks.

### CHALLENGE 11 - excel

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are seperated by newline "\n" characters. Columns are seperated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */

This function computes the sum of values for each row in a table represented by a string.

*Solution*:

```javascript
const excel = (str) => {
  const rows = str.split('\n');
  return rows.map(row => row.split(',').reduce((acc, val) => acc + parseInt(val), 0));
};
```

The `excel` function first splits the input string into rows using `split('\n')`. Then, it uses `map()` to split each row by commas (`,`) and computes the sum of the values in each row using `reduce()`. Finally, it returns an array containing the sum of values for each row.
```

# Day Twelve

## Challenge 1

CHALLENGE 1 - Review

Write a function named transformToLis that, given an object, returns an array of the key value pairs as html list items.

For example:
{
  name: 'bob',
  age: 32
}

Becomes:
[
<li>name: bob</li>,
<li>age: 32</li>
]

```Javascript

function transformToLis(obj) {
  return Object.entries(obj).map(([key, value]) => `<li>${key}: ${value}</li>`);
}

```

## Challenge 2

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
```Javascript
const count = (target, input) => {
  return input.flat().reduce((count, arr) => {
    count += arr === target ? 1 : 0;
    return count;
  }, 0);
};
```

## Challenge 3

CHALLENGE 3

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */
```javascript

const totalSum = (input) => {
  return input.flat().reduce((sum, num) => sum + num, 0);
};
```

## Challenge 4

CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */
```javascript

const divisibleByFiveTwoToThePower = (input) => {
  return input.map(arr =>
    arr.filter(num => typeof num === 'number' && num % 5 === 0)
       .map(num => Math.pow(2, num))
  );
};
```
## Challenge 5

CHALLENGE 5

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];
```javascript
let findMaleAndFemale = (data) => {
  const names = data
    .filter(char => char.gender === 'male' || char.gender === 'female')
    .map(char => char.name);

  return names.join(' and ');
};
```

## Challenge 6

CHALLENGE 6

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the character who is the shortest in height.


``` javascript
let findShortest = (data) => {
  const shortestCharacter = data.reduce((shortest, char) => {
    return parseInt(char.height) < parseInt(shortest.height) ? char : shortest;
  });

  return shortestCharacter.name;
};
```