
### Array Methods:


1. **Spread Operator (`...`)**: Allows an iterable (like an array) to be expanded in places where multiple arguments or elements are expected.

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5]; // Creates: [1, 2, 3, 4, 5]
   ```

2. **`filter()`**: Creates a new array with elements that pass the test provided by a function.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const filtered = numbers.filter((num) => num % 2 === 0); // Returns: [2, 4]
   ```

3. **`Math` Object**:
   - `Math.PI`: Represents the ratio of the circumference of a circle to its diameter.
   - `Math.floor()`: Returns the largest integer less than or equal to a given number.
   - `Math.ceil()`: Returns the smallest integer greater than or equal to a given number.
   - `Math.random()`: Returns a pseudo-random number between 0 and 1.

   ```javascript
   const pi = Math.PI; // Value of PI
   const num = 3.7;
   const floorNum = Math.floor(num); // Returns: 3
   const ceilNum = Math.ceil(num); // Returns: 4
   const randomNum = Math.random(); // Returns: Random number between 0 and 1
   ```

4. **`Math.pow()`**: Returns the base to the exponent power, that is, base^exponent.

   ```javascript
   const base = 2;
   const exponent = 3;
   const result = Math.pow(base, exponent); // Returns: 8 (2^3 = 8)
   ```

5. **`push()`**: Adds one or more elements to the end of an array. Modifies the original array and returns the new length of the array.

   ```javascript
   const arr = [1, 2, 3];
   arr.push(4); // Returns: 4 (length of the modified array)
   ```


#### `concat()`
- **Purpose**: Merges two or more arrays and returns a new array.
- **Usage**:
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = arr1.concat(arr2); // Returns: [1, 2, 3, 4]
  ```

#### `splice()`
- **Purpose**: Modifies the contents of an array by adding or removing elements.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3, 4, 5];
  const removed = arr.splice(1, 2, 'a', 'b', 'c'); // Returns: [2, 3], arr becomes [1, 'a', 'b', 'c', 4, 5]
  ```

#### `slice()`
- **Purpose**: Returns a shallow copy of a portion of an array into a new array.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.slice(1, 4); // Returns: [2, 3, 4], arr remains [1, 2, 3, 4, 5]
  ```

#### `reverse()`
- **Purpose**: Reverses the elements of an array in place.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3];
  arr.reverse(); // arr becomes [3, 2, 1]
  ```

#### `push()`
- **Purpose**: Adds one or more elements to the end of an array.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3];
  arr.push(4); // Returns: 4 (new length of the array)
  ```

#### `length`
- **Purpose**: Property that returns the number of elements in an array.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3];
  const length = arr.length; // Returns: 3
  ```

#### `pop()`
- **Purpose**: Removes the last element from an array and returns it.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3];
  const removed = arr.pop(); // Returns: 3, arr becomes [1, 2]
  ```

#### `shift()`
- **Purpose**: Removes the first element from an array and returns it.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3];
  const shifted = arr.shift(); // Returns: 1, arr becomes [2, 3]
  ```

#### `join()`
- **Purpose**: Joins all elements of an array into a string.
- **Usage**:
  ```javascript
  const arr = ['Hello', 'world'];
  const joined = arr.join(' '); // Returns: 'Hello world'
  ```

#### `every()`
- **Purpose**: Tests whether all elements in the array pass a provided function.
- **Usage**:
  ```javascript
  const numbers = [2, 4, 6];
  const isEven = numbers.every((num) => num % 2 === 0); // Returns: true
  ```

#### `some()`
- **Purpose**: Tests whether at least one element in the array passes a provided function.
- **Usage**:
  ```javascript
  const numbers = [2, 3, 5];
  const hasEven = numbers.some((num) => num % 2 === 0); // Returns: true
  ```

#### `includes()`
- **Purpose**: Determines whether an array includes a certain value among its elements.
- **Usage**:
  ```javascript
  const arr = [1, 2, 3];
  const isIncluded = arr.includes(2); // Returns: true
  ```

#### `find()`

- **Purpose**: Returns the first element in the array that satisfies a provided function. The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
- **Usage**:
  ```javascript
  const numbers = [10, 20, 30];
  const found = numbers.find((num) => num > 15); // Returns: 20
  ```

- **Usage**:
  ```javascript

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }


Ex 3

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

```

#### `findIndex()`
- **Purpose**: Returns the index of the first element in the array that satisfies a provided function.
- **Usage**:
  ```javascript
  const numbers = [10, 20, 30];
  const foundIndex = numbers.findIndex((num) => num > 15); // Returns: 1
  ```

#### `reduce()`
- **Purpose**: Reduces the array to a single value via a provided function.
- **Usage**: iterates through each element in the array and executes the callback function for each element. The callback function is passed through the previous state and returns the next state and at the end the final state is returned.

The `reduce()` method in JavaScript is used to transform an array into a single value. It executes a provided function for each element of the array and accumulates the result into a single value. Here's how it works:

### Syntax:

```javascript
array.reduce(callback, initialValue)
```

- `callback`: A function that is called for each element in the array, taking four arguments:
  - `accumulator`: The accumulator accumulates the callback's return values. It carries the accumulated result from the previous iterations. If an initialValue is provided, it will be used as the initial value for the accumulator. If not, the first element of the array will be used.
  - `currentValue`: The current element being processed in the array.
  - `currentIndex` (optional): The index of the current element being processed.
  - `array` (optional): The array `reduce()` was called upon.

- `initialValue` (optional): An initial value to be used as the first argument to the first call of the callback function. If not provided, the first element of the array will be used as the initial accumulator value, and iteration starts from the second element.

### Example:

Let's say we want to sum up all the numbers in an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

Explanation:
- `accumulator` starts with an initial value of `0` (provided as the second argument to `reduce()`).
- The callback function takes `accumulator` and `currentValue` (each element of the array) and returns their sum.
- The `reduce()` method iterates through the array, continuously adding each element to the accumulator.
- Finally, it returns the accumulated sum.

You can use `reduce()` for various operations like summing values, filtering, mapping, finding maximum or minimum values, and much more, by appropriately defining the callback function and manipulating the accumulator and current values.

Whatever you return becomes the next state.

  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Returns: 10
  ```
const array1 = [1, 2, 3, 4];

  ```javascript
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial); // Expected output: 10 ```


### String Methods:

#### `charAt()`
- **Purpose**: Returns the character at a specified index in a string.
- **Usage**:
  ```javascript
  const str = 'Hello';
  const char = str.charAt(1); // Returns: 'e'
  ```

#### `lastIndexOf()`
- **Purpose**: Returns the last occurrence of a specified value in a string.
- **Usage**:
  ```javascript
  const str = 'Hello world';
  const lastIndex = str.lastIndexOf('o'); // Returns: 7
  ```

#### `parse()`
- **Purpose**: Parses a JSON string and returns a JavaScript object.
- **Usage**:
  ```javascript
  const jsonString = '{"name": "John", "age": 30}';
  const parsedObject = JSON.parse(jsonString); // Returns: { name: 'John', age: 30 }
  ```



## `forEach()` vs. `map()` vs. `for` Loop

#### `forEach()`
- **Purpose**: Executes a provided function once for each array element.
- **Return Value**: Does not return a new array.
- **Effect**: Modifies the original array.
- **Usage**:
  ```javascript
  const numbers = [1, 2, 3];
  numbers.forEach((num) => {
    console.log(num); // Iterates over each number
  });
  ```

#### `map()`
- **Purpose**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- **Return Value**: Returns a new array with transformed elements.
- **Effect**: Does not modify the original array.
- **Usage**:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2); // Returns: [2, 4, 6]
  ```

#### `for` Loop
- **Purpose**: Traditional looping construct in JavaScript.
- **Return Value**: Not specific to arrays; used to iterate through arrays or perform other looping operations.
- **Effect**: Depends on the loop's purpose.
- **Usage**:
  ```javascript
  const numbers = [1, 2, 3];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Iterates over each number
  }
  ```

#### Comparison
- `forEach()` and `map()` both iterate through each element of an array.
- `forEach()` does not return a new array; it's used for performing actions on array elements without generating a new array.
- `map()` creates a new array by transforming each element using the provided function.
- `for` loop provides flexibility and control but requires more boilerplate code compared to the array methods.

#### Similarities
- All three methods/constructs are used to perform operations on each element of an array.
- They execute a callback function on each array element.
- They help in iterating through arrays.

#### Differences
- `forEach()` and `map()` are higher-order array methods specifically designed for array manipulation.
- `for` loop is a more general-purpose looping construct in JavaScript, applicable to arrays and other iterable entities.



### Spread Operator in Detail:
#### Using spread to concatenate arrays:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concatenatedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

#### Making a copy of an array:
```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // [1, 2, 3]
```

#### Adding elements to an array:
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```

### Objects:
#### Cloning an object:
```javascript
const obj = { a: 1, b: 2 };
const clonedObj = { ...obj }; // { a: 1, b: 2 }
```

#### Merging objects:
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
```

