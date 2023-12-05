# Node.js: Express Servers

## Class 7: 12.4.23

**Summary/Statement:** This assignment delves into understanding Node.js, covering its fundamentals, JavaScript runtime environment, npm, and exploring the benefits and workings of pair programming. Additionally, it includes resources related to API documentation, Axios, and asynchronous JavaScript.

### Reading: An Introduction to Node.js on sitepoint.com

[An Introduction to Node.js on sitepoint.com](https://www.sitepoint.com/an-introduction-to-node-js)

1. **What is Node.js?**  
   - Node.js is a server-side JavaScript runtime environment that allows execution of JavaScript code outside of a browser.

2. **In your own words, what is Chrome’s V8 JavaScript Engine?**  
   - Chrome's V8 JavaScript Engine is a high-performance engine that interprets and executes JavaScript code in the Chrome browser and is the core of Node.js, enabling efficient execution of JavaScript code outside the browser.

3. **What does it mean that Node is a JavaScript runtime?**  
   - Node being a JavaScript runtime means that it provides an environment to execute JavaScript code outside the browser, allowing developers to build server-side applications using JavaScript.

4. **What is npm?**  
   - npm (Node Package Manager) is a package manager for Node.js that allows developers to install, manage, and share reusable JavaScript code packages or libraries.

5. **What version of Node are you running on your machine?**  
   -  Used command node -v
v20.10.0

6. **What version of npm are you running on your machine?**  
   - 10.2.3

7. **What command would you type to install a library/package called ‘jshint’?**  
   - npm install jshint

8. **What is Node used for?**  
   - Node is used for building scalable network applications, handling simultaneous connections, real-time applications, and as a backend for web applications.

### [6 Reasons for Pair Programming](https://www.codefellows.org/blog/6-reasons-for-pair-programming/)

9. **What are the 6 reasons for pair programming?**  
   - Greater Efficiency
   - Engaged Collaboration
   - Learning from Fellow Students
   - Social Skills
   - Job Interview Readiness
   - Work Environment Readiness

10. **In your experience, which of these reasons have you found most beneficial?**  
    - Learning from Fellow Students

11. **How does pair programming work?**  
         While there are many different styles, pair programming commonly involves two roles: the Driver and the Navigator. The Driver is the programmer who is typing and the only one whose hands are on the keyboard. Handling the “mechanics” of coding, the Driver manages the text editor, switching files, version control, and—of course writing—code. The Navigator uses their words to guide the Driver but does not provide any direct input to the computer. The Navigator thinks about the big picture, what comes next, how an algorithm might be converted in to code, while scanning for typos or bugs. The Navigator might also utilize their computer as a second screen to look up solutions and documentation, but should not be writing any code. [Code Fellows](https://www.codefellows.org/blog/6-reasons-for-pair-programming/)

### Bookmark and Review

[Geocoding API Docs](https://locationiq.com/)  
[Axios docs](https://www.npmjs.com/package/axios)  
[MDN async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)


### Things I want to know more about

# Notes

<details>
<summary>Class Components</summary>
In React, a functional component can be created from a class component by converting the class-based structure to a function-based one. Here's an example of how you might do that:

### Class-based component:

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ... initial state
    };
    // ... bind methods if needed
  }

  // ... other methods

  render() {
    return (
      <div>
        {/* ... component JSX */}
      </div>
    );
  }
}

export default MyComponent;
```

### Functional component equivalent:

```javascript
import React, { useState } from 'react';

const MyComponent = (props) => {
  const [state, setState] = useState({
    // ... initial state
  });

  // ... other logic

  return (
    <div>
      {/* ... component JSX */}
    </div>
  );
};

export default MyComponent;
```

In the functional component equivalent:

- `useState` from React is used to create and manage state.
- The component is defined as a JavaScript arrow function.
- The state is managed using the `useState` hook instead of `this.state` in the constructor.
- Lifecycle methods and class-specific functions are refactored to fit within the functional component's structure.

Remember, functional components can also utilize other hooks like `useEffect` for lifecycle methods and `useContext`, `useReducer`, etc., based on the needs of the component.

</details>