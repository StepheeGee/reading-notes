
```python

def fibonacci(n, primary=0, secondary=1):
    if n == 0:
        return primary

    if n == 1:
        return secondary
  
    return fibonacci(n - 1, primary, secondary) + fibonacci(n - 2, primary, secondary)

def lucas(n, primary=2, secondary=1):
    if n == 0:
        return primary
  
    if n == 1:
        return secondary

    return lucas(n - 1, primary, secondary) + lucas(n - 2, primary, secondary)

def sum_series(n, primary=0, secondary=1):
    if primary == 0 and secondary == 1:
        return fibonacci(n, primary, secondary)

    if primary == 2 and secondary == 1:
        return lucas(n, primary, secondary)

# Example usage
print("Fibonacci:", sum_series(3))  # Adjust primary/secondary as needed

```

### List: A list is a data structure used to store a collection of items. It's ordered, mutable (modifiable), and can contain elements of different data types. Lists are created using square brackets [] and elements are separated by commas.

Example: my_list = [1, 2, 'hello', True]


### Tuple: A tuple is an ordered and immutable collection of elements. It's similar to a list but is defined using parentheses `()` instead of square brackets `[]`. Once created, the elements within a tuple cannot be changed, added, or removed. Tuples are often used to store related pieces of information.

  Example: `my_tuple = (1, 2, 'hello', True)`

### Dictionary A dictionary is an unordered collection of data that is composed of key-value pairs. It's mutable, meaning it can be modified after creation. Dictionaries are used to store and retrieve data in a way that allows fast lookup using unique keys. Keys within a dictionary must be unique and immutable, while the associated values can be of any data type.

  Example:
  ```python
  my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}
  print(my_dict['name'])  # Accessing the value using the key 'name'
  ```

Tuples are typically used when you want to store a fixed collection of elements that shouldn't be changed, while dictionaries are great for storing and retrieving data using unique identifiers (keys).



### Key - Keys cannot change while in dictionary.
In the context of dictionaries, a key is a unique identifier used to access a value within the dictionary. Dictionaries are composed of key-value pairs where each key is associated with a specific value. Keys are immutable and typically are strings or numbers, but they can be any immutable type. When you want to access a specific value in a dictionary, you use its corresponding key.

Example:

```python
my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}
print(my_dict['name'])  # Accessing the value using the key 'name'
```

### What goes in a dictionary

In Python, dictionaries primarily take keys that are immutable types, such as strings, integers, tuples, or other immutable objects. While dictionaries can technically accept tuples as keys, it's essential to understand how they work:

- **Immutable Keys:** Keys in dictionaries must be hashable, meaning they need to be of a type that doesn't change its value during its lifetime. Immutable types like strings, integers, floats, and tuples of immutable objects meet this criterion.

- **Tuples as Keys:** Tuples can be used as keys in dictionaries if they contain only immutable elements themselves. For instance, a tuple containing integers, strings, or other tuples with only immutable elements can be a valid key.

Here's an example:

```python
my_dict = {
    ('apple', 'banana'): 'fruits',
    42: 'answer',
    (1, 2): 'tuple key'
}
```

In this example, `('apple', 'banana')`, `42`, and `(1, 2)` are keys in the dictionary `my_dict`. The tuple `('apple', 'banana')` and the tuple `(1, 2)` are used as keys because they consist of immutable elements.

Remember that mutable types like lists cannot be used as dictionary keys because they can change after being used as keys, leading to unpredictable behavior in hash-based structures like dictionaries.

### Cache

In Python, a cache is a mechanism used to store the results of expensive function calls or computations so that, if the same computation is needed again, it can be retrieved quickly from the cache without having to recompute it.

A dictionary can be used as a simple form of cache in Python. You can create a dictionary where the keys represent the input arguments to a function, and the values represent the results of the function for those arguments.

Here's an example of using a dictionary as a cache:

```python
# Define a function to calculate Fibonacci numbers
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Create an empty dictionary to act as a cache
fibonacci_cache = {}

# Define a function that checks the cache before computing Fibonacci numbers
def cached_fibonacci(n):
    if n not in fibonacci_cache:
        fibonacci_cache[n] = fibonacci(n)  # Calculate and cache the result
    return fibonacci_cache[n]

# Test the cached version of the function
print(cached_fibonacci(5))  # Computes and caches fibonacci(0) to fibonacci(5)
print(cached_fibonacci(5))  # Retrieves fibonacci(5) from the cache without recomputing
```

In this example, `fibonacci_cache` is a dictionary where the keys are the input arguments (`n`) for the Fibonacci function, and the values are the calculated Fibonacci numbers. The `cached_fibonacci` function checks this cache before computing Fibonacci numbers. If the result is already in the cache, it retrieves it directly, avoiding redundant calculations.



### Challenge - binary search in a sorted 1D array

binarysearch which takes 2 parameters a sorted array and the search key without utilizing any of the built in methods for python

example input [4,8,15,16,23,42],15
output 2

 Here's an implementation of the binary search algorithm in Python without using built-in methods:

```python
def binarySearch(arr, key):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == key:
            return mid
        elif arr[mid] < key:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Key not found

# Test case
sorted_array = [4, 8, 15, 16, 23, 42]
search_key = 15
result = binarySearch(sorted_array, search_key)
print(result)  # Output: 2
```

This function `binarySearch` takes a sorted array and a search key as parameters and performs a binary search to find the index of the key in the array. The function returns the index of the key if found, otherwise -1 indicating the key is not present in the array.

### Explanation of the function


```python
def binarySearch(arr, key):
    left, right = 0, len(arr) - 1
```

1. `def binarySearch(arr, key):`: This line defines a function named `binarySearch` that takes two parameters - `arr` (the sorted array) and `key` (the search key).

2. `left, right = 0, len(arr) - 1`: Initializes two variables, `left` and `right`. `left` represents the leftmost index of the array, which is initially 0. `right` represents the rightmost index of the array, which is initialized as the last index of the array (`len(arr) - 1`).

```python
    while left <= right:
        mid = (left + right) // 2
```

3. `while left <= right:`: Initiates a while loop that runs as long as the `left` index is less than or equal to the `right` index.

4. `mid = (left + right) // 2`: Calculates the middle index of the current search space by finding the average of `left` and `right`.

```python
        if arr[mid] == key:
            return mid
```

5. `if arr[mid] == key:`: Checks if the value at the middle index (`arr[mid]`) is equal to the `key`. If they match, it means the key has been found, so the function returns the index `mid`.

```python
        elif arr[mid] < key:
            left = mid + 1
        else:
            right = mid - 1
```

6. `elif arr[mid] < key:`: If the value at the middle index is less than the `key`, it adjusts the search range by updating the `left`

### Steps to read a file, modify its content, and then write the modified content back to the file:

1. **Open the file:** Use the `open()` function in Python to open the file in read mode (`'r'`). This function returns a file object.

   ```python
   with open('file.txt', 'r') as file:
       # Read the content
       content = file.read()
   ```

2. **Modify the content:** Manipulate the `content` variable as needed. This could involve processing the text, making changes, or applying any necessary modifications.

   For example, you can split the content into lines, process each line, and then join them back together:

   ```python
   lines = content.split('\n')
   # Process each line or perform modifications
   modified_lines = [line.upper() for line in lines]
   modified_content = '\n'.join(modified_lines)
   ```

3. **Write the modified content back to the file:** Open the file again, this time in write mode (`'w'`), which will clear the existing content and write the new content.

   ```python
   with open('file.txt', 'w') as file:
       file.write(modified_content)
   ```

Remember to handle exceptions that may occur during file operations (e.g., `FileNotFoundError`, `PermissionError`) by using try-except blocks or other error handling mechanisms to ensure your code behaves predictably.


Add requirements text:

pip freeze > requirements.txt