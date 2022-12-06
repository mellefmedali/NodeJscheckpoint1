var fs = require('fs')

fs.readFile('welcome.txt',function (err,data) {
    if (err) {
        console.error(err)
    }
    console.log(data.toString())
})