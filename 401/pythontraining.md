# Windows: Python for Beginners

 Started 12.30.23

 Completed 1.6.24

## Important Links

[Training Course](https://learn.microsoft.com/en-us/training/paths/beginner-python/)

[Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/)

## Python: Anticipatory Confusion

- I don't think I necessarily dislike this feature of Python. But I anticipate that it will cause me confusion. And that's how Python handles Indentation and Blocks. Python uses indentation to define blocks of code, like loops and functions. In JavaScript, code blocks are enclosed within curly braces {}. And I'm an aging citizen, so I'm going to have to increase the font size of my code to ensure that I can see whether indentation is present or not.

- Now, the following will likely confuse me too. But I'm looking forward to this adjustment: Python does not require explicit variable declaration or strict typing. Variable types are inferred, allowing for dynamic typing. In contrast, JavaScript often requires let, const, or var for variable declaration, and it supports both dynamic and static typing based on usage.

## Javascript vs Python

### Similarities

1. High-Level Languages: Both Python and JavaScript are high-level programming languages, meaning they abstract many low-level functionalities, making them easier to read and write.

2. Interpreted Languages: Both Python and JavaScript are interpreted languages, executing code line by line rather than compiling the entire program before running.

3. Versatility: Both languages are versatile and widely used across various domains such as web development, data analysis, scripting, and automation.

4. Support for Functional Programming: Both Python and JavaScript support functional programming paradigms, allowing functions to be treated as first-class citizens.


### Differences

1. **Syntax:**
    - Python uses indentation (whitespace) for code blocks.
    - JavaScript uses curly braces `{}` to define code blocks.

    Python:
    ```python
    if a > 5:
        print("Greater than 5")
    else:
        print("5 or less")
    ```

    JavaScript:
    ```javascript
    if (a > 5) {
        console.log("Greater than 5");
    } else {
        console.log("5 or less");
    }
    ```

2. **Variables and Types:**
    - Python uses dynamic typing with implicit declaration of variable types.
    - JavaScript also uses dynamic typing but can involve implicit and explicit type conversion.

    Python:
    ```python
    age = 25
    name = "Stephie G"
    ```

    JavaScript:
    ```javascript
    let age = 25;
    let name = "Stephie G";
    ```

3. **Functions:**
    - In Python, indentation defines the scope of functions.
    - JavaScript uses braces to define function scope.

    Python:
    ```python
    def greet(name):
        return "Hello, " + name

    print(greet("Stephie G"))
    ```

    JavaScript:
    ```javascript
    function greet(name) {
        return "Hello, " + name;
    }

    console.log(greet("Stephie G"));
    ```

4. **Lists/Arrays:**
    - Python lists are more versatile and can contain mixed types.
    - JavaScript arrays can hold different types of data too but are optimized for homogeneous data.

    Python:
    ```python
    my_list = [1, "apple", True]
    ```

    JavaScript:
    ```javascript
    let myArray = [1, "apple", true];
    ```

5. **Classes and OOP:**
    - Python uses a more explicit syntax for defining classes and object-oriented programming.
    - JavaScript's approach to classes is prototype-based and more flexible.

    Python:
    ```python
    class Person:
        def __init__(self, name):
            self.name = name

        def greet(self):
            return f"Hello, {self.name}!"

    stephieg = Person("Stephie G")
    print(stephieg.greet())
    ```

    JavaScript:
    ```javascript
    class Person {
        constructor(name) {
            this.name = name;
        }

        greet() {
            return `Hello, ${this.name}!`;
        }
    }

    let stephieg = new Person("Stephie G");
    console.log(stephieg.greet());
    ```

6. The way each handles the statement "1" + 2. Python will print an error. Whereas I'm accumstomed to JS, which will concatenate.

7. Usage: Python is often used for data analysis, artificial intelligence, machine learning, and scientific computing. JavaScript, on the other hand, is primarily used for web development and browser-related tasks.

8. Asynchronous Programming: JavaScript is commonly used in asynchronous programming paradigms, especially in the context of web development, where it handles events and interactions efficiently. Python typically uses libraries like asyncio or threading for concurrency but is not as native to asynchronous programming as JavaScript.

9. Scoping: Python has block-level scoping, where variables defined within a block are accessible only within that block or function. JavaScript has function-level scoping by default, but with ES6 (ECMAScript 6), let and const allow block-level scoping. I didn't even know that that was the purpose of let and const.

10. In Python, the keyword elif is short for else if.

11. Essentially, Python requires a virtual environment to run.

## Let's Go! I'm excited to learn Python. 