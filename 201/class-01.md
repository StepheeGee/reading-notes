# Class One

## Reading Notes
10.23.23

The key emphasis, of this assignment, is on understanding the core concepts and knowing how to locate examples within the text. Essentially, the goal of the assignment is to become proficient in efficient reading and comprehension.
![One](photos/one.jpg)

### Section I: Getting Started

#### **A. Compose a short poem describing how HTTP sends data between computers.**

*This is not an original poem. It's ChatGPT generated.*

    HTTP, the language of the web, is the key,
    To send data 'cross the net, let's break it down, you see.
    When you type a URL and hit that enter key,
    HTTP's the go-between, making the web's magic spree.

    It starts with a request, you want a page to view,
    Your browser talks to servers, and this is what it'll do:
    Sends a GET request, like "Hey, give me this, it's true,"
    To the web server out there, with the page you're due.

    The server then responds, with the requested page in hand,
    Using HTTP as the plan, it's really quite grand.
    It wraps the data up in a response so grand,
    And sends it back to you, to display and understand.

    So, HTTP's the messenger, from browsers to servers, it's clear,
    It helps us all connect in the digital sphere.
    Sending data 'cross computers, far and near,
    HTTP's the backbone of the web, have no fear.



#### **B. Describe how HTML, CSS, and JS files are “parsed” in the browser.**

In a web browser, HTML, CSS, and JavaScript files are parsed in distinct ways as part of the process that ultimately renders a webpage. Here's a brief overview of how each of these file types is parsed:

1. **HTML (Hypertext Markup Language):**
   - When a browser receives an HTML file, the parsing process begins.
   - The HTML parser reads the document from top to bottom, identifying tags and their attributes.
   - It creates a Document Object Model (DOM) tree, which represents the structure of the HTML document.
   - The DOM tree is used for rendering the page and responding to JavaScript interactions.

2. **CSS (Cascading Style Sheets):**
   - After parsing the HTML and creating the DOM tree, the browser encounters CSS files.
   - The CSS parser processes the stylesheet to determine how elements in the DOM should be styled.
   - It computes the final styles for each element based on CSS rules and the DOM hierarchy.
   - The result is a Render Tree, which contains information about how each element should be displayed on the screen.

3. **JavaScript (JS):**
   - When the browser encounters a JavaScript file or script tag in the HTML, it initiates the parsing of JavaScript.
   - The JavaScript engine compiles the script into bytecode and executes it.
   - During this process, it interacts with the DOM and the Render Tree, allowing dynamic and interactive behavior.
   - JavaScript can make further requests to fetch additional resources, update the DOM, or change styles.

   The parsing process can be asynchronous, especially for JavaScript and external resources, as web pages often include various assets like images, fonts, and more. 

   The parsing of HTML, CSS, and JavaScript is typically fast and parallelized in modern browsers to ensure efficient loading and rendering of web pages.


#### **C. How can you find images to add to a Website?**

1. To select an image, visit Google Images and find an image that you like. 

2. Once you've found the desired image, click on it to enlarge the view.

3. Right-click the image (Ctrl + click on a Mac), select "Save Image As..." and designate a secure location for saving your chosen image. Alternatively, copy the image's web address from your browser's address bar for future reference.

4. Please be aware that many images on the web, including those on Google Images, are protected by copyright. To lower the risk of infringing on copyrights, you can use Google's license filter. Click on the "Tools" button and then select "Usage rights" from the resulting options below. Opt for "Creative Commons licenses" as your choice.

#### **D. How do you create a String vs a Number in JavaScript?**

In JavaScript, you can create both strings and numbers in various ways. Here's how you can create them:

**Creating a String:**
1. **Using Quotes:** You can create a string by enclosing text in single (' ') or double (" ") quotes. 

2. **Using Template Literals:** Template literals, enclosed in backticks (``), are useful for creating multiline strings or embedding expressions.

**Creating a Number:**
1. **Integer or Float:** You can create a number by directly assigning an integer or floating-point value to a variable. 

2. **Using Mathematical Expressions:** Numbers are often the result of mathematical operations or expressions.

3. **Using Number Constructors:** You can create numbers using the `Number()` constructor.


#### **E. What is a Variable and why are they important in JavaScript?**

Variables are named containers that store values. In JavaScript, variables are created using the `let`, `const`, or `var` keyword, followed by a variable name.

Variables are important for the following reasons: 


1. **Data Storage:** Variables allow you to store and manage different types of data, including numbers, strings, objects, arrays, and more. This makes them essential for working with information and manipulating it within your programs.

2. **Data Manipulation:** Variables enable you to perform operations on data. You can change the value of a variable, combine variables, and use them in calculations or as part of more complex logic.

3. **Dynamic Behavior:** JavaScript is a dynamically typed language, which means that variables can hold different types of data during their lifetime. This flexibility allows you to write versatile code that adapts to different situations.

4. **Reuse:** You can reuse and reference values by storing them in variables. This makes your code more concise and easier to read, as you can refer to a variable name instead of repeating the same value multiple times.

5. **Scope:** Variables have scope, which means they can be local (limited to a specific part of your code) or global (accessible throughout your program). This helps in managing data and controlling access to it.

6. **Interactivity:** Variables play a significant role in enabling user interactions in web applications. They can store input data, track user progress, and modify the content of web pages based on user actions.

7. **Control Flow:** Variables are vital for implementing control flow mechanisms such as loops and conditional statements. You use variables to control the logic of your code and make decisions based on the stored data.

8. **Functionality:** Variables are used in defining functions and passing data between functions. They act as parameters and store return values from functions.

9. **State Management:** Variables are essential for maintaining the state of your application. They help you keep track of the current state and data changes, making it easier to manage complex applications.


Sources:

[How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

[JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

[Website Design and Process](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)


### Section II: Intro to HTML

Sure, let's break down your questions:

**A. What is an HTML attribute?**
   - An HTML attribute is a property or characteristic that provides additional information about an HTML element. Attributes are used to modify, configure, or provide metadata for elements. They are always specified in the opening tag of an element, using the attribute name followed by an equal sign and the attribute value enclosed in double or single quotes. Attributes allow you to control how an element behaves or to supply extra information. For example, the `src` attribute in an `<img>` tag specifies the image source file.

**B. Describe the Anatomy of an HTML element:**
   - An HTML element consists of the following parts:
     - **Opening Tag:** This is the first part of an element and specifies the type of element it is. It is enclosed in angle brackets, e.g., `<element>`.
     - **Attributes:** Some elements have attributes that provide additional information about the element. Attributes are optional but can affect the element's behavior or appearance.
     - **Content:** This is the actual content enclosed by the element. It could be text, other elements, or both.
     - **Closing Tag:** For most elements, there is a closing tag that is identical to the opening tag but includes a forward slash before the element name, e.g., `</element>`.
     - **Self-Closing Tags:** Some elements, like `<img>` and `<br>`, don't have a closing tag and are self-closed with a forward slash before the closing angle bracket, e.g., `<img />`.

**C. Difference between `<article>` and `<section>` element tags:**
   - `<article>` and `<section>` are both HTML5 structural elements used for organizing content on a web page, but they serve different purposes:
     - `<article>`: This element is used to define a self-contained, independently distributable content piece. It represents content that could stand alone and still make sense. Examples include blog posts, news articles, or forum posts.
     - `<section>`: The `<section>` element is used to group related content together. It doesn't have to make sense when taken out of context and doesn't necessarily imply that the content is a standalone article. It's more for structuring content within a page or document.

**D. Elements included in a "typical" website:**
   - A typical website can include a wide range of HTML elements depending on its purpose. Some common elements include:
     - `<html>`: The root element that wraps all content.
     - `<head>`: Contains metadata and links to external resources.
     - `<title>`: Sets the title displayed in the browser tab.
     - `<meta>`: Provides metadata, including character set and description.
     - `<link>`: Links to external stylesheets or resources.
     - `<script>`: Embeds JavaScript code or links to external scripts.
     - `<body>`: Contains the visible content of the page.
     - `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`: Structural elements for organizing content.
     - `<div>`: A generic container for grouping content.
     - `<p>`, `<h1>`, `<ul>`, `<ol>`, `<li>`, `<a>`, `<img>`, and more: Elements for creating text, lists, links, images, and other content.

**E. How does metadata influence Search Engine Optimization (SEO)?**
   - Metadata, such as the `<meta>` tags in the `<head>` section of an HTML document, provides information about the content of a webpage. Metadata influences SEO in several ways:
     - **Title Tags**: The `<title>` tag provides the title of the webpage displayed in search engine results. A well-optimized title tag can improve click-through rates.
     - **Meta Descriptions**: The `<meta name="description">` tag provides a brief description of the page's content. A compelling and relevant meta description can encourage users to click on your page in search results.
     - **Keywords**: While not as influential as in the past, keywords specified in the `<meta name="keywords">` tag can still be used by some search engines.
     - **Other Meta Tags**: Various other meta tags can provide information about character encoding, authorship, and more, which can indirectly impact SEO.

**F. How is the meta HTML tag used when specifying metadata?**
   - The `<meta>` tag is used in the `<head>` section of an HTML document to specify metadata. It typically includes an attribute `name` or `property` to indicate the type of metadata and a `content` attribute to provide the actual content or value. 
   The `charset` attribute ensures that the browser interprets the text correctly, and the `description` meta tag provides a concise description for search engines.

Sources:

[Getting Started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

[HTML Document Structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)

[Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)


### Section III: Miscellaneous

#### **A. How to start to design a Website:**

#### What is the first step to designing a Website?

    To design a website effectively, the first step is project ideation, during which you need to address several essential questions:

   1. What exactly do I want to accomplish?
   2. How will a website help me reach my goals?
   3. What needs to be done, and in what order, to reach my goals?

#### What is the most important question to answer when designing a Website?

      The most important question to answer during website design is the first one: "What exactly do I want to accomplish?" The answer to this question, indicate your goals. Your goals set the direction and purpose of the website, influencing all other design decisions. Without a clear understanding of your goals, it's challenging to create a website that effectively fulfills your intentions and serves its intended audience.

Note: List and prioritize your goals.

Source:
[Design Website Info](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Thinking_before_coding)

#### **B. HTML - Semantics**

#### Why should you use an h1 element over a span element to display a top level heading?

Using an `h1` element over a `span` element to display a top-level heading is beneficial for several reasons:

1. **Semantic Structure:** The `h1` element has semantic meaning as it represents a top-level heading, typically the main title or heading of a section or page. Using `h1` provides a clear and meaningful structure to your content, making it more accessible and understandable for both users and search engines.

2. **SEO (Search Engine Optimization):** Search engines give importance to the content within `h1` tags when determining the topic and relevance of a webpage. Using `h1` helps search engines understand the primary focus of your content, potentially improving your search rankings.

3. **Accessibility:** Assistive technologies like screen readers rely on semantic HTML to provide meaningful information to users with disabilities. Using `h1` ensures that screen readers correctly identify and announce the main heading, enhancing accessibility.

#### What are the benefits of using semantic tags in our HTML?

The benefits of using semantic tags in HTML, in general, include:

1. **Improved SEO:** Semantic HTML tags help search engines better understand the content and structure of your webpage, potentially leading to improved search rankings.

2. **Enhanced Accessibility:** Semantic tags are essential for creating accessible web content. They provide a clear structure that can be interpreted by assistive technologies, making your website more inclusive for users with disabilities.

3. **Maintainability:** Semantic HTML makes your code more organized and easier to maintain. It enhances code readability and allows developers to quickly grasp the structure and purpose of different elements.
Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes.

4. **Consistency:** Semantic tags help create consistent and standardized web content, making it easier for different browsers and devices to render your webpages correctly.

5. **It's Easy:** Semantic naming mirrors proper custom element/component naming.

Source:
[Mozilla on Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

#### **C. Miscellaneous JavaScript**

#### What is JavaScript?
JavaScript in the browser is essential for enhancing web interactivity and functionality. 

Two common use cases that require JavaScript in the browser are:

1. **Form Validation:** JavaScript can be used to validate user inputs in HTML forms before submission. It allows you to check if the provided data meets specific criteria, such as required fields, correct email formats, or valid phone numbers. JavaScript can provide real-time feedback to users, preventing them from submitting incorrect or incomplete information.

2. **Dynamic Web Content:** JavaScript enables dynamic changes to web content without requiring a full page reload. This can include interactive features like image sliders, pop-up modals, expanding and collapsing sections, and dynamic data updates from web servers. JavaScript allows web pages to respond to user actions or data changes, creating a more engaging user experience.

#### To add JavaScript to an HTML document, you have several options:

1. **Inline Script:** You can include JavaScript directly within an HTML document using the `<script>` element. Place the JavaScript code between the opening `<script>` tag and the closing `</script>` tag in the HTML document's `<head>` or `<body>` section.

2. **External Script:** You can link to an external JavaScript file using the `<script>` element's `src` attribute. This is the preferred method for larger JavaScript codebases, as it promotes code separation and reusability.

3. **Event Listeners:** You can use JavaScript to attach event listeners to HTML elements, specifying what should happen when certain events occur. This allows you to keep your JavaScript separate from your HTML and create more interactive and responsive web applications.

Source:
[Mozilla on JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

## Things I want to know more about
![Books](photos/Books.jpg)