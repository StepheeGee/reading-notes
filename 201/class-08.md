## CSS Layout

### The purpose of this reading assignment is to learn about CSS layouts such as flexbox!

![eight](photos/eight.jpg)

Prepared: 10.31.23

Class 08: 11.1.23

## Flexbox with CSS


1. **Flexbox is designed for one-dimensional content. Explain what this means:**

   Flexbox is primarily used for laying out content in a single dimension, either horizontally or vertically. It's specifically designed to handle the distribution and alignment of elements along this primary axis, making it well-suited for organizing content within a container along one direction. In contrast, Grid, another layout method in CSS, is designed for two-dimensional layouts where elements can be positioned in both rows and columns.

2. **Explain the difference between the main axis and cross axis:**
   - **Main Axis:** The main axis is the primary axis along which flex items are laid out within a flex container. It corresponds to the direction specified by the `flex-direction` property, which can be either horizontal (row) or vertical (column). Items are placed along this axis based on their order and properties like `justify-content`.
   - **Cross Axis:** The cross axis is perpendicular to the main axis. It's used for alignment and control of items when they wrap or are stretched to fit the container. The alignment of items along the cross axis is determined by properties like `align-items` and `align-content`.

3. **How can using certain properties of flexbox negatively impact accessibility:**
   
   Flexbox, when used inappropriately, can negatively impact accessibility. For example, using excessive nesting or complex flex layouts can make it challenging for screen readers to interpret and convey the content's structure to users with disabilities. It's important to maintain a logical and semantic order of content in the HTML document and ensure that flex layouts enhance, rather than hinder, the overall accessibility of a web page.

4. **What are some advantages of using flexbox over float:**
   - **Easier and more intuitive:** Flexbox provides an easier and more intuitive way to create flexible, one-dimensional layouts compared to the more complex and often hacky float-based layouts.
   - **Automatic equal heights:** Flexbox allows you to create equal-height columns within a container without relying on background colors or JavaScript hacks.
   - **Ordering:** Flexbox allows you to easily reorder items, which can be valuable for responsive layouts.
   - **Dynamic spacing:** With properties like `justify-content` and `align-items`, you can dynamically control the spacing and alignment of elements within a container, making it adaptable to various screen sizes and content.

5. **How does this topic connect with your long-term goals:**

- I'm done with floating! Praise God! Because that was such a fickle method. I'm looking forward to wireframing and creating grids so I can determine the proper placement of my content with the flexbox grid. I see user friendly layouts and responsive design in my future.
   
Sources:

[Learn CSS - Flexbox](https://web.dev/learn/css/flexbox/)

[CSS Layout Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

## Bookmark & Review 
[Learn CSS](https://web.dev/learn/css/layout/)

## Things I want to know more about
How to draw grids so that I can make sure the proper content is in the proper container. 