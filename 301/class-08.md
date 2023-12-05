# APIs

## Class 8: 12.5.23

**Summary/Statement:** This assignment focuses on API design best practices, particularly regarding RESTful APIs.

### Reading: API Design Best Practices

[API Design Best Practices](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)

1. **What does REST stand for?**  
   - REST stands for Representational State Transfer.

2. **REST APIs are designed around a ____.**  
   - REST APIs are designed around a **resource**.

3. **What is an identifier of a resource? Give an example.**  
   - An identifier of a resource is a URI or URL. For example: `/users/123` represents a user resource with ID 123.

4. **What are the most common HTTP verbs?**  
   - The most common HTTP verbs are GET, POST, PUT, PATCH, DELETE.

5. **What should the URIs be based on?**  
   - URIs should be based on resources and not actions.

6. **Give an example of a good URI.**  
   - An example of a good URI: `/products/123`.

7. **What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?**  
   - A 'chatty' web API refers to an API that requires multiple requests to perform a single operation. It's generally considered bad practice as it can impact performance due to increased network overhead.

8. **What status code does a successful GET request return?**  
   - A successful GET request returns status code **200** (OK).

9. **What status code does an unsuccessful GET request return?**  
   - An unsuccessful GET request returns status code **404** (Not Found).

10. **What status code does a successful POST request return?**  
    - A successful POST request returns status code **201** (Created).

11. **What status code does a successful DELETE request return?**  
    - A successful DELETE request returns status code **204** (No Content).

### Bookmark and Review

[RegExr - Pay particular attention to the cheatsheet](https://regexr.com/)  
[Regex Tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)  
[Regex 101](https://regex101.com/)



### Things I want to know more about

- Question you want more information on.
