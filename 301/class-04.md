# React and Forms

## Class 4: 11.30.23

Prepared: 11.29.23


**Summary/Statement:** This assignment covers the utilization of forms in React, emphasizing controlled components, event handling, and conditional (ternary) operators.

### [React Docs - Forms](https://reactjs.org/docs/forms.html)

1. **What is a ‘Controlled Component’?**  
   - A 'Controlled Component' in React is an input form element whose value is controlled by React state. Its value is set by the state, and its onChange event handler manages the user input, updating the state with each change.

2. **Should we wait to store the user's responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.**  
   - Update the state with the user's responses as soon as they enter them. Why? Because doing so enables real-time interaction and validation of the input, providing a more responsive user experience.

3. **How do we target what the user is entering if we have an event handler on an input field?**  
   - By using the `event.target.value` within the event handler function, we can access and capture the value the user is entering into the input field.

### [The Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

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

[React Bootstrap - Forms](https://react-bootstrap.github.io/forms/overview/)  
[React Docs - conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

### Other Source

[React Input](https://react.dev/reference/react-dom/components/input)

### Things I want to know more about

I have to remember that 1 is truthy and 0 is falsy. 

Do ternary statements help add conditional logic to a controlled component?

### Personal Notes

<details>
<summary>Conditional Logic</summary>
Ternary statements are commonly used in React to add conditional logic, and they can be very helpful in controlled components.

Controlled components in React are those where the value of the form element is controlled by React state. When you add conditional logic using ternary statements, you can dynamically modify the behavior or appearance of the controlled component based on certain conditions.

For example, let's say you have an input field controlled by React state:

```javascript
function MyComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input 
      type="text" 
      value={inputValue} 
      onChange={handleChange} 
    />
  );
}
```

Now, if you want to conditionally change attributes or behavior based on some condition, you can use a ternary statement:

```javascript
function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input 
      type="text" 
      value={inputValue} 
      onChange={handleChange}
      disabled={!isEnabled ? 'disabled' : undefined} // Ternary for disabling/enabling
      placeholder={isEnabled ? 'Type something...' : 'Input disabled'} // Ternary for placeholder
    />
  );
}
```

In this example, the `disabled` attribute and `placeholder` are conditionally set based on the `isEnabled` state using ternary statements. Depending on the value of `isEnabled`, the input field will either be disabled or enabled and show different placeholder text. This demonstrates how ternary statements can be used to conditionally modify controlled components in React.

Source: ChatGPT
</details>

<details>
<summary>How React Communicates</summary>
In React, `state`, `props`, and callback functions facilitate communication and data flow between components, especially between parent and child components.

### State:

- **State** is internal data managed by a component. It's mutable and can be changed by the component itself using `this.setState` (for class components) or `useState` hook (for functional components).
- It is local to the component where it's defined and can't be directly accessed or modified by other components.

### Props:

- **Props (short for properties)** are data passed from a parent component to a child component.
- They are immutable and read-only for the child component. The child component cannot modify its props; they are controlled by the parent.
- Props allow components to be customizable and reusable by passing different data to the same component.

### Callback Functions:
- **Callback functions** are functions passed from a parent component to a child component via props.
- They allow children to communicate with parents by invoking the callback function, passing data or triggering actions in the parent component.

### Interaction between State, Props, and Callback Functions:
1. **Parent-to-Child Communication (Props):**
   - The parent component passes data (props) down to the child component.
   - Child components receive and use this data for rendering or functionality.

2. **Child-to-Parent Communication (Callback Functions):**
   - Parent components can pass callback functions to child components via props.
   - Child components can trigger these callbacks to communicate with the parent. For example, a child component might invoke a callback function passed by the parent to update the parent's state.

3. **State Management:**
   - State is primarily managed within individual components.
   - Parent components might manage certain data in their state and pass it down as props to child components.
   - When child components need to modify this data, they can do so indirectly by invoking callback functions provided by the parent.

In summary, state, props, and callback functions work together to enable data flow and interaction between different components in a React application. They facilitate the uni-directional flow of data from parent to child and enable child components to communicate with their parents. This unidirectional data flow makes it easier to manage and reason about data in a React application.
</details>

<details>
<summary>Data Flow for React Components </summary>

Here's a simplified diagram illustrating the flow of data between React components using state, props, and callback functions:

```
        Parent Component                   Child Component

[State] ----------> [Props] -----------> [Uses Props for rendering]
  ↑                      ↑                           ↑
  |                      |                           |
[Updates State] <-------- [Callback Function] ------+
```

Explanation:

1. **State in Parent Component**:
   - The Parent Component manages its internal state, which might include data or information relevant to its functionality.

2. **Passing State as Props**:
   - The Parent Component passes data from its state down to the Child Component as props.
   - This data is read-only within the Child Component.

3. **Child Component Rendering**:
   - The Child Component uses the received props to render its content or perform certain actions based on the data.

4. **Callback Functions**:
   - Parent Components can define callback functions and pass them to Child Components as props.
   - These callback functions are used by the Child Component to communicate with the Parent Component.

5. **Updates via Callback Functions**:
   - When the Child Component needs to update the Parent Component's state or trigger an action in the Parent, it invokes the provided callback function.
   - The callback function in the Parent Component is triggered and can perform actions such as updating the Parent's state.

This flow showcases how data flows from parent to child components via props, allowing child components to interact with their parents through callback functions, enabling a uni-directional data flow in a React application.
</details>