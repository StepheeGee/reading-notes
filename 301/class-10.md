# Persistence

## Class 10: 12.8.23
Prepared 12.7.23

**Summary/Statement:** This assignment focuses on understanding JavaScript call stacks and error messages.

### Reading

[Understanding the JavaScript Call Stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)

1. **What is a ‘call’?**
   - A 'call' in JavaScript refers to the invocation of a function.

2. **How many ‘calls’ can happen at once?**
   - JavaScript is single-threaded, so only one call can occur at a time due to its synchronous nature.

3. **What does LIFO mean?**
   - LIFO stands for Last In, First Out. It describes the way the call stack operates, where the last function that gets pushed into the stack is the first to pop out when the function returns.

4. **Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.**

   [Example Diagram](10.tldr)

5. **What causes a Stack Overflow?**
   - A Stack Overflow occurs when the call stack exceeds its maximum size, usually due to recursive function calls without a proper base case to stop the recursion.

[JavaScript Error Messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

6. **What is a ‘reference error’?**
   - A 'reference error' occurs when trying to access a variable that does not exist.

7. **What is a ‘syntax error’?**
   - A 'syntax error' happens when the code violates the language's syntax rules.

8. **What is a ‘range error’?**
   - A 'range error' occurs when a numeric value is not within a specified range.

9. **What is a ‘type error’?**
   - A 'type error' happens when a value is not of the expected type, for instance, trying to call a method on an undefined variable.

10. **What is a breakpoint?**
    - A breakpoint is a designated point in the code where execution pauses, allowing inspection of variables and the program's state.

11. **What does the word ‘debugger’ do in your code?**
    - The 'debugger' statement triggers a breakpoint, allowing step-by-step execution and examination of code during runtime.

### Resources

[JS Event Loop](https://www.javascripttutorial.net/javascript-event-loop/)


### Things I want to know more about

- Recursion
