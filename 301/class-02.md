# State and Props

## Class 2: 11/27/23

**This assignment explores key concepts in React, focusing on the React lifecycle and the distinction between state and props. It involves identifying the order of execution in the React lifecycle, understanding the purpose of lifecycle methods like componentDidMount, differentiating between state and props, recognizing when to re-render applications, and exploring documentation and resources related to React, state, lifecycle, handling events, and Bootstrap.**

### Reading

[React lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)


1. **Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?**  
   - The 'constructor' happens first, followed by 'render' and then 'componentDidMount' in the React lifecycle.

2. **What is the very first thing to happen in the lifecycle of React?**  
   - The execution of the 'constructor' method within a component.

3. **Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates**  
   - constructor, render, componentDidMount, React Updates, componentWillUnmount

4. **What does componentDidMount do?**  
   - `componentDidMount` is a React lifecycle method that is invoked immediately after a component is mounted or inserted into the DOM. It's often used for actions that require DOM nodes or for initializing processes dependent on the component's presence in the DOM.


### Videos

[React State Vs Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)

5. **What types of things can you pass in the props?**  
   - In props, you can pass various types of data, including strings, numbers, arrays, objects, functions, and even React components.

6. **What is the big difference between props and state?**  
   - The main difference between props and state is that props are passed into a component from its parent, and they are immutable (read-only) within the component. State, however, is managed internally by the component and can be changed using `setState()`.

7. **When do we re-render our application?**  
   - We re-render our application when there are changes in the component's state or props.

8. **What are some examples of things that we could store in state?**  
   - Examples of things that could be stored in a component's state include user input data, UI state (like toggles or modals), fetched data from APIs, or any data that might change during the component's lifecycle.

### Bookmark and Review

[React Docs - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

[React Docs - handling events](https://reactjs.org/docs/handling-events.html)

[React Tutorial through ‘Developer Tools’](https://reactjs.org/tutorial/tutorial.html)

[React Bootstrap Documentation](https://react-bootstrap.github.io/)

[Boootstrap Cheatsheet](https://getbootstrap.com/docs/5.0/examples/cheatsheet/)

[Bootstrap Shuffle - a class “sandbox”](https://bootstrapshuffle.com/classes)

[Netlify](https://www.netlify.com/)

### Things I want to know more about 

Can a React component have both state and props? 