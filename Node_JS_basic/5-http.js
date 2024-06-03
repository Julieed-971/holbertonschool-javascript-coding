const http = require('http');
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

const app = http.createServer(async (request, response) => {
  try {
    // When the URL path is '/', display 'Hello Holberton School!' in the page body
    if (request.url === '/') {
      response.writeHead(200, { 'Content-type': 'text/plain' });
      response.write('Hello Holberton School!');
      response.end();
    // When the URL path is '/students', display the list of students in the page body  
    } else if (request.url === '/students') {
      const students = await getStudentData(process.argv[2]);
      response.writeHead(200, { 'Content-type': 'text/plain' });
      response.write(`This is the list of our students\n${students}`);
      response.end();
    }
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Server Error');
  }
});

app.listen(1245);

module.exports = app;
