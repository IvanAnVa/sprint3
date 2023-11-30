import { buffer } from 'stream/consumers';

var http = require('http');
var bl = require('bl');
let results: [] = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) console.log(results[i]);
}
function httpGet(index: number) {
  http.get(
    process.argv[2 + index],
    function (response: { pipe: (arg0: any) => void }) {
      response.pipe(
        bl(function (err: NodeJS.ErrnoException, data: Buffer) {
          if (err) {
            return console.error(err);
          } else {
            results[index] = data.toString();
          }
          if (count === 3) {
            printResults();
          }
        })
      );
    }
  );
}

// var urls = process.argv.slice(2)
// var count = urls.length;

// var results: [] = [];

// urls.forEach((url, index) => {
//     http.get(url, (res: { pipe: (arg0: any) => void; }) => {
//         res.pipe(bl((err: NodeJS.ErrnoException, data: string) => {
//             if (err) throw err;

//             results[i] = data.toString();

//             count--;

//             if (count == 0) {
//                 results.forEach((result) => {
//                     console.log(result)
//                 });
//             }
//         }))
//     })
// })
