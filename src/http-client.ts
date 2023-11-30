import { IncomingMessage } from "http"

var http = require('http')

http.get(process.argv[2], function(response: IncomingMessage) {

    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)