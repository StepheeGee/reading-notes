## Forms and JS Events

### The purpose of this reading assignment is to learn how to construct an HTML form, as well as, an introduction to event listeners in JS.

![nine](photos/nine.jpg)
Prepared: 11.1.23
Class 09: 11.2.23

### HTML Forms

#### 1. Why are forms so important in web development?

Forms are crucial in web development for several reasons:

* **Data Collection:** Forms are used to collect data from users, such as login information, search queries, and user-generated content.

* **User Interaction:** They facilitate user interaction with web applications, enabling users to provide input, make selections, and perform various actions.

* **Data Submission:** Forms allow users to submit data to web servers for processing, whether it's submitting a contact form, signing up for a service, or making an online purchase.

* **User Feedback:** They provide a means for users to receive feedback, such as validation messages, error notifications, and success confirmations.

* **Customization:** Forms can be customized to create dynamic and interactive user interfaces, such as surveys, quizzes, and configuration settings.

#### 2. When designing a form, what are some key things to keep in mind when it comes to user experience?


* **Clarity and Simplicity:** Keep forms simple and clear. Use plain language and concise labels. Avoid unnecessary fields.

* **Validation:** Provide real-time validation to help users correct errors as they fill out the form, reducing frustration.

* **Mobile Optimization:** Ensure forms are mobile-responsive for users on various devices. Use touch-friendly elements.

* **Progress Indication:** Show users where they are in the form-filling process and how much is left to complete.

* **Accessibility:** Make forms accessible for users with disabilities by using appropriate labels, error messages, and ARIA attributes.

#### 3. List 5 form elements and explain their importance.


**Text Input:** Allows users to enter short text, like names, emails, or search queries.

**Textarea:** Provides a larger text input area for longer content, such as comments or messages.

**Radio Buttons:** Enables users to select a single option from a list.

**Checkboxes:** Allows users to select multiple options from a list.

**Select (Dropdown):** Offers a dropdown list for users to choose one option from a list.


Sources:

[Your first web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

[How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)

### Learn JS

#### 1. How would you describe events to a non-technical friend?


Events in web development are like triggers that initiate actions in response to user interactions. For example, clicking a button, submitting a form, or moving the mouse can trigger events. Or another example, when you hit the light switch, the light turns on or turns off. 

#### 2. When using the `addEventListener()` method, what 2 arguments will you need to provide?


**Event Type:** This is the type of interaction you want to listen for, like "click," "submit," or "mousemove."

**Event Handler Function:** This is the JavaScript function that should run when the specified event occurs. It defines what should happen in response to the event.

#### 3. Describe the event object. Why is the target within the event object useful?

The event object is a fundamental concept in web development, especially when working with JavaScript to create interactive web applications. It represents an event that has occurred, such as a mouse click, keyboard keypress, or any other user or system interaction with the web page. The event object contains valuable information about the event, which developers can leverage to determine the event's type, location, target, and various attributes.

The "target" property within the event object is exceptionally useful because it identifies the HTML element to which the event is originally dispatched. This means that when a user interacts with a web page, the event object keeps track of which specific element triggered the event. This knowledge is essential for event handling and manipulation in JavaScript. For example, when a user clicks a button on a webpage, the event object can tell you that the target element is that particular button. This information allows developers to respond appropriately by executing specific actions related to that element. It forms the core of event delegation, event listeners, and allows developers to apply dynamic behavior to web applications based on user interactions with different elements on the page. In essence, the "target" property within the event object provides a way to identify and respond to the exact element that initiated the event, making it a crucial tool for enhancing interactivity and user experience in web development.

(Really good summary, credit to ChatGPT)


#### 4. What is the difference between event bubbling and event capturing?

Event bubbling and event capturing are two different phases in the event propagation process:

**Event Bubbling:** In this phase, the innermost element's event is handled first, and then the event bubbles up to the outer elements. It starts at the target element and moves up the DOM tree.

**Event Capturing:** This phase is the reverse of bubbling. The event starts at the outermost element and moves towards the target element.

You can use event bubbling and capturing to control how events are handled on different elements. You can choose whether to capture an event as it moves down from the document root to the target (capturing) or as it bubbles up from the target (bubbling). This gives you fine-grained control over event handling in complex web applications.


Source:

[Intro to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

Bookmark and Review:

[HTML 5](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)

[Event Reference and Listings](https://developer.mozilla.org/en-US/docs/Web/Events)

### Things I want to know more about

Can you use the values gathered from the form to populate a template?
