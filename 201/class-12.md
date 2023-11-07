<div style="background-color: midnightblue; color: palevioletred; padding: 20px;">
    <h1>Chart.js & Canvas</h1>
</div>
<div style="background-color: mediumvioletred; color: mistyrose;">
    <p>The purpose of this assignment is to discuss advanced animation with JS. </p>
</div>

![Class12](photos/twelve.jpg)

Class 12: 11.7.23

Prepared: 11.6.23


<div style="background-color: midnightblue; color: palevioletred; padding: 20px;">
    <h2>Reading</h2>
</div>

<div style="background-color: mediumvioletred; color: mistyrose;">
    <h2>Javascript Canvas</h3>
</div>

### 1. What does the `<canvas>` allow a developer to acheive?

The `<canvas>` element that allows you to draw 2D graphics using JavaScript.

It requires the width and height that specify the size of the canvas.

### 2. What is the importance of the closing `</canvas>` tag?

The `<canvas>` element requires the closing tag `</canvas>`. Any content between the opening and closing tags is fallback content that will display only if the browser doesn’t support the `<canvas>` element. 

### 3. Explain what the `getContext()` method does.

The `<canvas>` element features the `getContext()` method that returns a render context object.

The `getContext()` takes one argument which is the type of context. 

Source:
[Javascript Canvas](https://www.javascripttutorial.net/web-apis/javascript-canvas/)

<div style="background-color: mediumvioletred; color: mistyrose;">
    <h2>Documentation</h3>
</div>

### 1. What is Chart.js and how it can be brought into your project?

**Chart.js** is a JavaScript library for creating interactive, visually appealing charts and graphs on web pages. It's an open-source library that allows you to easily add data visualization to your web applications. You can use Chart.js to create various types of charts, such as line charts, bar charts, pie charts, and more. To bring Chart.js into your project, you can follow these steps:

   - **Download:** You can download the Chart.js library from the [Chart.js website](https://www.chartjs.org/), and then include it in your project by linking to the JavaScript file in your HTML.

   - **CDN:** You can include Chart.js directly from a Content Delivery Network (CDN) in your HTML file. For example:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
     ```

   - **Package Manager:** If you're using a package manager like npm or yarn, you can install Chart.js as a package and then import it into your JavaScript code.

   - **Using a Framework:** If you're using a JavaScript framework like Angular, React, or Vue.js, there are specific packages or bindings available for integrating Chart.js seamlessly into these frameworks.

### 2. List 3 different Chart types you can create using Chart.js.

Three different chart types you can create using Chart.js are:

   - **Line Chart:** A line chart is used to display data points as a series of data points connected by straight lines. It's suitable for showing trends over time or continuous data. 

   - **Bar Chart:** A bar chart is used to represent data with rectangular bars. It's commonly used for comparing data between different categories or groups.

   - **Pie Chart:** A pie chart is a circular chart divided into slices to represent data as a proportion of a whole. It's useful for showing the distribution of data as parts of a whole.

Sources:

[Chart.js Documentation](http://www.chartjs.org/docs/)

ChatGPT

<div style="background-color: mediumvioletred; color: mistyrose;">
    <h2>Animated Charts</h3>
</div>

### 1. What are some advantages to displaying data via a chart over a table?

   - **Visual Clarity:** Charts provide a visual representation of data that can make it easier for users to understand complex information at a glance. Patterns, trends, and relationships in the data can be more immediately apparent in a chart compared to a table.

   - **Simplicity:** Charts simplify complex data by distilling it into a graphical format, making it more accessible to a broader audience, including those who may not be familiar with the raw data.

   - **Comparative Analysis:** Charts allow for easy comparison between different data points. For example, bar charts can show the relative sizes of different categories, and line charts can display trends over time.

   - **Engagement:** Charts can make data more engaging and visually appealing. This can be particularly useful in presentations, reports, and dashboards where the goal is to capture and maintain the audience's attention.

   - **Storytelling:** Charts can be used to tell a story or convey a message. A well-designed chart can emphasize key data points and insights, helping to support the narrative you want to convey.

   - **Interactive Features:** Many chart libraries, including Chart.js, provide interactive features that allow users to hover over data points for additional information or click to drill down into details.

### 2. How could Chart.js aid your previously created applications visually?

   - **Enhanced Data Visualization:** I can enhance the visual representation in the Odd-Ducks lab by creating a chart for the data, once the view results button is activated. 

   Other ideas that Chat GPT suggests:

   - **Interactive Dashboards:** You can use Chart.js to build interactive dashboards that provide users with real-time data insights. Users can interact with the charts, apply filters, and customize their view of the data.

   - **Improved User Experience:** Incorporating charts into your applications can improve the user experience by presenting data in a more visually appealing and user-friendly way. Users can quickly grasp information and make data-driven decisions.

   - **Data Trends and Patterns:** Chart.js can help identify trends, patterns, and anomalies in your data, making it easier to extract valuable insights and make informed decisions.

   - **Customization:** Chart.js allows for a high degree of customization, enabling you to adapt the visual style of charts to match your application's design and branding.

   - **Responsive Design:** Chart.js charts can be designed to be responsive, ensuring that they adapt to various screen sizes and devices, which is essential for modern web applications.


Sources:

[Easily Create Stunning Animated Charts with Chart.js](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)

ChatGPT

<div style="background-color: midnightblue; color: palevioletred; padding: 20px;">
    <h2>Bookmark & Review</h2>
</div>

[Drawing Shapes With Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

[Applying Style and Colors - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)

[Drawing Text - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)

<div style="background-color: midnightblue; color: palevioletred; padding: 20px;">
    <h6>Things I want to know more about...</h6>
</div>