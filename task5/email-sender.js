var nodemailer = require('nodemailer')
var email = 'dalimellef.temp@gmail.com'

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'dalimellef.temp@gmail.com',
        pass: 'wgwqbkmlwcgsncns'
    }
})

var mailOptions = {
    from : email,
    to : 'dalimellef@gmail.com',
    subject : 'nodeJS checkpoint',
    text : 'that is the content'
};

transporter.sendMail(mailOptions,function (err,info) {
    if (err){
        console.error(err)
    } else {
        console.log('Email sent to : ' + info.response)
    }
})
