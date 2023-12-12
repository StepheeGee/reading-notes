
### MongoDB Database Setup:

1. **Install MongoDB**: Download and install MongoDB from the official [MongoDB website](https://www.mongodb.com/try/download/community).

2. **Start MongoDB Service**: Run the MongoDB service on your machine.

Run the mongod command to start the MongoDB server.
Confirm that the server is running and able to accept connections.

### Backend Setup:

3. **Create Backend Directory**:
   - Create a directory for your backend code.

4. **Initialize Backend Project**:
   - Run `npm init -y` to create a `package.json` file.
   - Install necessary dependencies:
     ```
     npm install express mongoose cors dotenv
     ```
  -package.json - "start": "node server.js"

5. **Create `.env` File**:
   - Add your MongoDB connection string as `DB_KEY=mongodb://localhost:27017/books`. And add your port 

6. **Set Up Server and Database Connection**:
   - Create a `server.js` file.
   - Configure server setup, including MongoDB connection using Mongoose.
   - Define a schema using Mongoose for your data model (e.g., books).
   - Implement necessary routes and controllers for CRUD operations.
   -
   - Include dependencies in your `server.js`:

     ```javascript
     'use strict';
     const express = require('express');
     const cors = require('cors');
     const mongoose = require('mongoose');
     const dotenv = require('dotenv');
     const bookSchema = require('./bookSchema'); 
    
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

     const server = {
     start: function(port){
      app.listen(port,{}=> console.log(`up on port $(port)`))
     }}
    module.exports=server;
     ```

7. **Seed.js File**:
   - The `seed.js` file can be kept as a separate script to populate the database with initial data. You can run this script separately or as part of your initialization process.
   - It is advisable to run the seed script manually or through a setup script during initial setup rather than in your main server file.
   
```javascript
   // seed.js file example
'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_KEY);

const Book = require('./books.js');

async function seed() {

  await Book.create({
    title: 'Burn the Boats',
    description: 'Burn the Boats is the manifesto for anyone looking to level up their life while navigating risk. Each chapter includes clear, actionable advice that readers can immediately start applying to their own lives, along with inspiration drawn from dozens of real-life success stories',
    status: true,
  });

  console.log('Book 1 was created');

  await Book.create({
    title: 'Self-Compassion: The Proven Power of Being Kind to Yourself',
    description: 'Self-Compassion: Stop Beating Yourself Up and Leave Insecurity Behind offers expert advice on how to limit self-criticism and offset its negative effects, enabling you to achieve your highest potential and a more contented, fulfilled life.',
    status: true,
  });

  console.log('Book 2 was created');

  await Book.create({
    title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    description: 'Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world\’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers\’ capacities for pleasure, engagement, self-control, and trust. ',
    status: false,
  });

  console.log('Book 3 was created');

  mongoose.disconnect();

}

seed();
   ```

7b. **index.js File**:

``` javascript
require('dotenv').config();
const server = require('./server.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    server.start(process.env.PORT || 3001);
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
```

7c. **bookschema.js file**:

```javascript
const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true }
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;

```

7d. **finish server.js file**:
```javascript
'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Book = require('./books.js');

mongoose.connect(process.env.DB_KEY);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.status(200).send('Welcome to Our Server!');
});

app.get('/books', async (request, response, next) => {
  try {
    let results = await Book.find();
    console.log(results);
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
});

app.post('/books', async (request, response, next) => {
  try {
    // Validation logic for input
    if (!request.body.title || !request.body.description || !request.body.status) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    let createdBook = await Book.create(request.body);
    response.status(200).send(createdBook);
  } catch (error) {
    next(error);
  }
});

app.delete('/books/:bookID', async (request, response, next) => {
  try {
    let id = request.params.bookID;
    await Book.findByIdAndDelete(id);
    response.status(200).send('Book was deleted');
  } catch (error) {
    next(error);
  }
});

app.put('/books/:bookID', async (request, response, next) => {
  try {
    let id = request.params.bookID;
    let data = request.body;

    const updatedBook = await Book.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );

    response.status(201).send(updatedBook);
  } catch (error) {
    next(error);
  }
});

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request, response, next) => {
  response.status(500).json({ error: error.message });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

```
#### 8. JS Files

 Here's a breakdown of the purposes of each file in a typical Node.js application using MongoDB:

1. **bookSchema.js**:
   - **Purpose**: Defines the schema for your MongoDB collection.
   - **Content**: Contains Mongoose schema definitions that specify the structure of your data, including field types, validations, and default values. It lays out how the documents in your collection should look.

2. **seed.js**:
   - **Purpose**: Populates your database with initial or test data.
   - **Content**: Usually used during development to create sample data or to set up a predefined state in your database. It contains code to create and insert initial records into your MongoDB collection, often based on the schema defined in `bookSchema.js`.

3. **index.js**:
   - **Purpose**: Typically the entry point of your application.
   - **Content**: Orchestrates the setup and configuration of your application. It might handle environment variable setup, database connections, and starting the server.

4. **server.js**:
   - **Purpose**: Sets up the HTTP server for your application.
   - **Content**: Contains the code to create and configure the Express server. It sets up middleware, defines routes, handles requests, and manages responses.

#### 9. What to import

To interact with your MongoDB database using JavaScript, you'd typically use a Node.js application and import the necessary MongoDB-related libraries. Here's a breakdown of which files you might import into your Node.js application:

1. **MongoDB Client and Connection Setup**:
   - `mongoose`: If you're using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment. This library helps you define schemas, models, and interact with MongoDB.
   - `dotenv`: If you're using environment variables stored in a `.env` file to handle sensitive information like database credentials.

2. **Schema Definition**:
   - `bookSchema.js` or similar: This file contains the schema definition for your MongoDB collection. It defines the structure of the documents in your collection.

3. **Server Setup**:
   - `server.js` or `index.js`: The main server file where you establish server connections, define routes, and handle HTTP requests. This file might import other necessary components like the database connection, route handlers, middleware, etc.

4. **Seed Data**:
   - `seed.js` or a similar file: This file contains code to populate your database with initial or sample data. It's often used for testing purposes or to prepopulate the database.

When building your Node.js application, you'll typically import `mongoose` and the schema definition into your server file (`server.js` or `index.js`). The `dotenv` package is imported at the start of your server file to ensure environment variables are loaded.

### Frontend Setup:

10. **Create Frontend Directory**:

   - Create a directory for your frontend code.

11. **Initialize Frontend Project**:

   - Inside the frontend directory, run `npx create-react-app my-app` to generate a new React app.
   - Navigate to the app directory: `cd my-app`.
   - Install additional dependencies if required for frontend development.

12. **Connect Backend to Frontend**:
    - In your React app, use Axios or Fetch to make API requests to your backend endpoints.

13. **Implement Frontend Components**:
    - Create React components to interact with the backend data.
    - Design UI components to display data fetched from the backend.

14. **Run the App**:
    - Start the backend server using `node server.js`.
    - Run the React app using `npm start`.

