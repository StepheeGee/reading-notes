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

**Status codes in the 200 range represent success. They indicate that the server successfully processed the request and delivered the expected response to the client.**

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
