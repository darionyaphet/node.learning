var http = require('http');
var PORT = 8080;

var processor = function(request,response){
    console.log("Working ...");
};

var server = http.createServer(processor);

server.listen(PORT);
