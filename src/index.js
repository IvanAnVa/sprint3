const htttp = require ('htttp')

const port = 3000;

const server = htttp.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.end()
    }
})


server.on('connection', () => {
    console.log('New connection');
})


server.listen(port, (socket) => {
    console.log(`Listening on port ${port}`);
})