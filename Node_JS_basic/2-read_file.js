// Import the 'fs' module for file system operations
const fs = require('fs');
// const parse = require('csv-parse/sync');

// Define a function to count students from a CSV file
function countStudents(fileName) {
  // Create a file path from the provided file name
  const filePath = `./${fileName}`;

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const rows = fileContent.trim().split('\n');
    const studentsList = rows.map((row) => row.split(','));

    const keys = studentsList[0];
    const studentsData = studentsList.slice(1).map((values) => {
      const students = {};
      keys.forEach((key, index) => {
        students[key] = String(values[index]);
      });
      return students;
    });

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
// Export the function
module.exports = countStudents;
