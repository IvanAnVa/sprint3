var fs = require('fs')
var path = require('path')

let folder = process.argv[2]
let extension = '.' + process.argv[3]

fs.readdir(folder, function(error: string, files: []) {
    if(error) return console.error('Error de lectura')
    files.forEach(file => {
        if(path.extname(file) === extension) {
            console.log(file)
        }
    });
})