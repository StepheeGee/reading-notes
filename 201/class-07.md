## HTML Tables and JS Constructor Function

Date Prepared: 10.30.23

Class Six:  *Halloween* 10.31.23

The purpose and emphasis of this reading assignment is to give an introduction to HTML Tables and JS Constructor Function. Basically discussing the theory before implementation.

![Seven](photos/seven.jpg)

## Domain Modeling

### Explain why we need domain modeling.

Domain modeling is a critical step in the software development process, particularly when designing and building complex systems. It involves creating an abstract representation of the problem domain, which typically consists of the real-world concepts, entities, relationships, and rules relevant to the software's purpose. Here's why domain modeling is essential:

1. **Common Understanding**: Domain modeling helps establish a common understanding between stakeholders, including developers, designers, domain experts, and clients. It provides a shared vocabulary and conceptual framework that ensures everyone is on the same page.

2. **Problem Abstraction**: It abstracts complex real-world problems into a structured, manageable format. This simplification aids in breaking down large, intricate issues into smaller, more solvable components.

3. **Requirements Clarification**: Domain models help clarify and refine the requirements of the software system. By modeling the domain, you can identify and address ambiguities, contradictions, and gaps in the initial requirements.

4. **Design Guidance**: The domain model serves as a blueprint for the software's architecture and design. It guides the creation of data structures, classes, and modules, ensuring that the software aligns with the domain's underlying structure.

5. **Complexity Management**: Complex domains can be challenging to understand and implement correctly. Domain modeling provides a structured approach to managing complexity by breaking it into understandable parts.

6. **Code Reusability**: A well-defined domain model encourages code reuse. It allows you to create reusable components or classes that can be used across different parts of the software.

7. **Maintenance and Evolution**: Over time, software systems must adapt to changing business needs. A clear domain model makes it easier to modify, extend, or refactor the software without causing unexpected side effects.

8. **Communication Tool**: Beyond the development team, a domain model can be a valuable communication tool with non-technical stakeholders. It helps explain the system's behavior, data, and functionality in a comprehensible way.

9. **Testing and Validation**: Domain models facilitate test design and validation. Testers can use the model to create test cases that validate the software's compliance with the domain's rules.

10. **Documentation**: Domain models act as documentation for the software. They provide insight into the structure and behavior of the system, which can be valuable for future maintenance or knowledge transfer.

In summary, domain modeling is a crucial practice that contributes to the success of software development projects. It promotes clarity, alignment with business goals, maintainability, and effective communication, ensuring that software systems are built to meet the intended needs and can evolve as those needs change over time.

Source: ChatGPT

## HTML Table Basics

### Why should tables not be used for page layouts?

It's considered a bad practice when you use tables for page layouts. Some of the reasons it's considered a bad practice are as follows:

* It can cause accessibility issues, especially for screen readers. It can confuse them because they have tools that are designed to read a semantic structure. But when you use a table instead, it misrepresents the content.

* Tables can also make the layout too rigid and challenging to maintain. It could also interfere with the responsive design. 

* This bad practice could also affect the performance of the webpage. Tables can increase the size of your document, which can affect loading times. 

### List and describe 3 different semantic HTML elements used in an HTML `<table>`.

Three semantic HTML elements that can be used within an HTML `<table>` to provide additional meaning and structure are:

1. `<caption>`: The `<caption>` element is used to provide a title or a brief description for the entire table. It is typically placed as the first child of the `<table>` element and is visually displayed above or below the table, depending on the CSS styling. The `<caption>` element helps clarify the purpose of the table.

   ```html
   <table>
     <caption>Monthly Sales Report</caption>
     <!-- Table content here -->
   </table>
   ```

2. `<thead>`: The `<thead>` element groups the header content in a table, typically containing one or more rows with `<th>` (table header) elements. This grouping allows screen readers to identify and announce header cells, making data tables more accessible.

   ```html
   <table>
     <thead>
       <tr>
         <th>Day</th>
         <th>Product</th>
         <th>Sales</th>
       </tr>
     </thead>
     <!-- Table body and footer here -->
   </table>
   ```

3. `<tfoot>`: The `<tfoot>` element groups the footer content in a table, typically containing one or more rows with summary or footer information. It's often used for providing totals or other summary data.

   ```html
   <table>
     <!-- Table body here -->
     <tfoot>
       <tr>
         <td colspan="2">Total Sales</td>
         <td>$10,000</td>
       </tr>
     </tfoot>
   </table>
   ```


## Introducing Constructors

### What is a constructor and what are some advantages to using it?

**Constructor**:
A constructor is a special function in object-oriented programming languages, including JavaScript, used to create and initialize objects of a particular class or type. It acts as a blueprint for creating objects, defining the initial state and behavior of those objects. In JavaScript, constructors are often used with the `new` keyword to create instances of objects.

**Advantages of Using Constructors**:
1. **Reusability**: Constructors enable you to create multiple instances of objects with the same structure and behavior. This promotes code reusability, reducing the need to rewrite the same code for similar objects.

2. **Initialization**: Constructors allow you to set initial values or states for object properties when the object is created. This ensures that objects start with the desired attributes.

3. **Encapsulation**: Constructors can be used to encapsulate an object's data and methods, making it easier to manage and maintain complex objects. This is a fundamental concept in object-oriented programming.

4. **Consistency**: Constructors provide a consistent way to create objects, making the code more predictable and easier to understand.

5. **Inheritance**: Constructors can be used as the basis for inheritance, where one class (constructor) can be extended to create a more specialized class with additional properties and methods.

6. **Namespacing**: Constructors help avoid naming conflicts by creating a separate scope for object properties and methods. This helps organize and manage code more effectively.


### How does the term `this` differ when used in an object literal versus when used in a constructor?

**Difference in the Use of `this`**:

1. **Object Literal**:
   - In an object literal, `this` refers to the object itself.
   - It is used to access and manipulate the object's properties and methods.

   Example:
   ```javascript
   const myObject = {
     property: 'some value',
     method: function () {
       console.log(this.property); // 'some value'
     }
   };
   ```

2. **Constructor Function**:
   - In a constructor function, `this` refers to the newly created instance of the object.
   - It is used to set and access properties specific to that instance.

   Example:
   ```javascript
   function MyClass(property) {
     this.property = property;
     this.method = function () {
       console.log(this.property);
     };
   }
   const instance = new MyClass('some value');
   instance.method(); // 'some value'
   ```

In the constructor example, `this` inside the constructor function refers to the instance being created. It allows you to set instance-specific properties. When you create multiple instances using the constructor, each instance has its own set of properties and methods.

Using constructors and `this` provides a way to create objects with distinct properties and methods, facilitating object-oriented programming and the creation of multiple instances with varying attributes.

Source: ChatGPT

## Object Prototypes Using A Constructor

### Explain prototypes and inheritance via an analogy from your previous work experience.


**Analogy: Legal Documents, Templates, and Prototypes**

In my previous role as an attorney, you dealt with legal documents, contracts, and agreements. Think of these legal documents as objects in JavaScript, each with specific properties, terms, and conditions.

1. **Prototypes**:
   In the legal world, you have "template documents" or "standard contracts." These templates define the structure, legal language, and common clauses for various types of agreements. For example:
   - A "Sales Agreement Template" might specify the standard terms for buying and selling products.
   - An "Employment Contract Template" outlines the common clauses for employment relationships.
   - A "Lease Agreement Template" defines the structure for rental agreements.

2. **Inheritance**:
   When you work on specific legal cases, you use these template documents as a starting point. Instead of drafting every contract or agreement from scratch, you follow these steps:

   - You begin with the relevant template document. For instance, if you're creating a sales agreement for a client, you start with the "Sales Agreement Template."
   - Then, you customize the document by adding or modifying specific clauses, terms, and conditions to suit the unique needs of your client or the specific case.
   - The customized document now serves as the legal agreement for that case, inheriting the standard structure and clauses from the template.

**Why This Analogy Works**:

- **Prototypes**: In this context, template documents represent the common, shared elements of legal agreements, much like prototypes in JavaScript define shared properties and methods for objects.

- **Inheritance**: Inheritance mirrors how you customize a template document to address the specific requirements of each legal case. Similarly, in JavaScript, you create new objects based on prototypes, inheriting shared properties and methods while tailoring them to specific scenarios.

This legal analogy demonstrates how prototypes and inheritance are fundamental concepts in JavaScript, allowing you to create objects with shared characteristics (prototypes) and adapt them to address unique situations, much like customizing legal documents from standard templates in a legal practice.

Sources: 

[ChatGPT](chat.openai.com)

[Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)

[HTML Table Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

[Introducing Constructors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)

[Object Prototypes](https://ui.dev/beginners-guide-to-javascript-prototype)

### Bookmark and Review

[HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)

### Things I Want To Know More About