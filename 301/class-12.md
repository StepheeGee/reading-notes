# CRUD

## Class 12: 12.12.23

Prepared 12.11.23

**Summary/Statement:** The assignment explores for better understanding of HTTP status codes and their meanings, along with concepts related to middleware, route parameters, and schema defaults in Express.js

### Reading

[Status Codes Based on REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

### 1. In your own words, describe what each group of status code represents:

#### 100’s =

**Status codes in the 100 range are informational. They signify that the initial part of a client's request has been received and understood by the server.**

#### 200’s =

**Status codes in the 200 range represent success!! They indicate that the server successfully processed the request and delivered the expected response to the client.**

#### 300’s =

**Status codes in the 300 range are redirection messages. They imply that further action is needed by the client to fulfill the request.**

#### 400’s =

**Status codes in the 400 range signify client errors. They arise when there's an issue with the client's request, like invalid input or unauthorized access.**

#### 500’s =

**Status codes in the 500 range indicate server errors. These codes are returned when the server encounters an unexpected condition that prevents it from fulfilling the request.**

### 2. What is a status code 202?

Status code 202 signifies that the request has been accepted but hasn't been fully processed yet. It's often used for asynchronous processing.

### 3. What is a status code 308?

Status code 308 is a permanent redirect code. It indicates that the resource has been moved permanently to a different location.

### 4. What code would you use if an update didn’t return data to a client?

If an update didn't return data to a client, I'd use the status code 204 (No Content) to signify that the request was successful but there's no content to return.

### 5. What code would you use if a resource used to exist but no longer does?

If a resource used to exist but no longer does, I'd use the status code 410 (Gone) to indicate that the requested resource is no longer available.

### 6. What is the ‘Forbidden’ status code?

The 'Forbidden' status code is 403, indicating that the server understood the request but refuses to authorize it.

### Video

[Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

### 7. Why do we need to pull our MongoDB database string out of our server and put it into our .env?

Storing the database string in the .env file enhances security by keeping sensitive information like database credentials out of the codebase and away from potential exposure.

### 8. What is middleware?

Middleware refers to functions or code that have access to the request and response objects in an Express application's request-response cycle. It can modify the request and response objects or terminate the cycle.

### 9. What does app.use(express.json()) do?

app.use(express.json()) is middleware in Express that parses incoming requests with JSON payloads, making the parsed data available under req.body.

### 10. What does the /:id mean in a route?

The /:id in a route is a URL parameter in Express. It represents a dynamic segment of the URL and allows access to the value passed after the /.

### 11. What is the difference between PUT and PATCH?

PUT is used to update or replace an entire resource, while PATCH is used to partially modify or update a resource.

### 12. How do you make a default value in a schema?

In a schema, default values can be set by specifying a default property for a field. For instance, fieldName: { type: String, default: 'DefaultValue' }.

### 13. What does a 500 error status code mean?

A status code of 500 indicates a generic server error. It signifies that an unexpected condition was encountered, causing the server to be unable to fulfill the request.

### 14. What is the difference between a status 200 and a status 201?

Status code 200 (OK) indicates a successful request, while status code 201 (Created) specifically signifies that a new resource was successfully created as a result of the request.

### Things I want to know more about

- Idk

### Notes from Class

Connect with git
git init
git remote add origin git@github.com:repo.git

#### What do we know about databases

- It's a Server, Port (Address), and Database
- Schema is like a format or shape of data. Typically found with SQL.

#### What can we do with a database

- Primarily used to Store and Persists your data - "Persisting your data" refers to the process of maintaining the longevity or durability of information beyond the current session or immediate use. It involves storing data in such a way that it remains available and accessible even after the application, device, or system is shut down or restarted. This storage might occur in databases, files, cache memory, or other forms of storage, ensuring that the data is retained for future use or reference.
-Search
-Report
-Calculation

Goal of storage is use and reuse of data

#### SQL - Structured Query Language

##### Query - In computing and databases, a "query" refers to a request or command for retrieving specific information from a database or dataset. It's a way to interact with a database to fetch, update, delete, or manipulate data according to specified criteria. Queries are typically written using query languages like SQL (Structured Query Language) for relational databases or other methods tailored to specific databases or data structures. They allow users or applications to filter, search, and manage data based on defined conditions or parameters.

##### Select *
In SQL (Structured Query Language), `SELECT *` is a query statement used to retrieve all columns or fields from a table in a database. The `SELECT` statement is used to query or fetch data from one or more tables, and the `*` is a wildcard character that signifies all columns. When combined, `SELECT *` fetches all available columns within the specified table, providing a complete dataset containing all the rows and their associated field values for every column in that table.

#### NoSQL 

- Preferred words are Documents
- Table is an array of Documents

#### MongoDB is a javascript interface to a JSON engine
This statement means that MongoDB, as a database system, works well with JavaScript due to its compatibility with JSON (JavaScript Object Notation). MongoDB stores data in a format similar to JSON, which is a lightweight data-interchange format that's easy for humans to read and write. Because of this similarity, MongoDB seamlessly integrates with JavaScript, making it straightforward to work with and manipulate data using JavaScript-based technologies.

#### Setting up a MongoDB database for beginners involves several steps:


#### Installation:
1. **Download MongoDB:** Visit the MongoDB website and download the appropriate version for your operating system.

#### Running MongoDB:
2. **Install MongoDB:** Follow the installation instructions provided by MongoDB for your OS.
3. **Start MongoDB:** Run the MongoDB server using the terminal or command prompt by executing the appropriate command (`mongod` for Mac/Linux, `mongod.exe` for Windows).

### Using MongoDB Shell:
4. **Connect to MongoDB:** Open a new terminal or command prompt window and run the `mongo` command to connect to the MongoDB instance.

### Creating and Managing Data:
5. **Explore Databases and Collections:** Use commands like `show dbs` and `show collections` to view existing databases and collections.
6. **Perform CRUD Operations:** Use MongoDB shell commands (`db.collectionName.method()`) to insert, read, update, and delete documents.

### Setting Up MongoDB Using MongoDB Compass:

#### Installation:

1. **Download MongoDB Compass:** Get MongoDB Compass from the MongoDB website based on your OS.

#### Running MongoDB:

2. **Start MongoDB:** Ensure your MongoDB server is running (`mongod` command).

### Using MongoDB Compass:

3. **Launch MongoDB Compass:** Open the Compass application after installation.

#### Basic Configuration:

4. **Connect to MongoDB:** Use Compass to connect to your MongoDB instance by specifying connection details (e.g., hostname, port, authentication credentials).

### Interacting with Data:

5. **Explore Databases and Collections:** Compass displays databases and collections visually. You can view, create, or delete databases and collections.
6. **Perform CRUD Operations:** Use the intuitive GUI in Compass to perform CRUD operations on documents.

### Additional Features:

7. **Query Builder:** Compass might offer a visual query builder tool to construct queries graphically.
8. **Visualization and Analysis:** Utilize features for visualization, data analysis, and schema exploration provided by Compass.

### What we set up in class:

Sure, I'll outline the steps for setting up a basic MongoDB connection using Mongoose, seeding the database, creating a server to read the database, and setting up a basic React app.

### Backend (Node.js with Express and MongoDB using Mongoose):

These steps can be integrated into your backend setup instructions after setting up the database connection and schema in the server file:

### Set Up Environment and Server

1. **Server.js Changes**:
   - Add the MongoDB URL as an environment variable in your `.env` file: `DB_KEY=mongodb://localhost:27017/books`.
   - Include dependencies in your `server.js`:

     ```javascript
     'use strict';
     const express = require('express');
     const cors = require('cors');
     const mongoose = require('mongoose');
     const dotenv = require('dotenv');
     const bookSchema = require('./bookSchema'); // Import your book schema

     dotenv.config();

     const app = express();
     app.use(cors());
     app.use(express.json());

     mongoose.connect(process.env.DB_KEY, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false,
     });

     const db = mongoose.connection;
     db.on('error', console.error.bind(console, 'MongoDB connection error:'));
     db.once('open', () => {
       console.log('Connected to MongoDB');
     });

     // Use your bookSchema here to define a model if needed
     // For example: const Book = mongoose.model('Book', bookSchema);

     const port = process.env.PORT || 3000;
     app.listen(port, () => {
       console.log(`Server is running on port ${port}`);
     });
     ```

2. **Seed.js File**:
   - The `seed.js` file can be kept as a separate script to populate the database with initial data. You can run this script separately or as part of your initialization process.
   - It is advisable to run the seed script manually or through a setup script during initial setup rather than in your main server file.

Ensure to handle errors appropriately and organize your code into modular components for a better structure. This setup covers database connection, server setup, schema definition, and a separate seeding script for initial data population. Adjustments may be needed based on your project structure and requirements.

#### 2. Create a Schema with Mongoose:

- Define a schema for your MongoDB documents:
  ```javascript
  const mongoose = require('mongoose');

  const yourSchema = new mongoose.Schema({
    // Define your schema fields here
    fieldName: {
      type: String,
      required: true,
    },
    // ... other fields
  });

  const YourModel = mongoose.model('YourModel', yourSchema);

  module.exports = YourModel;
  ```

#### 3. Seed the Database:

- Create a script to seed the database with initial data:
  ```javascript
  const YourModel = require('./yourModel');

  const seedData = [
    // Your seed data here
    { fieldName: 'Example Data 1' },
    { fieldName: 'Example Data 2' },
    // ... more data
  ];

  YourModel.insertMany(seedData)
    .then(() => {
      console.log('Database seeded successfully');
    })
    .catch((err) => {
      console.error('Error seeding database:', err);
    });
  ```

### Frontend (React):

#### 4. Create a React App:

- Use `create-react-app` or your preferred method to scaffold a React app.
- Use Axios or Fetch API to make HTTP requests to your backend server and fetch data from the database.
