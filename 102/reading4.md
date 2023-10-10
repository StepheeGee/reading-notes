## HTML (High Level)

###### 10.10.23

###### *Note: Extra spacing including in tags for formatting of this page. Do not include the spacing when coding.*

### What is HTML and why do we use it?

HTML, which stands for HyperText Markup Language, is a standard markup language used for creating the structure and content of web pages. It's the foundation of the vast majority of websites and web applications on the internet. HTML uses a specific syntax and structure to organize and present information in a way that web browsers can interpret and display.

#### Here's why we use HTML:

+ Structure and Content: HTML provides the basic structure for a web page, defining the various elements such as headings, paragraphs, lists, images, forms, and more. It allows you to organize and present content in a logical and hierarchical manner.

+ Semantic Markup: HTML offers semantic elements that convey the meaning or purpose of the content. This helps search engines, accessibility tools, and developers understand and categorize the content, improving SEO and accessibility.

+ Hyperlinks: HTML allows the creation of hyperlinks (using < a > elements) that connect different web pages, enabling users to navigate between pages and access various resources on the web.

+ Multimedia Integration: HTML supports embedding multimedia elements like images, videos, and audio using specific elements (e.g.,image, video, and audio), enriching the web page's content and engagement.

+ Forms and User Input: HTML enables the creation of forms (using < form > and related elements) that allow users to submit data such as text, selections, and files. This is essential for various interactive features like user registration, search bars, and feedback forms.

+ Cross-Platform Compatibility: HTML ensures that web content can be accessed and displayed consistently across different devices and platforms, including desktops, tablets, and smartphones, thanks to its responsive design principles.

+ Standardization and Interoperability: HTML is a standard maintained by the World Wide Web Consortium (W3C). Its adherence to standards ensures that web pages work consistently across browsers and devices, promoting interoperability.

##### *In summary, HTML is a fundamental language used to structure and present content on the web. Its essential features allow us to create a rich, organized, and interactive web experience, making it a core skill for web developers and content creators.*


### What are the 3 main parts of an HTML element?


An HTML element consists of three main parts:

1. Opening Tag:
The opening tag is the first part of an HTML element and marks the beginning of the element. It consists of the element's name enclosed in angle brackets (<>). This part identifies the type of HTML element being used.

2. Content:
The content of an HTML element is the information or text that the element is intended to represent or display. It appears between the opening and closing tags and constitutes the actual content of the element.

3. Closing Tag:
The closing tag is the final part of an HTML element and marks the end of the element. It consists of the element's name preceded by a forward slash (/) and enclosed in angle brackets (<>). This part indicates where the element ends.


### What is it called when you give an element extra information?

When you provide additional information to an HTML element, such as attributes or properties, it is referred to as "element attributes."

In HTML, attributes are used to provide extra information about an element. These attributes are specified within the opening tag of an element and help define characteristics or behaviors related to that element.

Attributes enhance the functionality and behavior of elements, allowing you to specify things like links, styles, event handlers, and more. Different elements support different attributes, and these attributes play a significant role in how elements are displayed and interacted with in a web page.

Attributes that set a value always have:

1. A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
2. The attribute name followed by an equal sign.
3. The attribute value wrapped by opening and closing quotation marks.


### What is a semantic element?

A semantic element in HTML is a specific type of HTML element that provides meaning or context to the content it surrounds, making it clear and understandable to both browsers and developers. Semantic elements convey the structural and logical purpose of the content, improving accessibility, SEO (Search Engine Optimization), and overall code readability.

Semantic elements are designed to reflect the underlying structure of a web page, distinguishing between different sections and components. They help convey the purpose of the content rather than just its appearance.

Examples of semantic elements include: 

< header >: Represents the header of a document or section.

< nav >: Defines a navigation section.

< main >: Specifies the main content area of the page.

< section >: Represents a thematic grouping of content.

< article >: Represents an independent, self-contained piece of content.

< aside >: Defines content that is tangentially related to the surrounding content.

< footer >: Represents the footer of a document or section.

Using semantic elements not only enhances the structure and clarity of the HTML code but also aids in the understanding and interpretation of the content by assistive technologies like screen readers. Additionally, search engines can better interpret and index the content, resulting in improved SEO.

In contrast, non-semantic or generic elements (e.g., < div >, < span >) do not convey any inherent meaning about the content they contain and are often used for layout or styling purposes. However, the use of semantic elements is encouraged to promote clean, accessible, and maintainable code.

Sources:

+ https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/
+ https://balsamiq.com/learn/courses/intro-to-ui-design/what-is-ui-design/
+ https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
+ https://developer.mozilla.org/en-US/docs/Glossary/Semantics
+ https://developer.mozilla.org/en-US/docs/Web/HTML
+ https://developer.mozilla.org/en-US/docs/Web/HTML/Element