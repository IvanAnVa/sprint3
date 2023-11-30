import { IncomingMessage, ServerResponse } from 'http';
import { UrlWithParsedQuery } from 'url';

var http = require('http');
const url = require('url');

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET') {
      const parsedUrl = url.parse(req.url!, true);

      if (parsedUrl.pathname === '/api/parsetime') {
        handleParseTimeRequest(parsedUrl, res);
      } else if (parsedUrl.pathname === '/api/unixtime') {
        handleUnixTimeRequest(parsedUrl, res);
      } else {
        send404Response(res);
      }
    } else {
      send404Response(res);
    }
  }
);

function handleParseTimeRequest(
  parsedUrl: UrlWithParsedQuery,
  res: ServerResponse
) {
  const iso = parsedUrl.query.iso as string;

  if (iso) {
    const date = new Date(iso);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    sendJsonResponse(res, response);
  } else {
    send400Response(res, 'ISO parameter is missing');
  }
}

function handleUnixTimeRequest(
  parsedUrl: UrlWithParsedQuery,
  res: ServerResponse
) {
  const iso = parsedUrl.query.iso as string;

  if (iso) {
    const date = new Date(iso);
    const response = {
      unixtime: date.getTime(),
    };

    sendJsonResponse(res, response);
  } else {
    send400Response(res, 'ISO parameter is missing');
  }
}

function sendJsonResponse(res: ServerResponse, data: any) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function send400Response(res: ServerResponse, message: string) {
  res.writeHead(400, { 'Content-Type': 'text/plain' });
  res.end(message);
}

function send404Response(res: ServerResponse) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
}

const port = Number(process.argv[2]);
server.listen(port);

// function parseTime(time: Date) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds(),
//   };
// }
// function unixtime(time: Date) {
//   return { unixtime: time.getTime() };
// }
// let server = http.createServer(function (
//   req: IncomingMessage,
//   res: ServerResponse
// ) {
//   let parsedUrl = url.parse(req.url || '', true);
//   let time = new Date(parsedUrl.query.iso);
//   let result;
//   if (/^\/api\/parseTime/.test(req.url || '')) {
//     result = parseTime(time);
//   } else if (/^\/api\/unixtime/.test(req.url || '')) {
//     result = unixtime(time);
//   }
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(result));
//   } else {
//     res.writeHead(404);
//     res.end();
//   }
// });
// server.listen(Number(process.argv[2]));

// let port = process.argv[2];

// let parseTime = function (time: Date) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds(),
//   };
// };
// function unixTime(time: Date) {
//   return { unixTime: time.getTime() };
// }
// let parseQuery = function (url: {
//   pathname: any;
//   query: { iso: string | number | Date };
// }) {
//   switch (url.pathname) {
//     case '/api/parseTime':
//       return parseTime(new Date(url.query.iso));
//     case '/api/unixtime':
//       return unixTime(new Date(url.query.iso));
//     default:
//       return 'introducir una url valida';
//   }
// };
// http
//   .createServer(function (request: IncomingMessage, response: ServerResponse) {
//     if (request.method === 'GET') {
//       response.writeHead(200, { 'Content-Type': 'application/json' });
//       url: String = url.parse(request.url, true);
//       response.end(JSON.stringify(parseQuery(url)));
//     } else {
//       response.writeHead(405);
//       response.end();
//     }
//   })
//   .listen(+port, function () {
//     console.log('Server listening on http://localhost:%s', port);
//   });
