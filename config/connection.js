const http = require('http');
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, World\n');
});
// Listen on port 3006, IP defaults to 127.0.0.1
server.listen(3006, () => {
  console.log('Server running at http://127.0.0.1:3006/');
});
module.exports = server;

