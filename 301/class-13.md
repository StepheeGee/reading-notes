# More CRUD

## Class: 12.13.23
Prepared 12.12.23

**Summary/Statement:**  This reading assignment aims to explore the relationship between REST, CRUD, and the practical steps involved in designing and implementing RESTful APIs. 

### Reading

[CRUD Basics](https://medium.com/geekculture/crud-operations-explained-2a44096e9c88)


**Which HTTP method would you use to update a record through an API?**

- The HTTP method commonly used to update a record through an API is **"PUT"** or **"PATCH"**.
  - **PUT:** Typically used to replace an entire resource or update it if it exists.
  - **PATCH:** Often used to apply partial modifications to a resource.

**Which REST methods require an ID parameter?**

- The REST methods that commonly require an ID parameter are **"GET," "PUT," "PATCH,"** and **"DELETE."**
  - **GET:** To retrieve a specific resource or collection.
  - **PUT and PATCH:** To update a specific resource.
  - **DELETE:** To delete a specific resource.

### Video

[Speed Coding: Building a CRUD API](https://www.youtube.com/watch?v=EzNcBhSv1Wo)

**What’s the relationship between REST and CRUD?**

- **REST** (Representational State Transfer) is an architectural style that follows principles to design networked applications. 

- **CRUD** (Create, Read, Update, Delete) refers to the four basic operations that can be performed on persistent storage. 
  - RESTful APIs are designed to perform CRUD operations on resources through standard HTTP methods.
  - For example, GET requests map to Read, POST to Create, PUT/PATCH to Update, and DELETE to Delete operations.

**If you had to describe the process of creating a RESTful API in 5 steps, what would they be?**

1. **Identify Resources:** Determine the entities (objects, data types) that your API will expose.
2. **Define Endpoints:** Map HTTP methods (GET, POST, PUT, DELETE) to specific URLs (endpoints) for each resource.
3. **Implement CRUD Operations:** Develop logic to handle Create, Read, Update, and Delete operations for each endpoint.
4. **Handle Requests and Responses:** Set up code to handle incoming HTTP requests and send appropriate responses (e.g., JSON).
5. **Test and Document:** Thoroughly test API endpoints using tools like Postman and document the API, including endpoints, expected requests/responses, and error handling.


### Things I want to know more about

N/a
