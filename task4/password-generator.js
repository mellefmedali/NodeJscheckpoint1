var generator  = require  ('generate-password')

var psw = generator.generateMultiple(20,{
    length : 5,
    uppercase : true,
    symbols : true,
    strict: true
})

console.log(psw)

var psw2 = generator.generateMultiple(20,{
    length : 5,
    uppercase : true,
    symbols : true,
    strict: false
})
console.log(psw2)
