// Import the 'fs' module for file system operations
const fs = require('fs');
const csvParser = require('csv-parser');

// Define a function to count students from a CSV file
function countStudents(fileName) {
  // Create a file path from the provided file name
  const filePath = `./${fileName}`;

  // Create an empty data container
  const studentsData = [];

  // Create a readable stream file
  fs.createReadStream(filePath)
    .on('error', () => {
      throw new Error('Cannot load the database');
    })
    .pipe(csvParser())
    .on('data', (data) => {
      studentsData.push(data);
    })
    .on('end', () => {
      let csCount = 0;
      const csStudents = [];
      let sweCount = 0;
      const sweStudents = [];

      console.log(`Number of students: ${studentsData.length}`);
      for (const row of studentsData) {
        if (row.field === 'CS') {
          csCount += 1;
          csStudents.push(row.firstname);
        } else if (row.field === 'SWE') {
          sweCount += 1;
          sweStudents.push(row.firstname);
        }
      }
      console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
    });
}
// Export the function
module.exports = countStudents;
