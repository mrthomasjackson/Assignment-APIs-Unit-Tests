var express = require('express');
var body_parser = require('body-parser');
var app = express();

//Config
var port = 80;

app.use(body_parser.json());

// testing basic route
app.get('/', function(req, res){
    res.sendFile('index.html', { root: 'views' }, function() {
        console.log('index.html loaded');
    });
});

app.use('/api', require('../routes/api.js')(express));

var server = app.listen(port, function(){
    console.log('Server is running on ', port);
});

module.exports = server;