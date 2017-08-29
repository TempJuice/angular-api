//Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = 5000;


app.use(express.static('server/public'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
})
// Server running
app.listen(port, function () {
    console.log('listening on port: ', port);
});