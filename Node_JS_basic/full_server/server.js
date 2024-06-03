// Import the 'express' module to create an Express application
import express from 'express';
// Import the router object from './routes/index.js'
// eslint-disable-next-line import/extensions
import index from './routes/index.js';

// Create a new Express application instance
const app = express(process.argv[1]);

// Use the router object to handle requests to the root URL ('/')
// and the '/students' and '/students/:major' paths
// The router object defines route handlers for these paths
app.use('/', index);
app.use('/students', index);
app.use('/students/:major', index);

// Start the Express application, listening for HTTP requests on port 1245
app.listen(1245);

// Export the Express application instance as a default export,
// so it can be imported using 'import app from './server.js'' in other modules.
export default app;
