
var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'work')));

app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.listen(port, function(){
    console.log("Server is listening on port "+port);
});