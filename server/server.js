//Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

// Server running
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('listening on port: ', port);
});