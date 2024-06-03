// Import the 'express' module to create an Express application
import express from 'express';

// Import the StudentsController and AppController modules
// eslint-disable-next-line import/extensions
import StudentsController from '../controllers/StudentsController.js';
// eslint-disable-next-line import/extensions
import AppController from '../controllers/AppController.js';

// Destructure the getAllStudents and getAllStudentsByMajor methods from StudentsController
const { getAllStudents, getAllStudentsByMajor } = StudentsController;

// Destructure the getHomepage method from AppController
const { getHomepage } = AppController;

// Create a new router object
const router = express.Router();

// Define a route handler for GET requests to the root URL ('/') using the getHomepage method
router.get('/', getHomepage);

// Define route handlers for GET requests to '/students'
// and '/students/:major' using the methods from StudentsController
router.get('/students', getAllStudents);
router.get('/students/:major', getAllStudentsByMajor);

// Export the router object as a default export,
// so it can be imported using 'import router from './routes/index.js'' in other modules.
export default router;
