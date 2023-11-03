## Debugging

![10](photos/ten.jpg)

Prepared: 11/2/23

Class TEN: 11/3/23

The purpose of this reading assignment is to teach a developer how to troubleshoot routinely, accurately, and effectively to avoid disasters.

[What Went Wrong? Troubleshooting JavaScript.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

### Name some key differences between a Syntax Error and a Logic Error.

1. **Syntax Error:**
   - Syntax errors occur when the code violates the rules of a programming language's syntax.
   - These errors prevent the code from running at all.
   - Examples include missing semicolons, typos in variable/function names, and unbalanced parentheses.
   - Syntax errors are often caught by the code editor or interpreter/compilers before the program runs.

2. **Logic Error:**
   - Logic errors occur when the code is syntactically correct but doesn't produce the desired results.
   - The code runs, but it does not perform the intended logic.
   - Examples include incorrect calculations, incorrect if-else conditions, or wrong algorithm implementation.
   - Logic errors can be more challenging to identify because they don't necessarily trigger error messages.

### List a few types of errors that you have encountered in past lab assignments and explain how you were able to correct them.

1. **Syntax Errors:** These often occurred due to typographical mistakes such as missing semicolons or mismatched parentheses. They were relatively easy to correct as the code editor flagged them with error messages.

2. **Runtime Errors:** These errors happened when the code attempted to perform operations that weren't allowed. For example, accessing an undefined variable or division by zero. Debugging tools and error messages helped identify and fix these issues.

3. **Logic Errors:** These were more challenging because the code ran without errors but produced incorrect results. I had to carefully review the logic and step through the code to identify where the problem lay. Common examples include incorrect if-else conditions and algorithms. Debugging and code reviews by peers were valuable for solving these errors.

### How will this topic continue to influence your long term goals?

Understanding and debugging both syntax and logic errors is a crucial skill in software development. Long-term goals in software development often involve working on complex and large-scale projects. The ability to identify and fix errors efficiently is essential for maintaining and improving software. 

Moreover, learning from past errors and challenges contributes to personal growth and expertise. It fosters the ability to write more robust code, design better algorithms, and improve problem-solving skills, all of which are vital for achieving long-term goals in software development.


[The JavaScript Debugger.](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#the_javascript_debugger)

### How would you describe the JavaScript Debugger tool and how it works to someone just starting out in software development?

 It's like a powerful microscope for your code. Here's how it works, in simple terms:

1. **Breakpoints:** You can tell the debugger to pause your code at specific points. These points are called breakpoints. Imagine it's like putting a pause button in your code at certain spots.

2. **Inspect and Step Through:** When the code pauses at a breakpoint, you can look at the values of variables, see what's happening, and even change things. It's like having X-ray vision to see inside your code.

3. **Step Forward:** You can tell the debugger to step through your code line by line, so you can watch how it behaves step by step. It's like watching a movie in slow motion. 

4. **Find Bugs:** If something's not working right, you can use the debugger to find and fix the problem. You can see where your code is going wrong and make changes to make it right.

### Define what a breakpoint is.

A breakpoint is like a marker you place in your code. It's a spot where you want your code to pause when you're running it through the debugger. This allows you to inspect what's going on at that exact moment in your code. You can check the values of variables, see if your conditions are being met, and generally understand what's happening. It's incredibly useful for troubleshooting and understanding your code's behavior.

### What is the call stack?

The call stack is like a stack of books. Each book (or "frame") represents a function or a piece of code that's currently running. When a function gets called, a new book (frame) is added to the top of the stack. When a function finishes, its frame is removed from the stack. The call stack helps your code keep track of where it is and where it needs to go next. It's essential for understanding the flow of your program and diagnosing issues like function calls that go too deep (stack overflow) or when you're trying to access variables that don't exist in the current context.


## Bookmark and Review

[Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)

[Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

### Things I want to know more about

I still don't understand how a call stack works. 