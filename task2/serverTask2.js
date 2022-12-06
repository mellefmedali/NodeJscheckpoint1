var http = require('http');
var data = '<h1>Hello Node!!!!</h1>\n'

http.createServer(function (request, response) {
    console.log("Request for " , request.url," received.");
    response.writeHead(200, {'Content-Type':'text/html'} )
    response.write(data)
    response.end();
}).listen(3000);

console.log('Server running at http://localhost:3000/');