var express = require('express');
var app     = express();

app.get('/' , function(request,respone){
       respone.send("Hello World");
});


app.listen(8080);
