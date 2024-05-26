// Import the 'fs' module for file system operations
const fs = require('fs');

// Define a function to count students from a CSV file
function countStudents(fileName) {
  // Create a file path from the provided file name
  const filePath = `./${fileName}`;

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    // If the file doesn't exist, throw an error
    throw new Error('Cannot load the database');
  } else {
    // If the file exists, read its content synchronously
    const csvData = fs.readFileSync(filePath, 'utf8');

    // Split the CSV data into rows
    const rows = csvData.trim().split('\n');
    // Remove the first row (header) and split it into columns
    const header = rows.shift().split(',');

    // Initialize an empty array to hold the data
    const data = {
      total: 0,
      fields: {},
    };

    // Loop over each row
    for (const row of rows) {
      // Check if the row is empty
      if (row.trim() !== '') {
      // Split the row into values
        const values = row.split(',');
        const field = values[header.indexOf('field')];

        // Increment total students count
        data.total += 1;

        // Initialize field data if not already done
        if (!data.fields[field]) {
          data.fields[field] = {
            count: 0,
            students: [],
          };
        }
        data.fields[field].count += 1;
        data.fields[field].students.push(values[header.indexOf('firstname')]);
      }
    }
    console.log(`Total number of students: ${data.total}`);
    Object.entries(data.fields).forEach(([field, fieldData]) => {
      console.log(`Number of students in ${field}: ${fieldData.count}. List: ${fieldData.students.join(', ')}`);
    });
  }
}

// Export the function
module.exports = countStudents;
