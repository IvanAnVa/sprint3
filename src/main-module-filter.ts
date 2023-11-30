var filterFn = require('./filter')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err: NodeJS.ErrnoException | null, list: string []) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file: string) {
    console.log(file)
  })
})