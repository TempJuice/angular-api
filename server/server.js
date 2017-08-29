//Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 5000;


app.use(express.static('public'));

// Server running
app.listen(port, function () {
    console.log('listening on port: ', port);
});