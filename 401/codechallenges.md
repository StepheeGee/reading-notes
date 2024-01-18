

# Code Challenges

## Day 1 - Array Reverse

### Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

```python
def reverseArray(arr):
    reversed_arr = []
    for i in range(len(arr) - 1, -1, -1):
        reversed_arr.append(arr[i])
    return reversed_arr

#Example:
original_array = [1, 2, 3, 4, 5]
reversed_array = reverseArray(original_array)
print(reversed_array)  # Output: [5, 4, 3, 2, 1]
```

## Day 2 - Array Insertion

### Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

```python
def insertShiftArray(arr, value):
    new_array = []
    mid = len(arr) // 2

    for i in range(len(arr) + 1):
        if i == mid:
            new_array.append(value)
        elif i < mid:
            new_array.append(arr[i])
        else:
            new_array.append(arr[i - 1])

    return new_array
```

## Day 3 - Remove Odd Values

### Write a function called removeOddValues which takes in an array. Without utilizing any of the built-in methods available to your language, return an array with all the odd numbers removed.

```python
def removeOddValues(arr):
    new_array = []
    for i in range(len(arr)):
        if arr[i] % 2 == 0:
            new_array.append(arr[i])
    return new_array
```

## Day 4 - Array Binary Search  

### Implement a function called `BinarySearch` that takes in a sorted array and a search key. The function returns the index of the array’s element that is equal to the value of the search key. If the element is not in the array, it returns -1.

```python
def BinarySearch(sorted_array, search_key):
   """
   Performs a binary search on a sorted array to find the index of the search key.

   Args:
       sorted_array: A sorted list of elements.
       search_key: The value to search for in the array.

   Returns:
       The index of the first occurrence of the search key in the array, or -1 if not found.
   """

   low = 0
   high = len(sorted_array) - 1

   while low <= high:
       mid = (low + high) // 2

       if sorted_array[mid] == search_key:
           return mid

       elif sorted_array[mid] < search_key:
           low = mid + 1

       else:
           high = mid - 1

   return -1

# Example 1:

sorted_array = [4, 8, 15, 16, 23, 42]
search_key = 15
result = BinarySearch(sorted_array, search_key)
print("Index of 15 in the array:", result)  # Output: Index of 15 in the array: 2
```

## Day 5 - Linked List

### Create a Node class and LinkedList class that will have a singly linked list properties like adding element to the beginning of the linked list, check for the existence of the elemnt in the list and print all list elements as a string

```python
class Node:
    """
    A class representing a node in a linked list.

    Attributes:
    - value: The value stored in the node.
    - next: A reference to the next node in the linked list.
    """

    def __init__(self, value):
        """
        Initializes a new node with the given value.

        Parameters:
        - value: The value to be stored in the node.
        """
        self.value = value
        self.next = None


class LinkedList:
    """
    A class representing a singly linked list.

    Attributes:
    - head: The head (first node) of the linked list.
    """

    def __init__(self):
        """
        Initializes an empty linked list.
        """
        self.head = None

    def insert(self, value):
        """
        Inserts a new node with the given value at the head of the linked list.

        Parameters:
        - value: The value to be inserted into the linked list.
        """
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def includes(self, value):
        """
        Checks if a node with the given value exists in the linked list.

        Parameters:
        - value: The value to be searched for in the linked list.

        Returns:
        - True if the value exists, False otherwise.
        """
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

    def __str__(self):
        """
        Returns a string representation of the linked list.

        Returns:
        - A string representing all the values in the linked list, formatted as:
          "{ a } -> { b } -> { c } -> NULL"
        """
        result = ""
        current = self.head
        while current:
            # Add the value of the current node to the result string
            current = current.next
        result += "NULL"
        return result

# Example usage:

linked_list = LinkedList()
linked_list.insert(3)
linked_list.insert(2)
linked_list.insert(1)

print(linked_list.includes(2))  # True
print(linked_list.includes(4))  # False

print(linked_list)  # "{ 1 } -> { 2 } -> { 3 } -> NULL"




class TargetError:
    pass
```

## Day 6 - LinkedList Insertion 

### Extend a Linked List to allow various insertion methods.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def append(self, new_value):
        new_node = Node(new_value)
        if not self.head:
            self.head = new_node
            return

        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def insert_before(self, target_value, new_value):
        # Create a new node with the specified value
        new_node = Node(new_value)

        # Check if the linked list is empty
        if not self.head:
            raise TargetError("Cannot insert before in an empty list")

        # Check if the target value is at the beginning of the list
        if self.head.value == target_value:
            new_node.next = self.head
            self.head = new_node
            return

        # Traverse the linked list to find the node with the target value
        current = self.head
        while current.next and current.next.value != target_value:
            current = current.next

        # If the target value is not found in the list
        if not current.next:
            raise TargetError(f"Target value '{target_value}' not found in the list")

        # Insert the new node before the node with the target value
        new_node.next = current.next
        current.next = new_node


    def insert_after(self, target_value, new_value):
            new_node = Node(new_value)
            if not self.head:
                raise TargetError("Cannot insert after in an empty list")

            current = self.head
            while current and current.value != target_value:
                current = current.next

            if not current:
                raise TargetError(f"Target value '{target_value}' not found in the list")

            new_node.next = current.next
            current.next = new_node

    def __str__(self):
            result = ""
            current = self.head
            while current:
                #add result in here Steph 
                current = current.next
            result += "NULL"
            return result

class TargetError(Exception):
        pass

```

## Can't Remember the Day - Fibonacci Sequence

```python
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
```
