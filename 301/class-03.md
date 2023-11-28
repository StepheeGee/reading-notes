# Functions as Props

## Class 3: 11.29.23

(Prepared 11.28.23)

**Summary/Statement:** This assignment covers React's handling of lists and keys, focusing on `.map()` usage, keys' significance, and the spread operator's functionality. Additionally, the video tutorial highlights passing functions between React components.

### Reading: React Docs - lists and keys

[Source](https://reactjs.org/docs/lists-and-keys.html)

1. **What does `.map()` return?**  
   - The `.map()` function in JavaScript returns a new array created by applying a provided function to each element of the original array.

2. **If I want to loop through an array and display each value in JSX, how do I do that in React?**  
   - In React, you can use the `.map()` method on the array, generating JSX elements within the map function to render each value.

3. **Each list item needs a unique ____.**  
  **key**

4. **What is the purpose of a key?**  
   - Keys in React help identify which items have changed, are added, or are removed. They aid React in efficiently updating the UI by providing a stable identity to elements in a list.

### The Spread Operator

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

5. **What is the spread operator?**  
   - The spread (`...`) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

   Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

6. **List 4 things that the spread operator can do.**  
   - It can clone arrays, concatenate or combine arrays, merge objects, and pass elements of an iterable as individual arguments in function calls.

7. **Give an example of using the spread operator to combine two arrays.**  
   - Example: `const combinedArray = [...array1, ...array2];`

8. **Give an example of using the spread operator to add a new item to an array.**  
   - Example: `const newArray = [...oldArray, newItem];`

9. **Give an example of using the spread operator to combine two objects into one.**  
   - Example: `const combinedObject = { ...object1, ...object2 };`

### Video: How to Pass Functions Between Components

[Video Link](https://www.youtube.com/watch?v=c05OL7XbwXU)

10. **In the video, what is the first step that the developer does to pass functions between components?**  
    - The developer creates a function in the parent component that needs to be passed to the child component.

11. **In your own words, what does the increment function do?**  
    - The increment function increases a numerical value by a certain amount, commonly by 1, and updates the state or value it's associated with.

12. **How can you pass a method from a parent component into a child component?**  
    - You can pass a method from a parent component into a child component by including it as a prop when rendering the child component.

13. **How does the child component invoke a method that was passed to it from a parent component?**  
    - The child component can invoke the passed method through the prop name associated with the method, typically by calling it within its own function or component logic.

### Resources

[React Docs - lists and keys](https://reactjs.org/docs/lists-and-keys.html)

[The Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)


### Bookmark and Review

[React Tutorial through ‘Declaring a Winner’](https://reactjs.org/tutorial/tutorial.html)

[React Docs - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)



### Things I want to know more about

I'm not sure yet.

