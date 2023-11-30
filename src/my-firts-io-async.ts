var fs = require('fs')
let file = process.argv[2]
fs.readFile(file, 'utf8', (error: NodeJS.ErrnoException, data: Buffer) => {
    if(error) {
        console.error('Error de lectura del archivo')
        process.exit(1)
    }
    let lines = data.toString().split('\n').length - 1
    console.log(lines)
})
