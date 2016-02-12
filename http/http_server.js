var http = require('http');
var PORT = 8090;

var processor = function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\n');
};

var server = http.createServer(processor);

server.listen(PORT);
