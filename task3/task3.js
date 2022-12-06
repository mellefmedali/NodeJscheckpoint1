var fs = require('fs')

fs.writeFile('welcome.txt','Hello Node!! \n',function (err) {
    if (err){
    console.error(err)
}
})
console.log('file created with input')