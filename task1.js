var fs = require('fs')

fs.writeFile('hello-world.js',`console.log('HELLO WORLD')`, function (err) {
    if (err) {
        return console.error(err)
    }
})
console.log('HELLO WORLD')