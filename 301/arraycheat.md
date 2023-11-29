
### Array Methods:

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
- **Purpose**: Returns the first element in the array that satisfies a provided function.
- **Usage**:
  ```javascript
  const numbers = [10, 20, 30];
  const found = numbers.find((num) => num > 15); // Returns: 20
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
- **Usage**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Returns: 10
  ```

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

