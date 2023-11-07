
<div style="background-color: goldenrod; color: floralwhite; padding: 20px;">
    <h1>Introduction to Persistence with Local Storage</h1>
    <p style="background-color: cadetblue; color: gainsboro; padding: 20px;">
        In today's reading assignment, we will learn about how to use local storage for data.
    </p>
</div>


![13](photos/13.jpg)

<div style="background-color: goldenrod; color: floralwhite; padding: 20px;">
    <h2>Reading</h2>
    <h3 style="background-color: cadetblue; color: gainsboro; padding: 20px;">Local Storage</h3>
</div>


[Local Storage and How To Use It On Websites](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)

 
### 1. Why would a developer use local storage for a web application?

   Developers use local storage for web applications for several reasons:

   - **Persistence:** Local storage provides a way to store data on the client's device, allowing it to persist across sessions and page refreshes. This is useful for saving user preferences, settings, and small amounts of data that need to be available even when the user closes the browser.

   - **Performance:** Accessing data from local storage is typically faster than making repeated requests to a server. This can improve the performance and responsiveness of a web application, especially when dealing with frequently accessed data.

   - **Reduced Server Load:** Storing data locally reduces the load on the server, as the client can handle some data storage and retrieval tasks independently. This is particularly beneficial for applications with a large user base.

   - **Offline Functionality:** Local storage can enable offline functionality by allowing an application to store data and operate without an internet connection. When the connection is restored, the data can be synchronized with the server.

   - **User Experience:** Local storage can enhance the user experience by remembering user preferences, login status, and other personalized data, making the application more user-friendly.

### 2. What information should not be stored in local storage?

   While local storage is a convenient way to store data, there are certain types of information that should not be stored in it:

   - **Sensitive Data:** Avoid storing sensitive user information, such as passwords, personal identification numbers (PINs), or sensitive financial data in local storage. This data should be securely handled on the server-side and not exposed on the client's device.

   - **Large Amounts of Data:** Local storage has limited capacity (usually around 5-10 MB per domain), so it's not suitable for storing large datasets or files. It's best for small to moderately sized data.

   - **Security Tokens:** Tokens used for authentication and authorization, such as access tokens and session tokens, should be stored securely and managed on the server or using secure browser storage mechanisms (e.g., HTTP cookies with secure and HTTPOnly attributes).

### 3. Local storage can store what type of data? How would you convert it to that type before storing?

   Local storage can store data as strings. To store other data types, such as numbers, objects, or arrays, you need to convert them to strings. Common methods for conversion include:

   - **JSON (JavaScript Object Notation):** You can convert JavaScript objects or arrays to JSON strings using `JSON.stringify()` before storing them in local storage. When retrieving the data, you can use `JSON.parse()` to convert the JSON string back into the original object or array.

   Example of storing and retrieving an object:

   ```javascript
   // Storing an object in local storage
   const user = { name: 'John', age: 30 };
   localStorage.setItem('user', JSON.stringify(user));

   // Retrieving the object from local storage
   const storedUser = JSON.parse(localStorage.getItem('user'));
   ```

   By using JSON, you can store and retrieve complex data structures in local storage. Remember to handle potential errors when parsing JSON, as the data may not always be in a valid format.





<div style="background-color: goldenrod; color: floralwhite; padding: 20px;">
    <h2>Bookmark/Skim</h2>
     <h3 style="background-color: cadetblue; color: gainsboro; padding: 20px;">Local Storage Reading</h3>
</div>

[“The Past, Present, and Future of Local Storage for Web Applications”](http://diveinto.html5doctor.com/storage.html)

<div style="background-color: goldenrod; color: floralwhite; padding: 12px;">
    <p>Things I want to know more about</p>
</div>