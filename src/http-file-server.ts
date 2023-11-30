import { IncomingMessage, ServerResponse } from 'http';

var http = require('http');
var fs = require('fs');

let server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));

// let port = process.argv[2];
// let file = process.argv[3];

// http
//   .createServer(function (request: IncomingMessage, response: ServerResponse) {
//     fs.createTeadStream(file).pipe(response);
//   })
//   .listen(+port, function () {
//     console.log('Server listening on http://localhost:%s', port);
//   });
