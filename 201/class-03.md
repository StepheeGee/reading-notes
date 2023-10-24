# Lists, The Box Model, and Loops

Class Three: 10.25.23

Assignment Prepared: 10.24.23

*The key emphasis of this assignment is to understand the fundamentals of HTML, CSS, and JS, including HTML ordered and unordered lists, the CSS Box Model, and JS arrays, operators, conditionals, and loops*
![Three](photos/three.jpg)
## Learn HTML

### When should you use an unordered list in your HTML document?

Use unordered lists `(<ul>)` in your HTML document when you want to create a list of items that are not necessarily in a specific order or sequence. Unordered lists are typically used for creating bulleted lists.

### How do you change the bullet style of unordered list items?

`list-style-type` Property: 

### When should you use an ordered list vs an unorder list in your HTML document?

Use an ordered list `(<ol>)` when you need to create a list of items that are in a specific sequence or order. Ordered lists are used to represent steps, rankings, instructions, or any information where order matters. Unordered lists are more suitable when the order of items doesn't matter, and you want to create a simple list.

### Describe two ways you can change the numbers on list items provided by an ordered list?

1. Change the Start Value: You can use the start attribute on the `<ol>` element to specify the starting number.

2. You can use the `type` attribute on the `<ol>` element to change the numbering style. The possible values include "1" (decimal, the default), "A" (uppercase letters), "a" (lowercase letters), "I" (uppercase Roman numerals), and "i" (lowercase Roman numerals).


Sources:

[Ordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

[Unordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

## Learn CSS

### Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?



### List and describe the four parts of an HTML elements box as referred to by the box model.

1. **Content**: This is the innermost part of the box and contains the actual content, such as text, images, or other HTML elements. The content area's dimensions are determined by the element's width and height properties.

2. **Padding**: The padding is the space between the content and the element's border. It is defined using the `padding` property and can create extra spacing around the content. Padding helps control the distance between the content and the border.

3. **Border**: The border surrounds the padding and content area, creating a visual boundary for the element. You can set the border's size, style, and color using the `border` property.

4. **Margin**: The margin is the space between the border of an element and the surrounding elements on the web page. Margins help control the layout and spacing between elements. You can define margins with the `margin` property.


Sources:

[The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

## Learn JS


### What data types can you store inside of an Array? 

Sooooooooo many..

  **Numbers:** You can store both integer and floating-point numbers in an array.

  **Strings:** Textual data enclosed in single or double quotes can be elements of an array.

  **Booleans:** You can use `true` or `false` values as array elements.

  **Objects:** Arrays can contain objects, making it possible to create arrays of objects.

  **Functions:** You can store functions within an array just like any other data type.

  **Other Arrays:** Arrays can also contain other arrays, allowing for multi-dimensional arrays.

  **Undefined:** If an element is uninitialized or has no value, it's considered of data type undefined.

  **Null:** Null represents the intentional absence of any object value.

  **Symbols (ES6):** Symbols can be stored in an array, but they are rarely used in this context.

  **Any Data Type:** In JavaScript, you can mix different data types within a single array, allowing for a high degree of flexibility.

### Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?**

 `const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];`

Yes, it's valid. It represents the person's data, which includes information about their name, age, profession, and hobbies. 

In order to access the values stored, you have to index the array. 

### List five shorthand operators for assignment in javascript and describe what they do.


1. **+= (Addition Assignment):**
   - This operator adds the value on the right-hand side to the current value of the variable on the left-hand side and assigns the result to the variable.
   - Example: `x += 5;` is a shorter way of writing `x = x + 5;`.

2. **-= (Subtraction Assignment):**
   - This operator subtracts the value on the right-hand side from the current value of the variable on the left-hand side and assigns the result to the variable.
   - Example: `y -= 3;` is a shorter way of writing `y = y - 3;`.

3. **\*= (Multiplication Assignment):**
   - This operator multiplies the current value of the variable on the left-hand side by the value on the right-hand side and assigns the result to the variable.
   - Example: `z *= 2;` is a shorter way of writing `z = z * 2;`.

4. **/= (Division Assignment):**
   - This operator divides the current value of the variable on the left-hand side by the value on the right-hand side and assigns the result to the variable.
   - Example: `w /= 4;` is a shorter way of writing `w = w / 4;`.

5. **%= (Modulus Assignment):**
   - This operator calculates the remainder of dividing the current value of the variable on the left-hand side by the value on the right-hand side and assigns the result to the variable.
   - Example: `remainder %= 7;` is a shorter way of writing `remainder = remainder % 7;`.



### Read the code below and evaluate the last expression and explain what the result would be and why.

 `let a = 10;
 let b = 'dog';
 let c = false;`

 // evaluate this
 (a + c) + b;


**I actually didn't know the answer to this. So I used ChatGPT to help me.**
[ChatGPT Answer](https://chat.openai.com/share/fde56822-f752-494e-8166-cab1719c50b6)

In the given code, three variables are defined:

1. `a` is assigned the value `10`, which is a number.
2. `b` is assigned the string `'dog'`.
3. `c` is assigned the boolean value `false`.

The last expression to be evaluated is `(a + c) + b`.

1. `a + c` would be evaluated first. The addition of a number (`a`, which is `10`) and a boolean (`c`, which is `false`) will result in arithmetic addition. In JavaScript, `false` is treated as `0` in numeric contexts. So, `a + c` is equivalent to `10 + 0`, which is `10`.

2. The result of the first addition is `10`, which is then concatenated with the string `'dog'` stored in variable `b`. When you use the `+` operator with a string and a non-string (in this case, a number), JavaScript performs type coercion to convert the non-string to a string. So, `10` is converted to the string `'10'`, and then it's concatenated with `'dog'`.

The final result is the string `'10dog'`.

So, the expression `(a + c) + b` would result in the string `'10dog'`.
### Describe a real world example of when a conditional statement should be used in a JavaScript program.

I watched a youtube tutorial that had the real world example of using conditional statements to convert the temperature from Celsius to Farhenheit and vice versa.

In that tutorial, conditional statements were used to determine which conversion formula to use based on whether the user entered a Celsius of Farhenheit temperature. 

### Give an example of when a Loop is useful in JavaScript.

When you need to iterate over an array or a list of items to perform a specific operation on each item. Like counting the books on a bookshelf.


Sources:

[Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

[Operators and Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

[Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

[Loops](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)




## Things I want to know more about
![Books](photos/Books.jpg)