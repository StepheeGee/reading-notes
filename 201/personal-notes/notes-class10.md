In JavaScript, you can define and use a function before you actually declare it in your code. In other words, you can write a function's code and then call that function even if the function definition appears later in your script. JavaScript will "hoist" function declarations, allowing you to use them anywhere within the scope they are defined.

Here's an example:

```javascript
sayHello(); // This is perfectly valid

function sayHello() {
  console.log("Hello, world!");
}
```

In the above code, we call the `sayHello` function before declaring it, but JavaScript doesn't produce an error because it hoists the function declaration to the top of the scope.

But, when it comes to variables, if you want to assign a function to a variable, you must declare that variable before trying to initialize it with a function. Here's an example:

```javascript
// This will produce an error
const result = add(2, 3);

const add = function (a, b) {
  return a + b;
};
```

In this example, trying to initialize the `result` variable with the `add` function before declaring it will result in an error. You need to declare the `add` variable first and then assign the function to it.

So, in summary:

- You can call a function before you declare it because function declarations are hoisted to the top of their scope.
- If you want to assign a function to a variable, you have to declare that variable before initializing it with the function.