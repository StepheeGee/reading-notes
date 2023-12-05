12.5.23


### Frontend Repo Setup:

1. **Create Repository**: Initialize a repository for the frontend.
2. **Local Setup**:
   - Create a folder for the frontend project on your local machine.
   - Use a project setup tool like `npm create vite` to generate your React project (Vite is a fast frontend build tool).
          npm create vite
          Open with VS code 
          Open terminal in VS Code and go enter
          npm install
   - Set up dependencies (`npm install react-bootstrap bootstrap`) for styling.

3. **Push to Repository**:
   - Use `git init` within the folder to initialize it as a git repository.
        git init
        git add readme.md
        git commit -m "first commit"
        branch -M main
        git remote add origin git@github.com/stepheegee/REPONAME.git
        git push -u origin main
   - Start the development server (`npm run dev`).
4. **Deployment**:
   - Deploy the frontend to a hosting service like Netlify.

### Backend Repo Setup:

1. **Create Repository**: Initialize a repository for the backend.

      - Back-end Repo (NO CREATE VITE for this)
      - make public
      - add readme
     - add license
     - add node gitignore template
clone in machine - git clone of backend repo
2. **Local Setup**:
   - Create a folder for the backend project on your local machine.
   - Clone the backend repository (`git clone git@github.com:username/backend-repo.git`).
   - Initialize Node.js environment using `npm init` and follow the prompts to create `package.json`.

   Node applications require a package.json file
they run on Node Package Manager (npm) - which is the environment

        1. go to backend CLI - use command npm init
        2. version 1.0.0
        3. description:
        4. entry point: server.js
        5. test command leave blank
        6. git repo leave blank
        7. keywords leave blank
        8. author
        9. license: mit
    
   - Install necessary dependencies (`npm install express dotenv`) for the backend.
   - npm test
   - Create a `server.js` file to start building your backend logic (e.g., setting up a basic server using Express).

        *change script in package.json to run "node server.js"

        *make a file server.js (You can console log to see that the new file is behaving like a server)

   - Configure scripts in `package.json` to run your server (`"start": "node server.js"`).
   - Start the server (`npm start`).
3. **Development**:
   - Develop your backend logic (routes, middleware, database connections, etc.) using Express or any other framework/tool you prefer.
4. **Testing**:
   - Test your backend using tools like Postman or by writing unit tests (if applicable).

### Final Steps:

1. **Run Backend**:
   - Run the backend server (`npm start` or `npm run dev` if a development script exists).
   - Verify the server is running locally (`http://localhost:port/`).
2. **Run Frontend**:
   - Run the frontend development server (`npm run dev`).
   - Access the frontend in the browser (`http://localhost:your_frontend_port/`).
3. **Further Development**:
   - Continue developing both the frontend and backend, making sure they interact correctly via APIs or other connections.

### Setting Up Express Server:

1. **Installation and Development**:
   - Run `npm install` to install necessary dependencies mentioned in `package.json`.
   - Start the development server using `npm run dev` (if you've configured a script for this purpose).

2. **Server Setup**:
   - Create an `.env` file and define the `PORT` variable (`PORT=5173`).
          VITE_API_URL = http://localhost:5173/
   - In your `server.js` file, use `dotenv` to load environment variables: `require("dotenv").config();`.
   - Initialize Express and enable CORS:

    ```javascript
    const express = require("express");
    const cors = require("cors");
    const app = express();
    app.use(cors());
    ```

   - Specify the port for the server to listen on:

    ```javascript
    const PORT = process.env.PORT || 5173; // Defaulting to 5173 if PORT not set in .env
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    ```

   - Implement a basic route:

    ```javascript
    app.get('/', (request, response) => {
      response.send("Hello World");
    });
    ```
3. Now enter npm start

Add dot env library to read .env file
require("dotenv").config();


### Deployment to Render.com:

1. **Deployment Preparation**:
   - Sign up or log in to Render.com.
   - Connect your GitHub repository that contains your backend code.

2. **Deployment Steps** (on Render.com):
   - Create a new web service.
   - Select the repository and branch to deploy.
   - Configure the settings (choose the appropriate build command and port).
   - Deploy the application.

### Create Dependency

1. In app.jsx file

2. import axios from axios


```jsx
import React, { useState } from 'react';
import axios from 'axios'; 

const API = import.meta.env.VITE_API_URL;
function App() {
  const [data, setData] = useState({});

 
  async function getData() {
    try {
      let response = await axios.get(API); 
      setData(response.data); 
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <h1>{data.name}</h1> {/* Accessing 'name' property from fetched data */}
      <button onClick={getData}>click</button>
    </>
  );
}

export default App;
```

3. npm start

4. Make sure to add variable to Netlify  - Environment Variables - Add variable 

5. Auto refresh of server
npm install -g nodemon

6. Wildcard

In Express, `app.get("*", ...)` is a wildcard route that catches any request made to the server that hasn’t been handled by previous defined routes. The asterisk (`*`) acts as a wildcard, matching any path.

```javascript
app.get("*", (request, response) => {
  response.status(404).send("Page Not Available");
});
```

- `app.get()` sets up a route handler for GET requests to any path.
- `"*"` as the path means it will match any URL that hasn’t been handled by specific routes above it.
- `(request, response)` are the standard Express request and response objects.
- `response.status(404)` sets the HTTP status code to 404 (Not Found).
- `.send("Page Not Available")` sends the string "Page Not Available" as the response body for any unmatched routes.

In summary, this piece of code provides a fallback for any URL that doesn’t match previously defined routes. When a user visits a URL that doesn’t have a specific route defined, they will receive a "Page Not Available" message along with a 404 status code.

7. Error Handler - Express automatically calls this when an error is thrown

```javascript
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});
```
This piece of code sets up an error handling middleware in an Express application. In an Express application, `app.use()` is used to install middleware, which are functions that have access to the request and response objects in the application's request-response cycle.

Here's a breakdown of what this specific middleware does:

- `app.use()` sets up a middleware function that will be executed for every incoming request.
- The function `(error, request, response, next)` defines the error handling middleware with four parameters:
  - `error`: Represents any error that might have occurred in previous middleware or route handlers.
  - `request`: Represents the incoming HTTP request object.
  - `response`: Represents the outgoing HTTP response object.
  - `next`: A callback function that moves the request-response cycle to the next middleware in the stack.

Inside the middleware function:
- `response.status(500)` sets the HTTP status code to 500, indicating an internal server error.
- `.send(error.message)` sends the error message as the response body. The `error.message` typically contains details about the error that occurred in the application.

This middleware specifically handles errors by sending an HTTP 500 status code along with the error message in the response. It's meant to catch errors that occur within the application's route handlers or other middleware functions, providing a centralized way to handle and respond to errors that may occur during request processing.


## You can set up a route that your front-end can hit. Your server will return information on that route:


1. First, ensure your Node.js backend server is running and has Express installed.

2. Set up an endpoint in your backend to handle city exploration:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Sample city data
const cities = {
  Paris: {
    population: '2.141 million',
    country: 'France',
    famousFor: 'Eiffel Tower, Louvre Museum',
  },
  Atlanta: {
    population: '498,044',
    country: 'United States',
    famousFor: 'Coca-Cola, CNN, Georgia Aquarium',
  },
  // Add more cities as needed
};

// Endpoint to get city information
app.get('/explore', (req, res) => {
  const cityName = req.query.city;

  if (cities[cityName]) {
    res.json(cities[cityName]);
  } else {
    res.status(404).send('City not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

This code creates an Express server listening on port 3000 with an endpoint `/explore` that accepts a query parameter `city`. It retrieves information about the city from a predefined `cities` object and returns it as JSON.

3. On the frontend side (React), you can fetch information about a specific city by hitting this endpoint:

```javascript
fetch('http://localhost:3000/explore?city=Atlanta')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output will be information about Atlanta city
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Replace `http://localhost:3000` with the appropriate URL where your backend server is hosted.

This setup allows your frontend to send a GET request to your Node.js backend, specifying the desired city in the query parameter. The backend then responds with information about that city from the `cities` object. You can expand this by fetching data from external APIs or databases based on the city requested.

## You can also send information from the front-end to the back-end as a query.

- Queries live in the URL after the question mark: http://localhost:3000/?city=seattle

- To send that query to the back-end via axios, you could write code like:

```javascript

//FRONT-END
await axios.get('http://localhost:3001/city', {params: { city: 'seattle' }});

// BACK-END
app.get('city', (request, response) => {
  const city = reqeust.query.city;
  response.send(`you sent the city of ${city}`)
});
```

Further info

Sending information from the front-end to the back-end as a query often involves making a GET request with parameters appended to the URL. In JavaScript and frameworks like Axios or Fetch, you can add query parameters to the URL when making a request.

### Using Axios for Front-End to Back-End Communication:

#### Front-End (JavaScript/React):
If you want to send data from the front-end to the back-end as a query using Axios, you can do it like this:

```javascript
import axios from 'axios';

// Suppose you want to send 'name' as a query parameter to the backend
const name = 'John Doe'; // Data to send

// Make a GET request with the query parameter appended to the URL
axios.get('http://localhost:3000/api/user', {
  params: {
    name: name // Adding 'name' as a query parameter
  }
})
  .then(response => {
    // Handle response from the backend
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
```

#### Back-End (Node.js/Express):

```javascript
const express = require('express');
const app = express();

// Route to handle incoming GET requests with query parameters
app.get('/api/user', (req, res) => {
  const { name } = req.query; // Accessing the 'name' query parameter
  // Use the received 'name' parameter as needed (e.g., database query, processing, etc.)
  res.send(`Received name: ${name}`);
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example:
- On the front-end, Axios is used to make a GET request to the backend URL (`http://localhost:3000/api/user`) with the `name` parameter appended as a query.
- On the back-end, Express handles the incoming GET request to `/api/user` and retrieves the `name` query parameter using `req.query.name`.

Adjust the route and query parameter names based on your specific application needs. This pattern allows passing information from the front-end to the back-end using query parameters in a GET request.

## City Explorer Example of GET request

``` javascript

const express = require('express');
const app = express();
const port = 3000; // Choose your desired port number

// Endpoint to handle incoming queries
app.get('/explore', (req, res) => {
  const city = req.query.city; // Assuming the query parameter is 'city'

  // Here, you can process the received city query
  // For example, you might fetch data related to this city from an API

  res.send(`Exploring ${city}`); // Send back a response to the frontend
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

Absolutely, to send parameters in a request, you can modify the `fetch` call in your React component to include them in the URL or in the request body, depending on your backend's requirements.

For example, to send `city` as a query parameter in the URL:

```javascript
fetch('http://localhost:3000/explore?city=Atlanta')
  .then(response => response.text())
  .then(data => {
    console.log(data); // This will log "Exploring Atlanta"
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Or, if you want to send parameters in the request body (for POST requests or more complex data), you can use the `fetch` API with a `POST` method:

```javascript
fetch('http://localhost:3000/explore', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ city: 'Atlanta' }),
})
  .then(response => response.text())
  .then(data => {
    console.log(data); // This will log "Exploring Atlanta"
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In your Node.js backend, you'll need to handle the incoming POST request and access the parameters from the request body. For instance, using Express.js:

```javascript
app.post('/explore', (req, res) => {
  const city = req.body.city;

  // Process the received city parameter as needed
  
  res.send(`Exploring ${city}`);
});
```

To work with POST requests in Express, you might need to use middleware like `body-parser` to parse the request body. Install it via npm (`npm install body-parser`) and include it in your Express setup:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware to parse JSON in the request body
// ... rest of your Express setup

// Your endpoints and server setup
```
