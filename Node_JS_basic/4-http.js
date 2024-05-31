//  create a small HTTP server using the http module
const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/plain' });
  response.write('Hello Holberton School!');
  response.end();
});

server.listen(1245);
