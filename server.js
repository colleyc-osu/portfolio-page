var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
const { type } = require('os');
const { EDESTADDRREQ } = require('constants');
var port = process.env.PORT || 3000; 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.status(200).render('login');
});

app.get('*', function (req, res) {
    res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});