import { IncomingMessage, ServerResponse } from 'http';

var http = require('http');
var map = require('through2-map');

let server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.method != 'POST') {
    return res.end('send me a POST\n');
  }
  req
    .pipe(
      map(function (chunk: string) {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(res);
});
server.listen(Number(process.argv[2]));
