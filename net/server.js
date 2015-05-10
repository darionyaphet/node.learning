var net = require('net');

var server = net.createServer(function(conn) {
    console.log('Client Connection ... ');
    conn.on('end', function() {
        console.log('Client Disconnected');
    });

}); 
