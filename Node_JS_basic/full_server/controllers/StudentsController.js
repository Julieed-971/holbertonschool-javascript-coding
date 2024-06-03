// eslint-disable-next-line import/extensions
import readDatabase from '../utils.js';

// Define a class named StudentsController to handle student-related routes.
class StudentsController {
  static async getAllStudents(request, response) {
    try {
      // Call readDatabase method passing the database filepath from command line argument
      const allStudents = await readDatabase(process.argv[2]);
      // Sort fields by alphabetical order
      const sortedFields = Object.keys(allStudents).sort();

      // Initialize a string to hold the formatted output.
      let output = 'This is the list of our students';

      // Iterate over the sorted fields,
      // appending a formatted string for each field to the output string.
      sortedFields.forEach((field) => {
        output += `\nNumber of students in ${field}: ${allStudents[field].length}. List: ${allStudents[field].join(', ')}`;
      });
      // Send a response with a 200 (OK) status code and the formatted output string as the body.
      return response.status(200).send(output);
    } catch (error) {
      // Return 500 error status and error message if database is unavailable
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      // Get the major value from url
      // eslint-disable-next-line prefer-destructuring
      const major = request.params.major;

      // Call readDatabase method passing the database filepath from command line argument
      const allStudents = await readDatabase(process.argv[2]);

      // Return a 500 status and error message if the major is incorrect
      if (major !== 'CS' && major !== 'SWE') {
        return response.status(500).send('Major parameter must be CS or SWE');
      }

      // Set the list of students per field
      const studentsByMajor = allStudents[major];

      // Return the formatted response
      return response.status(200).send(`List: ${studentsByMajor.join(', ')}`);
    } catch (error) {
      // Return 500 error status and error message if database is unavailable
      return response.status(500).send('Cannot load the database');
    }
  }
}

// Export the StudentsController class as a default export,
// so it can be imported using 'import StudentsController
// from './StudentsController.js'' in other modules.
export default StudentsController;
