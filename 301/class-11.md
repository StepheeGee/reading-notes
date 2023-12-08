# MongoDB, Mongoose and Data Modeling

## Class 10: 12.11.23
Prepared 12.8.23

**Summary/Statement:** 
This markdown file explores the fundamental differences between SQL and NoSQL databases, covering their suitability for different data types, structures, and scalability.

### Reading

[MongoDB](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

Fill in the chart below with five differences between SQL and NoSQL databases:



## SQL vs NoSQL Databases

| SQL                                      | NoSQL                                 |
| ---------------------------------------- | -------------------------------------- |
| Structured Query Language                 | Non-relational databases               |
| Uses predefined schema                    | Schema-less or flexible schema         |
| Best suited for complex queries           | Suitable for hierarchical data storage |
| Best for ACID compliance (atomicity, consistency, isolation, durability) | Preferred for scalability and high-velocity data |
| Relational database management system     | Various types: document, key-value, graph, etc. |

Chart Credit- ChatGPT


1. **What kind of data is a good fit for an SQL database?**  
   - Structured, highly organized data with predefined schemas.

2. **Give a real-world example.**  
   - Financial data in a banking application where transactions, accounts, and user details need structured relationships.

3. **What kind of data is a good fit for a NoSQL database?**  
   - Unstructured or semi-structured data, where flexibility is crucial.

4. **Give a real-world example.**  
   - Social media platforms storing user-generated content like comments, posts, and user profiles.

5. **Which type of database is best for hierarchical data storage?**  
   - NoSQL databases are often better for hierarchical data due to their flexible schema and ability to handle nested data structures efficiently.

6. **Which type of database is best for scalability?**  
   - NoSQL databases, particularly when scaling horizontally (across multiple servers), due to their distributed architecture.

### Video

[sql vs nosq](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

7. **What does SQL stand for?**  
   - Structured Query Language

8. **What is a relational database?**  
   - A database that organizes data into tables with predefined relationships between them.

9. **What type of structure does a relational database work with?**  
   - Tabular structure with predefined relationships (rows and columns).

10. **What is a ‘schema’?**  
    - A schema is a structure that defines the organization of data in a database, including tables, fields, and their relationships.

11. **What is a NoSQL database?**  
    - A type of database that doesn't rely on the traditional tabular relations seen in SQL databases.

12. **How does it work?**  
    - NoSQL databases vary in type (document-oriented, key-value stores, graph databases, etc.) and work based on their specific data storage and retrieval methods.

13. **What is inside of a MongoDB database?**  
    - Collections of documents (JSON-like objects) organized within databases.

14. **Which is more flexible - SQL or MongoDB? and why.**  
    - MongoDB tends to be more flexible due to its schema flexibility, enabling easier adaptation to changing data needs.

15. **What is the disadvantage of a NoSQL database?**  
    - Lack of standardization and maturity compared to SQL databases, potentially leading to inconsistency in data management and queries.


### Bookmark and Review

[Mongoose API](https://mongoosejs.com/docs/api.html#Model)  
[React Router](https://reactrouter.com/en/6.20.1/router-components/browser-router)

### Things I want to know more about

- Whoa. Databases have frameworks too? So this means I have to learn modeling functions to design the database and organize the data?


