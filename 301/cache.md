# Cache Notes

12.8.23

## Definition

A cache is a component that stores data temporarily, allowing future requests for that data to be served faster. It essentially stores copies of frequently accessed or computationally expensive data in a quickly accessible location to reduce the time needed to retrieve that data on subsequent requests.

## How it works

1. **Frontend to Backend Request:**
   - When the frontend sends a request to the backend, the backend first checks its cache to see if it has a cached copy of the requested data.

2. **Cache Check:**
   - If the requested data is found in the cache:
     - The backend retrieves the data from the cache.
     - It formats or processes the cached data (if needed).
     - Then, it sends the processed data as a response to the frontend.

3. **Cache Miss:**
   - If the requested data is not found in the cache:
     - The backend fetches the data from the external API or source.
     - After obtaining the data, it may apply formatting or processing.
     - The formatted/processed data is then stored in the cache for future requests.
     - Finally, the backend sends the processed data as a response to the frontend.

By following this approach, the backend optimizes response times by serving cached data when available, reducing the need to repeatedly fetch the same data from external sources. If the data is not in the cache, it retrieves it from the API, processes it, and caches it for future use, providing faster responses for subsequent requests for the same data.

## Complete Process

When a server caches information from an API, it stores the API responses it receives temporarily in a cache. This cached data can include various types of information, typically the responses or results obtained from making requests to the API. Here's how the server caches information from an API:

### Types of Information Cached from an API:

1. **API Responses:**
   - The server caches the complete responses received from the API, which may include:
     - JSON or XML data
     - Images, files, or multimedia content fetched from the API
     - Metadata or structured information provided by the API

2. **Aggregated Data:**
   - In some cases, the server might aggregate or manipulate API responses before caching them.
     - For instance, combining data from multiple API endpoints into a single cached response.

### Process of Caching Information from an API:

1. **Receive API Responses:**
   - The server sends requests to the API endpoints to fetch data based on client requests or server-side operations.

2. **Caching Logic:**
   - Upon receiving the API responses, the server determines whether to cache the data.
   - Criteria for caching might include:
     - Frequency of data access (e.g., caching frequently accessed data).
     - Specific endpoints or types of data that need caching.
     - Size or complexity of the data (e.g., caching large or computationally intensive responses).

3. **Storage in Cache:**
   - The server stores the received API responses in a caching mechanism or storage system.
   - It might use in-memory caches like Redis, Memcached, or utilize the server's file system or database as a cache storage.

4. **Cache Expiration and Invalidation:**
   - The server might set expiration times or use cache invalidation strategies to manage cached data.
   - Expired or invalidated cache entries are removed or updated to ensure freshness and accuracy of the cached information.

### Benefits of Caching API Responses:

- **Improved Performance:** Cached API responses reduce latency and speed up subsequent requests, especially for frequently accessed data.
- **Reduced Load on the API:** By serving cached responses, the server minimizes the need to repeatedly fetch data from the API, reducing the load on the API server.
- **Better Scalability:** Caching helps handle higher traffic and scalability by efficiently managing data retrieval and serving.

Server-side caching of API responses aims to optimize performance and resource utilization by storing and serving data efficiently, ensuring faster and more responsive applications while reducing dependency on external API servers.

## Example Overview:

### Regular Node Cache
In regular Node.js without specialized caching libraries like NodeCache, you can create a simple caching mechanism using JavaScript objects (hash maps) or arrays. This basic cache can store key-value pairs and implement simple expiration logic based on time.

Here's an example of a basic in-memory cache using JavaScript objects and setting TTL (time-to-live) for cached items:

```javascript
// Initialize an empty cache object
const cache = {};

// Function to set data in the cache with a TTL (in seconds)
function setCache(key, value, ttlSeconds) {
  cache[key] = {
    value: value,
    expiration: Date.now() + ttlSeconds * 1000 // Calculate expiration timestamp
  };
}

// Function to get data from the cache
function getCache(key) {
  const cachedItem = cache[key];
  if (cachedItem && cachedItem.expiration > Date.now()) {
    return cachedItem.value; // Return value if not expired
  } else {
    delete cache[key]; // Remove expired item from cache
    return null; // Return null for expired or non-existent items
  }
}

// Example usage:
setCache('myKey', 'cached data', 60); // Cache 'cached data' with a TTL of 60 seconds

console.log(getCache('myKey')); // Output: 'cached data'

// Simulate time passing (wait for TTL expiration)
setTimeout(() => {
  console.log(getCache('myKey')); // Output: null (data has expired)
}, 60000); // 60 seconds
```

This example demonstrates a basic in-memory cache using a JavaScript object (`cache`). The `setCache` function sets a key-value pair in the cache with an associated TTL. The `getCache` function retrieves data from the cache and checks for expiration based on the stored timestamp.

Remember, this approach is simple and lacks advanced features such as distributed caching, efficient eviction policies, or persistence across application restarts, which specialized caching libraries provide. For more complex scenarios or production applications, consider using dedicated caching solutions like Redis or Memcached for improved performance and functionality.

### NODE CACHE

This example will showcase how a Node.js server can cache API responses using a simple in-memory cache. It simulates fetching data from an external API and caching the responses.

```javascript
// Required modules
const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache'); // In-memory caching library

const app = express();
const port = 3000;

// Initialize an in-memory cache
const cache = new NodeCache({ stdTTL: 60 }); // Setting cache expiration to 60 seconds

// Route to fetch data from an API and cache the response
app.get('/api/data', async (req, res) => {
  const cacheKey = 'cachedData'; // Key to store data in the cache

  // Check if the data exists in the cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log('Data retrieved from cache.');
    return res.json(cachedData); // Serve cached data
  }

  try {
    // Simulating API request (fetching data from an external API)
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Store the fetched data in the cache
    cache.set(cacheKey, response.data);

    console.log('Data fetched from API and cached.');
    res.json(response.data); // Serve fresh data from the API
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### Instructions:

1. Install the necessary Node.js modules (`express`, `axios`, `node-cache`) using npm.
2. Copy the provided code into a Node.js file (e.g., `server.js`).
3. Run the server using `node server.js`.
4. Access `http://localhost:3000/api/data` in your browser or via an API client (like Postman).

This example uses an in-memory cache (`NodeCache`) to store API responses fetched from `https://jsonplaceholder.typicode.com/posts`. When a request is made to `/api/data`, it checks if the data exists in the cache. If present, it serves the cached data; otherwise, it fetches the data from the API, stores it in the cache, and serves the fresh response.

## Setting a time limit on a cache

Yes, most caching systems and libraries allow you to set expiration or time-to-live (TTL) values for cached data. This functionality enables you to define how long data remains in the cache before it's considered stale or expired. When the TTL expires, the data is typically removed from the cache and considered invalid.

Here's an example using the `NodeCache` library in Node.js to set a time limit (TTL) on cached data:

```javascript
const NodeCache = require('node-cache');

// Create a new cache instance with a TTL of 60 seconds
const cache = new NodeCache({ stdTTL: 60 });

// Set data in the cache with a specific key and TTL
cache.set('myData', { example: 'cached data' }, 60); // Key, value, and TTL in seconds

// Retrieve data from the cache
const cachedData = cache.get('myData');
console.log(cachedData); // Output: { example: 'cached data' }

// After 60 seconds (TTL), the data is automatically removed from the cache
setTimeout(() => {
  const expiredData = cache.get('myData');
  console.log(expiredData); // Output: undefined (data has expired)
}, 60000); // 60 seconds
```

In this example:

- `stdTTL: 60` sets the default TTL for all cached data to 60 seconds.
- `cache.set('myData', { example: 'cached data' }, 60)` sets data with a key `'myData'`, a value `{ example: 'cached data' }`, and a TTL of 60 seconds specifically for this cached entry.
- After 60 seconds, the `setTimeout` function demonstrates that the data is automatically removed from the cache due to expiration.

Different caching systems or libraries might have variations in how TTL is implemented or set, but the concept remains the same: specifying a time limit for cached data to manage its expiration. Adjust the TTL based on the desired caching strategy and how frequently the data changes.

## Typically Cache in Objects

Caches can store data in various formats, and using objects is a common approach. Objects offer flexibility and allow for storing structured data, making it easier to organize and retrieve cached information efficiently.

Here are reasons why caches often use objects:

1. **Key-Value Structure:** Caches, especially in-memory caches like dictionaries or associative arrays, typically follow a key-value pair structure. Objects naturally represent this structure, enabling quick lookup of data using keys.

2. **Structured Data Storage:** Objects allow storing structured data, such as JSON-like structures or nested data, which can be beneficial when caching complex or hierarchical information.

3. **Custom Metadata:** Objects can hold additional metadata alongside the cached data. For example, you might include information like timestamps, flags, or other properties related to the cached data within the object.

4. **Ease of Manipulation:** Objects offer methods to add, update, delete, and retrieve data efficiently, making them suitable for implementing caching mechanisms.

However, caches can store data in various forms, including strings, arrays, or even raw bytes, depending on the caching system or the nature of the data being cached. For instance:

- **String-Based Caching:** Sometimes, caching involves storing pre-rendered HTML strings, query results, or serialized data as strings.
  
- **Binary Caching:** In some scenarios, caching binary data, such as images, files, or serialized binary objects, might be more suitable.

The choice of data structure for caching depends on factors like the type of data being cached, the caching system being used, and the retrieval and processing requirements. Objects are commonly used due to their versatility and ease of handling structured information within caches.