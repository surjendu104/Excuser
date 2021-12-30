var express = require('express');
var excusesRepository = require('./excuseRepository');
var app = express();
var port = process.env.PORT || 3000;



app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
    res.send('<h1>Excuse Generator</h1>');
});

app.get('/v1/excuse/:num?', function (req, res) {
    res.send(excusesRepository.getRandom(req.params.num || 1));
});

app.get('/v1/excuse/id/:num', function(req, res) {
    res.send(excusesRepository.getByID(req.params.num));
});

app.get('/v1/excuse/:category/:num?', function (req, res) {
    res.send(excusesRepository.getByCategory(req.params.category, req.params.num || 1));
});

app.listen(port, function () {
    console.log('Server running on port', port);
})