# REST: Asynchronous Code and Third Party APIs

## Class 6: 12.4.23

Prepared 12.2.23

**Summary/Statement:** This assignment explores articles discussing the concept of REST (Representational State Transfer) and its application in building effective teams. It also includes tasks related to understanding REST concepts, obtaining API keys, and their relevance to upcoming assignments.

### Reading: What Google Learned From Its Quest to Build the Perfect Team

[What Google Learned from its Quest to Build the Perfect Team](https://www.google.com/amp/mobile.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.amp.html)

1. **To what extent did psychological safety impact your previous work experience?**  
   - My previous work experience was significantly impacted by psychological safety. It fostered an environment where team members felt comfortable taking risks, sharing ideas, and engaging in open discussions without fear of ridicule or retribution. This led to increased collaboration, creativity, and overall job satisfaction.

2. **How does this article inform your approach to working with others moving forward?**  
   - This article reinforces the importance of psychological safety in fostering effective teamwork. Moving forward, I aim to prioritize creating an inclusive and safe environment where team members feel valued, respected, and encouraged to voice their opinions, fostering a culture of openness and collaboration.

### Reading: How I explained REST to my brother

[How Ryan Tomayko Explained REST to his brother](https://gist.github.com/brookr/5977550)

3. **Who is Roy Fielding?**  
   - Roy Fielding is a computer scientist known for his significant contributions to the creation of the HTTP protocol and for formulating the REST architectural style.

4. **Why don’t the techniques that we use in this class work well when we need to be able to talk to all of the machines in the world?**  
   - The techniques taught in the class might not be sufficient for communication with all machines globally due to scalability limitations, potential security vulnerabilities, and the need for standardized protocols that can accommodate diverse systems and networks across the world.

5. **What is the HTTP protocol that Fielding and his friends created?**  
   - Roy Fielding and his colleagues created the Hypertext Transfer Protocol (HTTP).

6. **What does a GET do?**  
   - The GET request in HTTP retrieves data or resources from a specified server or endpoint.

7. **What does a POST do?**  
   - The POST request in HTTP submits data to be processed to a specified server or endpoint.

8. **What does PUT do?**  
   - The PUT request in HTTP sends data to update or replace a resource at a specific server or endpoint.

9. **What does PATCH do?**  
   - The PATCH request in HTTP modifies or partially updates a resource at a specified server or endpoint.

### API Keys

10. **[Geocoding API](https://locationiq.com/): Did you get your API key?**  
    - Yes

11. **[Weather Bit API](https://www.weatherbit.io/): Did you get your API key?**  
    - Yes

12. **[Yelp API Docs](https://docs.developer.yelp.com/reference/v3_business_search): Did you get your API key?**  
    - Yes

13. **[The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction): Did you get your API key?**  
    - Yes


### Things I want to know more about

### Notes

<details>
<summary>Fetch API</summary>


### API (Application Programming Interface):
An API (Application Programming Interface) is a set of rules, protocols, and tools that allows different software applications to communicate with each other. It defines how different components of software should interact. In the context of web development, an API often refers to a web API, which exposes certain functionalities or data of a system to be accessed by other software applications.

### Fetch API:
The Fetch API is a modern JavaScript interface used for making network requests (such as HTTP requests) in web browsers or Node.js environments. It provides a simpler and more powerful way to fetch resources asynchronously across the network. It uses Promises to handle responses and is commonly used to retrieve data from a server or API.

### Syntax of Fetch:
The `fetch()` function is used to initiate a network request. It takes at least one argument, the URL from which to fetch the resource. It returns a Promise that resolves to the `Response` object representing the response to the request.

### Promise:
A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It has three states: pending (initial state), fulfilled (successful completion), or rejected (failure). A Promise can be chained with `.then()` and `.catch()` methods to handle the success or failure of an asynchronous operation.

### Why `fetch` has no return:
The `fetch()` function itself returns a Promise, not the actual data. The Promise resolves with a `Response` object, which needs to be processed further using methods like `.json()`, `.text()`, etc., to extract the actual data from the response.

### Where it's fetching from:
In the `fetch()` function, the URL provided as an argument specifies the location from which the data should be fetched. In your provided code, `fetch("https://pokeapi.co/api/v2/pokemon/pikachu")` is fetching data about the Pokémon named Pikachu from the PokeAPI, a public API that provides information about Pokémon.

### Summary:
- An API defines how different software applications should interact.
- Fetch API is a modern JavaScript interface for making network requests asynchronously.
- `fetch()` syntax initiates a network request and returns a Promise.
- Promises handle asynchronous operations and provide a way to work with asynchronous code more easily.
- `fetch()` fetches data from a specified URL, and the response is handled using Promises.

</details>

<details>
<summary>Explanation of class warmup</summary>


```javascript
function getPokemon() {
```
- `function getPokemon() {` defines a function named `getPokemon`.

```javascript
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
```
- `fetch()` initiates a network request to the specified URL (`https://pokeapi.co/api/v2/pokemon/pikachu`) using the Fetch API.

```javascript
    .then(response => {
```
- `.then()` is a Promise method that handles the successful resolution of the previous promise (the `fetch` operation). It takes a callback function that receives the resolved value (in this case, the response from the Fetch request) as an argument.

```javascript
      if (!response.ok) {
```
- `response.ok` is a property of the `Response` object that checks if the response was successful (HTTP status code in the range 200-299). If it's `false`, it means there was an error or the request was not successful.

```javascript
        throw new Error('Network response was not ok.');
```
- `throw new Error()` creates a new `Error` object and throws an error. This stops the execution of the Promise chain and jumps to the next `catch()` block.

```javascript
      return response.json();
```
- `response.json()` is a method that reads the response body and parses it as JSON. It returns another Promise that resolves with the parsed JSON data.

```javascript
    })
    .then(data => {
```
- Another `.then()` block to handle the resolved Promise from the previous `.then()`. It receives the parsed JSON data as the argument (`data`).

```javascript
      console.log(data.abilities);
```
- `console.log(data.abilities);` logs the `abilities` property of the retrieved Pokémon data to the console.

```javascript
    })
    .catch(error => {
```
- `.catch()` is a Promise method used to handle errors or rejected promises in the Promise chain.

```javascript
      console.error("Error occurred: " + error.message);
```
- `console.error("Error occurred: " + error.message);` logs the error message to the console if an error occurs during the fetch request or JSON parsing.

```javascript
    });
}
```
- The end of the `getPokemon()` function definition.

### Summary:
- `fetch()` initiates a network request to the PokeAPI.
- `.then()` and `.catch()` are Promise methods used to handle the success or failure of the request.
- `response.ok` checks if the request was successful based on the HTTP response status.
- `.json()` parses the response body as JSON.
- `console.log()` and `console.error()` are used to log information to the console for debugging purposes.

</details>

<details>
<summary>What is an asynchronous function</summary>

An asynchronous function in JavaScript is a function that operates asynchronously, meaning it doesn't block the execution of code while waiting for a particular operation to complete. Asynchronous functions are commonly used when dealing with tasks that might take some time to finish, such as network requests, file I/O, or waiting for a timer.

### Characteristics of Asynchronous Functions:

1. **Non-blocking:** Asynchronous functions allow the JavaScript runtime to continue executing other code while waiting for asynchronous operations to complete. This prevents the entire program from pausing and waiting for each operation to finish before moving to the next task.

2. **Promises or Callbacks:** Asynchronous functions typically use mechanisms like Promises, callbacks, or async/await syntax to manage asynchronous tasks and handle their eventual completion or failure.

3. **Handling Asynchronous Operations:** Asynchronous functions allow developers to perform tasks that may involve delays (e.g., fetching data from a server) without freezing the entire application.

### Examples of Asynchronous Functions:

#### Using Callbacks:
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData(response => {
  console.log(response); // Output after 1 second: 'Data received'
});
```

#### Using Promises:
```javascript
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}

fetchData().then(response => {
  console.log(response); // Output after 1 second: 'Data received'
});
```

#### Using Async/Await (ES6+):
```javascript
async function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}

async function getData() {
  const response = await fetchData();
  console.log(response); // Output after 1 second: 'Data received'
}

getData();
```

### Benefits of Asynchronous Functions:

- Improve application performance by allowing other tasks to run concurrently.
- Prevents blocking the main thread, which keeps the user interface responsive.
- Facilitates handling I/O operations, network requests, timers, etc., without halting the execution of other code.

Understanding and utilizing asynchronous functions effectively is crucial in modern JavaScript development, especially in scenarios where applications interact with external resources or perform time-consuming operations.
</details>


<details>
<summary>What is an asynchronous function</summary>
</details>