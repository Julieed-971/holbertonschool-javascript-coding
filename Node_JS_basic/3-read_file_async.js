// Import the 'fs' module for file system operations
const fs = require('fs').promises;

// Define a function to count students from a CSV file
async function countStudents(fileName) {
  // Create a file path from the provided file name
  const filePath = `./${fileName}`;

  try {
    // Read file asynchronously
    const data = await fs.readFile(filePath, 'utf-8');
    // Format file by removing leading and trailing white space and split in row list
    const rows = data.trim().split('\n');
    // Create list of array containing students
    const studentsList = rows.map((row) => row.split(','));
    // Create a list of students filtered by fields
    const csStudents = studentsList.filter((student) => student[3] === 'CS');
    const sweStudents = studentsList.filter((student) => student[3] === 'SWE');

    // Display total number of students
    console.log(`Number of students: ${csStudents.length + sweStudents.length}`);

    // Create students firstname list and concatenate in a string separated by commas
    const csFirstNameJoined = csStudents.map((student) => student[0]).join(', ');
    const sweFirstNameJoined = sweStudents.map((student) => student[0]).join(', ');

    console.log(`Number of students in CS: ${csStudents.length}. List: ${csFirstNameJoined}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNameJoined}`);

  // catch error and display error message if database doesn't load properly
  } catch (err) {
    console.error('Cannot load the database', err);
  }
}
// Export the function
module.exports = countStudents;
