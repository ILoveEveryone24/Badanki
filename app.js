const express = require('express');
const mongoose = require('mongoose');
const Cards = require('./models/cards');

const app = express();

const dbURI = 'mongodb+srv://John:test123@anki.scz7doe.mongodb.net/Anki?retryWrites=true&w=majority';
mongoose.connect(dbURI)
	.then((result) => app.listen(8080))
	.catch((err) => console.log(err));


app.use((req, res, next) => {
	console.log('new request');
	console.log('path: ' + req.path);
	next();
});

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.sendFile('./static/index.html', {root:__dirname});
});

app.get('/add-card', (req, res) => {
	const cards = new Cards({
		title: 'FFXIV card',
		text: 'konnichiwa',
		ans: 'hello'
	});
	
	cards.save()
	.then((result) => {
		res.send(result)
	})
	.catch((err) => {
		console.log(err);
	});
});

app.get('/home', (req, res) => {
	res.sendFile('./static/home.html', {root:__dirname});
});

app.get('/studying', (req, res) => {
	res.sendFile('./static/studying.html', {root:__dirname});
});

app.use((req, res) => {
	res.status(301).sendFile('./static/index.html', {root:__dirname});
});
