const express = require('express');
const fs = require('fs').promises;

async function getStudentData(fileName) {
  // Create a file path from the provided file name

  try {
    // Read file asynchronously
    const data = await fs.readFile(fileName, 'utf-8');
    // Format file by removing leading and trailing white space and split in row list
    const rows = data.trim().split('\n');
    // Create list of array containing students
    const studentsList = rows.map((row) => row.split(','));
    // Create a list of students filtered by fields
    const csStudents = studentsList.filter((student) => student[3] === 'CS');
    const sweStudents = studentsList.filter((student) => student[3] === 'SWE');

    // Create students firstname list and concatenate in a string separated by commas
    const csFirstNameJoined = csStudents.map((student) => student[0]).join(', ');
    const sweFirstNameJoined = sweStudents.map((student) => student[0]).join(', ');

    // Return formatted students data
    return [
      `Number of students: ${csStudents.length + sweStudents.length}`,
      `Number of students in CS: ${csStudents.length}. List: ${csFirstNameJoined}`,
      `Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNameJoined}`,
    ].join('\n');
  } catch (err) {
    return 'Cannot load the database';
  }
}
const app = express();

app.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  response.status(200)
    .send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  try {
    const students = await getStudentData(process.argv[2]);
    response.status(200).send(`This is the list of our students\n${students}`);
  } catch (error) {
    response.status(500).send('Server Error');
  }
});

app.listen(1245);

module.exports = app;
