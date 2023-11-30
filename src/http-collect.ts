import { IncomingMessage } from "http"

var http = require('http')
var url = process.argv[2]
var body = ''

http.get(url, function (response
  : IncomingMessage) {
  response.on('data', function (chunk: string) {
    body += chunk
  })
  response.on('end', function () {
    console.log(body.length)
    console.log(body)
  })
})