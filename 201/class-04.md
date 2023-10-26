# HTML Links, JS Functions, and Intro to CSS Layout

Complete: 10.25.23

Class Four: 10.26.23

*The key emphasis, of this assignment, is to deepen our understanding of HTML, JS, and CSS. It also appears that we are going to take a deeper dive into complex CSS layouts.* 

![Four](photos/four.jpg)

## Learn HTML

### To create a basic link, we wrap text or other content inside what element?

To create a basic link, we wrap text or other content inside the `<a>` element.

### The href attribute contains what information?

The `href` attribute contains the URL or web address to which the link should navigate when clicked. For example: `<a href="https://www.example.com">Visit Example Website</a>`.

### What are some ways we can ensure links on our pages are accessible to all readers?


* Use descriptive link text: Make sure the text within the link is meaningful and clearly describes the destination. Avoid using vague terms like "click here."

* Add title attributes: Consider using the `title` attribute to provide additional information about the link when a user hovers over it.

* Make links keyboard accessible: Ensure that users can navigate links using the keyboard (e.g., using the "Tab" key) without any issues.

* Use contrasting colors: Ensure that links are visually distinct from regular text, and provide visual cues, like underlining or changing the color when the link is hovered over.

* Test with accessibility tools - like Lighthouse. Funny enough, my last lab scored a 71 with Lighthouse for user accessibility. One of the criticisms was that there wasn't enough contrast in my color scheme. So Lighthouse was helpful. And I discovered that visual distinctions help with accessibility. 

Source: [Creating Hyperlinks](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

## CSS Layout

### What is meant by “normal flow”?

"Normal flow" refers to the default layout behavior of elements on a web page. In the normal flow, elements are displayed one after another in the order they appear in the HTML document. Elements are stacked vertically, with each block-level element starting on a new line, and inline elements flowing within the content of block-level elements. This is the default behavior in which elements are laid out without any special positioning or styles applied.

### What are a few differences between block-level and inline elements?

1. Block-level elements start on a new line and occupy the full width of their parent container, creating a "block" of content, while inline elements flow within the content and do not force a new line.

2. Block-level elements can have margins and padding applied to all four sides, affecting the layout around them, whereas inline elements typically have horizontal margins and padding only.

3. Block-level elements are often used for structural elements like headings, paragraphs, and divs, while inline elements are used for text-level elements like links (`<a>`), emphasized text (`<em>`), or strong text (`<strong>`).

###  ___ positioning is the default for every html element.

"Static"

### Name a few advantages to using absolute positioning on an element.

1. Precise placement: Absolute positioning allows you to specify the exact position of an element relative to its nearest positioned ancestor, providing fine-grained control over layout.

2. Overlapping content: Elements with absolute positioning can overlap other elements, which can be useful for creating complex designs, such as overlays, tooltips, or image galleries.

3. Independent of normal flow: Absolutely positioned elements do not affect the layout of other elements, which can be helpful for creating non-standard design elements that need to be visually separate from the document's normal flow.

### What is a key difference between fixed positioning and absolute positioning?

**Their reference point**:

- Absolute positioning is relative to the nearest positioned ancestor. If there is no positioned ancestor, it is relative to the initial containing block.
- Fixed positioning is relative to the viewport (the browser window), meaning that the element remains in the same position even when the page is scrolled. Fixed elements are fixed in place, typically used for headers, footers, or sidebars that should remain visible while scrolling.

Sources: 

[CSS Layout Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)

[CSS Layout Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)

## Learn JS

### Describe the difference between a function declaration and a function invocation.

The difference between a function declaration and a function invocation lies in their roles and when they occur:

* **Function Declaration:**
   - A function declaration is a way to create a named function that can be used throughout your code.
   - It consists of the `function` keyword, followed by the function name, a list of parameters (if any), and the function body.
   - A function declaration defines the function and its behavior but doesn't execute it immediately when the code is run.

   Example:
   ```javascript
   function greet(name) {
     console.log(`Hello, ${name}!`);
   }
   ```
* **Function Invocation (Call):**
   - Function invocation, also known as a function call, is the process of executing a function defined elsewhere in your code.
   - It involves writing the function's name, followed by parentheses `()` to trigger its execution.
   - When you invoke a function, it runs the code defined within the function's body, using the provided arguments (if any).

   Example:
   ```javascript
   greet('Steph'); // Invoking the 'greet' function with the argument 'Steph'
   ```

### What is the difference between a parameter and an argument?

- **Parameter:**
  - A parameter is a placeholder or variable name listed in the function declaration.
  - It acts as a local variable inside the function and is used to receive and work with values provided when the function is called.
  - Parameters are defined within the function's parentheses.

  Example:
  ```javascript
  function greet(name) {
    // 'name' is a parameter
    console.log(`Hello, ${name}!`);
  }
  ```

- **Argument:**
  - An argument is an actual value or expression passed to a function when it is invoked (called).
  - Arguments are the real values that are assigned to the parameters when the function is called.
  - They are supplied in the parentheses following the function name during the function invocation.

  Example:
  ```javascript
  greet('Steph');
  // 'Steph' is an argument that corresponds to the 'name' parameter in the 'greet' function.
  ```

In the example above, `'Steph'` is an argument that is passed to the `greet` function, and it gets assigned to the `name` parameter inside the function.

Source: [Funtions: Reusable Block Code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

## Miscellaneous

### Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.

Engaged collaboration: I imagine that this will help the pair push each other. It's probably a more stimulating and engaging approach.

Learning from fellow students: I find that working in lab with my classmates helps me learn new techniques and problem-solving approaches. Some of my classmates are more experienced than me and they are quite helpful and insightful. 

Source: [6 Reasons for Pair Programming](https://www.codefellows.org/blog/6-reasons-for-pair-programming/)

## Things I want to know more about
When to use a function instead of using a conditional if-else statement. 

![Books](photos/Books.jpg)