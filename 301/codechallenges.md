
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



<details>
<summary>Array.reduce</summary>

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