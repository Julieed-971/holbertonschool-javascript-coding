//  create a small HTTP server using the http module
const http = require('http');

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/plain' });
  response.write('Hello Holberton School!');
  response.end();
});

app.listen(1245);

module.exports = app;
