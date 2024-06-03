// Import the 'fs' module for file system operations
import fs from 'fs';

// Define an asynchronous function to read and process data from a CSV file
async function readDatabase(filePath) {
  /* eslint-disable no-useless-catch */
  try {
    // Read the file asynchronously and await its content
    const data = await fs.promises.readFile(filePath, 'utf-8');

    // Trim leading and trailing white space from the file content
    // Split the content into an array of lines (rows)
    // Slice from the second element to exclude the header row
    const rows = data.trim().split('\n').slice(1, data.length);

    // Map each row to an array of its comma-separated values (columns)
    const studentsList = rows.map((row) => row.split(','));

    // Initialize an empty object to store students grouped by their fields
    const studentsByFields = {};

    // Loop in the student list and set firstname of student to the corresponding field key
    studentsList.forEach((student) => {
      const field = student[3];
      const firstName = student[0];

      // Initialize an empty array if no data for the field
      if (!studentsByFields[field]) {
        studentsByFields[field] = [];
      }
      // Append the student firstname in the value array
      studentsByFields[field].push(firstName);
    });

    // Return an object of arrays of the firstname of students per fields
    return studentsByFields;

  // Catch error and display error message if database doesn't load properly
  } catch (err) {
    throw err;
  }
}
/* eslint-enable no-useless-catch */
// Export the function so it can be imported and used in other modules
export default readDatabase;
