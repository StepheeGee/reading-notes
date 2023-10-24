# Introduction to Web Development

Class Two: 10.24.23

Assignment Prepared: 10.23.23

*The key emphasis of this assignment is to understand the fundamentals of HTML, CSS, and JS. HTML (Hypertext Markup Language) is the backbone of web content, providing structure and semantics. CSS (Cascading Style Sheets) controls the presentation and layout, making web content visually appealing. JavaScript adds interactivity and dynamic behavior. Together, these technologies form the foundation of web development.*
![Two](photos/two.jpg)

## HTML Fundamentals

### Why is it important to use semantic elements in our HTML?

Using semantic elements in HTML is crucial for several reasons:

1. **Clarity and Readability:** Semantic elements provide a clear and meaningful structure to web documents. It makes it easier for other developer's to read the content and structure. 

2. **Search Engine Optimization (SEO):** Search engines use semantic HTML elements to better understand the content and context of a web page. Properly structured content with semantic tags can positively impact search engine rankings. I actually learned this today when we used the Lighthouse feature in our Chrome browser.

3. **Accessibility:** Semantic HTML enhances accessibility for users with disabilities, including screen reader users. It helps screen readers interpret the content correctly and allows users to navigate and understand the page's structure more effectively.

4. **Styling and Consistency:** Semantic elements offer better styling options. CSS frameworks and stylesheets can be designed to work with semantic tags, ensuring consistent and manageable styling across websites.

5. **Future Compatibility:** Semantic elements are less likely to become obsolete or have their meaning altered in future HTML specifications, ensuring long-term compatibility.

### How many levels of headings are there in HTML?

There are six levels of headings. 
They are denoted by `<h1>` through `<h6>`. `<h1>` represents the highest level, and `<h6>` is the lowest.

### What are some uses for the `<sup>` and `<sub>` elements?

The `<sup>` and `<sub>` elements are used for defining superscript and subscript text, respectively.

- `<sup>` (Superscript): Used for elements that should appear smaller and above the baseline. 

- `<sub>` (Subscript): Used for elements that should appear smaller and below the baseline. 

### When using the <abbr> element, what attribute must be added to provide the full expansion of the term?

When using the `<abbr>` element, the `title` attribute must be added to provide the full expansion or explanation of the abbreviated term. This attribute allows you to specify the full text that should be displayed when users hover over or interact with the abbreviation. It is especially helpful for acronyms and abbreviations, ensuring that users understand the meaning.

For example: 

`<abbr title="Stephee Gee's Final Website">HTML</abbr>`

In this example, when users hover over "HTML," the full expansion "Stephee Gee's Final Website" will be displayed as a tooltip or description.

Sources:

[HTML Text Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)

[HTML Advanced Text Formatting](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)

## Learn CSS

**What are ways we can apply CSS to our HTML?**

- External Stylesheets: This involves creating a separate .css file and linking it to your HTML document using the `<link>` element in the document's `<head>`.

- Internal Stylesheets: You can embed CSS rules within a `<style>` element in the HTML document's `<head>.

- Inline Styles: Apply CSS directly to HTML elements using the `style` attribute.

- CSS Frameworks: Utilize CSS frameworks or libraries like Bootstrap to apply predefined styles and components.

- Using JavaScript: Dynamically apply CSS styles to HTML elements using JavaScript.

**Why should we avoid using inline styles?**

- Lack of Separation: They mix HTML content with styling, breaking the separation of concerns principle.

- Maintainability: Inline styles make it challenging to maintain styles across multiple elements, as each element's style must be updated individually.

- Specificity: Inline styles have high specificity, making it difficult to override them with external or internal styles.

- Limited Reusability: Inline styles are not reusable across multiple elements.

- Accessibility: They can affect the accessibility of a web page, as some screen readers may not interpret inline styles consistently.

**Review the block of code below and answer the following questions:**

```css
h2 {
  color: black;
  padding: 5px;
}
```

In this CSS code:

- **Selector**: The selector is `h2`. It targets all `<h2>` HTML elements on the page.

- **Declarations**: The declarations are enclosed within the curly braces `{ }`. In this case, there are two declarations:

  1. `color: black;`: This declaration sets the text color of the selected `<h2>` elements to black.
  
  2. `padding: 5px;`: This declaration adds a 5-pixel padding around the selected `<h2>` elements.

- **Properties**: The properties are the CSS attributes that you're setting within the declarations. In this code, the properties include `color` and `padding`.

So, the CSS rule targets all `<h2>` elements and defines their text color as black and a padding of 5 pixels.

Source:
[How is CSS Structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)


## Learn JS

### Fundamentals

**What data type is a sequence of text enclosed in single quote marks?**
- A sequence of text enclosed in single quotes represents a data type called a "string" in JavaScript.

**List 4 types of JavaScript operators.**
- There are several types of operators in JavaScript, but here are four common ones:

  1. **Arithmetic Operators**: These operators perform mathematical operations. Examples include addition (+), subtraction (-), multiplication (*), and division (/).

  2. **Comparison Operators**: These operators are used to compare values. Examples include equality (== or ===), inequality (!= or !==), and greater than (>).

  3. **Logical Operators**: Logical operators are used to combine or modify conditions.  Examples include `&& (logical AND)`, `|| (logical OR)`, and `! (logical NOT)`.

  4. **Assignment Operators**: These operators assign values to variables. Examples include = (assignment), += (add and assign), and -= (subtract and assign).

**Describe a real world Problem you could solve with a Function.**
- A real-world problem would be calculating the total cost of items in a shopping cart, including applying discounts and taxes. You can create a JavaScript function, let's call it `calculateTotalCost`, that takes inputs like item prices, quantities, discount codes, and tax rates. This function can apply discounts based on the provided codes, calculate the subtotal, and then add the applicable tax to determine the total cost. 

### Conditionals 


**An if statement checks a ______ and if it evaluates to _______, then the code block will execute.**

- Condition / True
  
  An if statement checks a condition and if the condition evaluates to true, then the code block will execute. If the condition is false, the code block will be skipped. (Booleans)

**What is the use of an else if?**
- The "else if" statement is used to check an additional condition if the preceding "if" condition is false. It allows for creating multiple conditional branches, making it possible to handle various scenarios. If the "if" condition is false, and there's an "else if" condition that evaluates to true, the code block associated with the "else if" will execute.

**List 3 different types of comparison operators.**
- Comparison operators are used to compare values in JavaScript. Here are three different types:
  1. **Equality (==)**: Checks if two values are equal, regardless of their data types. For example, `6 == "6"` evaluates to true.

  2. **Inequality (!=)**: Determines if two values are not equal. It's the opposite of the equality operator. For instance, `8 != 7` is true.

  3. **Greater Than (>) and Less Than (<)**: These operators compare if one value is greater or less than another value. For example, `15 > 5` is true, and `7 < 2` is false.

**What is the difference between the logical operator && and ||?**

- The logical operators "&&" (logical AND) and "||" (logical OR) are used to combine conditions. The main differences are as follows:

  - **&& (logical AND)**: Returns true if both conditions on its left and right sides are true. If either condition is false, the result is false. For example, `true && false` is false.

  - **|| (logical OR)**: Returns true if at least one of the conditions on its left or right side is true. It's true even if just one condition is true. If both conditions are false, the result is false. For instance, `true || false` is true.

Sources:

[JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

[Making Decisions in your Code - Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)



## Bookmark and Review

[Git Commit](https://chris.beams.io/posts/git-commit/)

## Things I want to know more about
![Books](photos/Books.jpg)