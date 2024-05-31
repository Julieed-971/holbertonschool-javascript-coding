// Import the 'fs' module for file system operations
const fs = require('fs').promises;
const csvParser = require('csv-parser');

// Define a function to count students from a CSV file
async function countStudents(fileName) {
  // Create a file path from the provided file name
  const filePath = `./${fileName}`;

  try {
    // Create a readable stream file
    const csvData = await fs.readFile(filePath, 'utf-8');
    const studentsData = await new Promise((resolve, reject) => {
      const data = [];
      const readableStream = csvParser();

      readableStream
        .on('data', (row) => data.push(row))
        .on('end', () => resolve(data))
        .on('error', (err) => reject(err));
      readableStream.write(csvData);
      readableStream.end();
    });

    // Initialize variables to count number of students in each field
    let csCount = 0;
    const csStudents = [];
    let sweCount = 0;
    const sweStudents = [];
    // Count and display number of total students
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
  } catch (err) {
    console.error('Cannot load the database', err);
  }
}
// Export the function
module.exports = countStudents;
