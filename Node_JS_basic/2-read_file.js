// Import the 'fs' module for file system operations
const fs = require('fs');
// const parse = require('csv-parse/sync');

// Define a function to count students from a CSV file
function countStudents(fileName) {
  // Create a file path from the provided file name
  const filePath = `./${fileName}`;

  try {
    // Read the content of the csv file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // Format file by removing leading and trailing white space and split in row list
    const rows = fileContent.trim().split('\n');
    // Create list of array containing students
    const studentsList = rows.map((row) => row.split(','));
    // Build array of keys to build the json data
    const keys = studentsList[0];
    // Create json data by mapping through values and assigning them to corresponding keys
    const studentsData = studentsList.slice(1).map((values) => {
      const students = {};
      keys.forEach((key, index) => {
        students[key] = String(values[index]);
      });
      return students;
    });

    // Initialize variables to count number of students in each field
    let csCount = 0;
    const csStudents = [];
    let sweCount = 0;
    const sweStudents = [];

    // Count number of total students
    console.log(`Number of students: ${studentsData.length}`);
    // Loop over students json data and count number of students by fields
    for (const row of studentsData) {
      // Create arrays of number of students by fields with their names
      if (row.field === 'CS') {
        csCount += 1;
        csStudents.push(row.firstname);
      } else if (row.field === 'SWE') {
        sweCount += 1;
        sweStudents.push(row.firstname);
      }
    }

    // Display results
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);

    // catch error and display error message if database doesn't load properly
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
// Export the function
module.exports = countStudents;
