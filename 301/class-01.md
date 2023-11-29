# Introduction to React and Components

11.20.23

## [Component-Based Architecture](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)

### What is a “component”?

A component is a modular, portable, replaceable, and reusable set of well-defined functionality that encapsulates its implementation and exporting it as a higher-level interface.

### What are the characteristics of a component?

Reusability − Components are usually designed to be reused in different situations in different applications. However, some components may be designed for a specific task.

Replaceable − Components may be freely substituted with other similar components.

Not context specific − Components are designed to operate in different environments and contexts.

Extensible − A component can be extended from existing components to provide new behavior.

Encapsulated − A A component depicts the interfaces, which allow the caller to use its functionality, and do not expose details of the internal processes or any internal variables or state.

Independent − Components are designed to have minimal dependencies on other components.

### What are the advantages of using component-based architecture?

Ease of deployment − As new compatible versions become available, it is easier to replace existing versions with no impact on the other components or the system as a whole.

Reduced cost − The use of third-party components allows you to spread the cost of development and maintenance.

Ease of development − Components implement well-known interfaces to provide defined functionality, allowing development without impacting other parts of the system.

Reusable − The use of reusable components means that they can be used to spread the development and maintenance cost across several applications or systems.

Modification of technical complexity − A component modifies the complexity through the use of a component container and its services.

Reliability − The overall system reliability increases since the reliability of each individual component enhances the reliability of the whole system via reuse.

System maintenance and evolution − Easy to change and update the implementation without affecting the rest of the system.

Independent − Independency and flexible connectivity of components. Independent development of components by different group in parallel. Productivity for the software development and future software development.

## [What is Props and How to Use it in React](https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0#:~:text=%E2%80%9CProps%E2%80%9D%20is%20a%20special%20keyword,way%20from%20parent%20to%20child)

### What is “props” short for?

Properties

### How are props used in React?

“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.


### What is the flow of props?

But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)

### Bookmark and Review

[React Tutorial through ‘Passing Data Through Props’](https://reactjs.org/tutorial/tutorial.html)
[React Docs - Hello world](https://reactjs.org/docs/hello-world.html)
[React Docs - Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
[React Docs - Rendering elements](https://reactjs.org/docs/rendering-elements.html)
[React Docs - Components and props](https://reactjs.org/docs/components-and-props.html)

### Things I want to know more about

### Notes from Class


<details>
  <summary>Callback Function</summary>
  
  In JavaScript, a callback function is a function passed as an argument to another function, with the intention of being executed later, often after the completion of some operation or as a response to an event.

  When it comes to `forEach` in JavaScript, it's a method available on arrays that iterates over each element of the array and executes a provided callback function once for each array element. The callback function, in this case, is the function you pass to `forEach` to specify what to do with each element.

  ```javascript
  let numbers = [1, 2, 3, 4, 5];

  // Using forEach with a callback function
  numbers.forEach(function(number) {
      console.log(number * 2);
  });
  ```

  In this example:

  - `numbers` is an array containing some numeric values.
  - `forEach` is called on the `numbers` array.
  - The function `function(number) { console.log(number * 2); }` is the callback function passed to `forEach`.
  - For each element in the `numbers` array, this callback function is executed. It takes each number, multiplies it by 2, and logs the result to the console.

  So, in relation to `forEach`:

  - The callback function is the function that `forEach` will call for each element in the array.
  - It's a way of specifying what action or operations you want to perform on each element of the array.

  Callbacks, including those used with `forEach`, are powerful in JavaScript as they enable asynchronous programming, event handling, and functional programming paradigms. They allow you to pass behavior (functions) as data, which can be executed at a later time or in response to certain conditions.
</details>


<details>
  <summary>Using Callback Function in `forEach`</summary>
  
  In JavaScript, the `forEach` array method allows you to iterate through each element of an array and perform an operation using a callback function. It's a handy way to replace a traditional `for` loop in certain scenarios.

  Below are examples demonstrating how a `for` loop and the `forEach` method achieve the same outcome of iterating through an array:

  **Using a `for` loop**:

  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
  }
  ```

  **Using `forEach`**:

  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach(function(number) {
      console.log(number);
  });
  ```

  Both pieces of code perform the same task: iterating through each element of the `numbers` array and logging each element to the console.

  In the `forEach` example:

  - `numbers.forEach` is called on the array.
  - The provided callback function `(function(number) { console.log(number); })` is executed for each element of the array.
  - The `number` variable represents each element in the array during each iteration.

  Using `forEach` often results in cleaner and more readable code compared to traditional `for` loops, particularly when working with arrays. It abstracts away the manual handling of the loop and embraces a more functional programming approach.
</details>


<details>
  <summary>Rules for Arrow Functions</summary>
  
  Arrow functions in JavaScript have specific rules and behaviors that differ from regular functions:

  1. **Concise Syntax**: Arrow functions have a shorter syntax compared to regular functions, making them more concise and easier to write.

  2. **Implicit Return**: When the function body consists of a single expression, arrow functions allow an implicit return of that expression without using the `return` keyword.

  3. **No `this` Binding**: Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the surrounding (lexical) scope where the function is defined.

  4. **No `arguments` Object**: Arrow functions do not have their own `arguments` object. Instead, they rely on the `arguments` of the surrounding function or lexical scope.

  5. **Cannot Be Used as Constructors**: Arrow functions cannot be used as constructors and do not have their own `prototype` property. They cannot be called with `new`.

  6. **No `super` Binding**: Arrow functions do not have their own `super` keyword. Therefore, they cannot be used in methods within classes that require the `super` context.

  7. **No `new.target` Binding**: Arrow functions do not have their own `new.target` property. The `new.target` within an arrow function refers to the `new.target` of the enclosing non-arrow function.

  8. **Cannot Change `this`**: Unlike regular functions, the value of `this` cannot be changed explicitly using methods like `bind()`, `call()`, or `apply()`.

  These rules outline the behavior and limitations of arrow functions in JavaScript, providing a more succinct syntax but with specific contextual and functional differences compared to regular functions.
</details>


<details>
  <summary>Client, Server, and Protocols in Plain Language</summary>
  
  **Server:** Imagine a server as a chef in a restaurant. When you go to a restaurant, you (the client) order food from the menu. The chef prepares the food according to your order and serves it to you. Similarly, a server in computing is like the chef. It provides services or resources upon request from clients.

  **Client:** In this analogy, you (as the customer) are the client. You have needs or requests (food orders) that you want fulfilled. You communicate your requirements to the chef (the server) who then prepares and delivers what you asked for.

  **Protocols:** Now, think of protocols as the language or set of rules both you (the client) and the chef (the server) follow to ensure effective communication. In a restaurant, there's a protocol for ordering, cooking, and serving food. In computing, protocols are similar—they define how data is transmitted, received, and interpreted between the client and server.

  - **Server**: A server is a powerful computer or program that stores and manages data, resources, or services. It responds to requests made by clients, providing them with the necessary information or services they need.

  - **Client**: A client is any device or program that requests information or services from a server. It could be a computer, a smartphone, a web browser, or any application that needs data or resources from a server.

  So, in essence, the server provides resources, services, or information, while the client requests and consumes these resources or services provided by the server. Protocols act as the rules or language both client and server use to communicate effectively, ensuring that data is transmitted and understood correctly between them. They define the standards for interaction, much like the ordering and serving protocols in a restaurant ensure a smooth dining experience.
</details>

<details>
  <summary>Local Host vs. Remote Server</summary>
  
  **Local Host:**

  - **Definition**: Local host refers to your own computer or device. When you're working on your laptop or desktop, that device itself is the local host.
  
  - **Function**: It's where you run and test applications or software on your own machine. Everything is happening locally, within your computer's environment.
  
  - **Usage**: Developers often use the local host for testing websites, running servers, or trying out applications before deploying them to a remote server. The address for the local host is typically `127.0.0.1`.
  
  **Remote Server:**

  - **Definition**: A remote server is a computer system or machine that is located elsewhere, not physically connected to your local computer.
  
  - **Function**: Remote servers are used to store data, host websites, run applications, and provide services accessible over a network, such as the internet.
  
  - **Usage**: Websites, online services, cloud storage, and various online applications all operate on remote servers. They are accessed via the internet using their unique IP address or domain name.

  **Differences:**

  1. **Location**: Local host resides on your own device, while a remote server is situated elsewhere, often in data centers maintained by service providers.
  
  2. **Functionality**: Local host is primarily used for testing and development, whereas remote servers handle live production environments and serve content to users.
  
  3. **Accessibility**: Local host content is only accessible on your local machine, while remote servers are accessible over a network, like the internet, making their content available to users globally.

  In summary, a local host is your personal computer where you develop and test, while a remote server is a separate computer elsewhere, delivering live services or hosting content accessible over the internet.
</details>

<details>
  <summary>Web Request-Response Cycle (WRRC)</summary>
  
  **WRRC** stands for Web Request-Response Cycle, which represents the sequence of events that occur when a client (such as a web browser) requests information from a web server and receives a response. It describes the flow of communication between clients and servers in web applications.

  **Key Phases:**

  1. **Request Phase:**
      - **Client Request**: The cycle begins when a client, like a web browser, sends a request to a server for specific resources. This request contains information about what the client wants (e.g., a web page, an image, or data).
      - **Types of Requests**: Requests can be of various types (GET, POST, PUT, DELETE, etc.), indicating the action the client wants to perform.

  2. **Processing Phase:**
      - **Server Processing**: Upon receiving the request, the server processes it. This involves handling the request, retrieving necessary data, executing scripts, interacting with databases, or performing any necessary operations to generate a response.
  
  3. **Response Phase:**
      - **Server Response**: After processing the request, the server sends back a response to the client. This response includes the requested information or resources, such as HTML content, images, JSON data, etc.
      - **Response Status Codes**: The response also includes a status code indicating the success or failure of the request (e.g., 200 for success, 404 for "not found," 500 for "server error," etc.).

  **Continuation and Closure:**

  - **Client Handling**: Once the client receives the response, it can further process the received data, render a web page, display images, or perform actions based on the received information.
  
  - **Cycle Completion**: This completes one round of the WRRC. However, web applications often involve multiple such cycles as users interact with different parts of a website or application.

  The WRRC is fundamental to how web applications function, enabling the exchange of data between clients and servers, allowing users to access and interact with content on the internet.
</details>
<details>
  <summary>What is state in React?</summary>
  
  State in React is an internal data storage system used by components. It represents the current condition or state of the UI and determines its behavior and rendering at any given time.

  State allows React components to manage and maintain their data, making them dynamic and responsive to user interactions. When the state of a component changes, React automatically re-renders the component to reflect those changes in the user interface.

  State is mutable and can be updated using the `setState()` method provided by React. However, it should be modified using the appropriate React lifecycle methods to ensure proper rendering and avoid direct state mutation.

  The use of state enables components to be interactive, maintain their data, and respond to user actions effectively, making React applications more dynamic and user-friendly.
</details>


<details>
  <summary>Difference between modifying state in React and JavaScript</summary>

#### JavaScript Example:
  
```javascript
// JavaScript
let counter = 0;

// Attempting to modify the variable directly
counter++; // Directly changing the value

console.log(counter); // Output: 1
```

#### React Example:

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // Attempting to modify the state directly
  handleIncrement = () => {
    // Directly modifying the state (incorrect way)
    this.state.counter++; // Avoid doing this in React

    // This will not trigger a re-render or update the UI
    console.log(this.state.counter); // Output: 0 (state not updated)
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
```

In the React example, modifying the state directly (`this.state.counter++`) is incorrect and won't trigger a re-render of the component or update the UI. To correctly update the state in React, you should use the `setState()` method:

```javascript
// Correct way to update state in React
handleIncrement = () => {
  // Using setState to update state
  this.setState((prevState) => ({
    counter: prevState.counter + 1,
  }));

  // This will correctly update the state and trigger a re-render
};
```

In React, `setState()` method is used to update the state, ensuring that React re-renders the component and reflects the changes in the UI. This is a fundamental difference between modifying variables directly in regular JavaScript and updating state in React.

</details>

<details>
  <summary>What is a fragment element in React?</summary>
  
In React, a fragment is a feature that allows you to group multiple children elements without adding an extra node to the DOM. It's useful when you need to return multiple elements from a component's render method, but you don't want to introduce an additional wrapping element.

#### Without Fragments:

```javascript
import React from 'react';

// Returning multiple elements without a fragment
const MultipleElements = () => {
  return (
    <div>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </div>
  );
};
```

In the example above, the `<div>` is necessary to encapsulate the `<h1>` and `<p>` elements, but it introduces an extra DOM node.

#### With Fragments:

```javascript
import React from 'react';

// Using a fragment to return multiple elements
const MultipleElementsFragment = () => {
  return (
    <>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </>
  );
};
```

Using a fragment (indicated by `<>...</>`) allows returning multiple elements without introducing an additional wrapping element in the DOM. Fragments are more efficient and maintain cleaner code by avoiding unnecessary nesting.

Fragments are especially useful when you need to return adjacent JSX elements from a component without creating extra DOM nodes or affecting the structure of the rendered output.

</details>









<details>
<summary></summary>
</details>