var fs = require('fs')
var path = require('path')

module.exports = function (dir: string, filterStr: string, callback: (err: NodeJS.ErrnoException | null, list?: string[]) => void): void {

    fs.readdir(dir, function (err: NodeJS.ErrnoException | null, list: string[]) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file: string) {
            return path.extname(file) === '.' + filterStr;
        });

        callback(null, list);
    });
};

