# React and Forms

## Class 4: Date

**Summary/Statement:** This assignment covers the utilization of forms in React, emphasizing controlled components, event handling, and conditional (ternary) operators. The provided readings and resources offer insights into managing form data and conditional rendering in React applications.

### Reading: React Docs - Forms

[React Docs - Forms](Link)

1. **What is a ‘Controlled Component’?**  
   - A 'Controlled Component' in React is an input form element whose value is controlled by React state. Its value is set by the state, and its onChange event handler manages the user input, updating the state with each change.

2. **Should we wait to store the user's responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.**  
   - It's advisable to update the state with the user's responses as soon as they enter them. Doing so enables real-time interaction and validation of the input, providing a more responsive user experience.

3. **How do we target what the user is entering if we have an event handler on an input field?**  
   - By using the `event.target.value` within the event handler function, we can access and capture the value the user is entering into the input field.

### The Conditional (Ternary) Operator Explained

4. **Why would we use a ternary operator?**  
   - Ternary operators provide a concise way to write conditional statements in JavaScript, enhancing code readability and reducing verbosity.

5. **Rewrite the following statement using a ternary statement:**
   ```javascript
   if (x === y) {
     console.log(true);
   } else {
     console.log(false);
   }
   ```
   - Ternary statement: `console.log(x === y ? true : false);`

### Bookmark and Review

[React Bootstrap - Forms](Link)  
[React Docs - conditional rendering](Link)


