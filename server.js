var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
const { type } = require('os');
const { EDESTADDRREQ } = require('constants');
var port = process.env.PORT || 3000;

var projects = require('./JSONs/projectsList.json');
var positions = require('./JSONs/positionsList.json');
var degrees = require('./JSONs/degreesList.json');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));


app.get('/', function(req, res, next) {
	res.status(301).redirect('/portfolio/');
	next();
});

app.get('/portfolio/', function(req, res, next) {
	res.status(200).render('portfolio', {projects});
});

app.get('/experience/', function(req, res, next) {
	res.status(200).render('experience', {positions});
});

app.get('/education/', function(req, res, next) {
	res.status(200).render('education', {degrees});
});

app.get('/summary/', function(req, res, next) {
	res.status(200).render('summary');
});


app.get('/portfolio/:proj/', function(req, res, next) {
	var proj = req.params.proj;
	if (projects[proj]) {
		res.status(301).redirect('/:proj/demo/');
		next();
	}
	else {
		next();
	}
});

app.get('/portfolio/:proj/demo', function(req, res, next) {
	var proj = req.params.proj;
	if(projects[proj]) {
		res.status(200).render('projectdemo', projects[proj]);
	}
	else {
		next();
	}
});

app.get('/portfolio/:proj/code', function(req, res, next) {
	var proj = req.params.proj;
	if(projects[proj]) {
		res.status(200).render('password');
	}
	else {
		next();
	}
});

app.post('/portfolio/:proj/code/sendPwd', function(req, res, next) {
	if (req.body && req.body.password) {
		//actually checking pwd
		if (req.body.password == "####") {
			if (project[proj]) {
				res.status(200).render('projectcode', projects[proj]);
			}
			else {
				next();
			}
		}
		else {
			//
		}
	}
	else {
		res.status(400);
	}
});


app.get('*', function (req, res) {
	res.status(404).render('404');
});

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});