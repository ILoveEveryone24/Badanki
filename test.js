
//Node test, not for use

const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

	res.setHeader('Contest-Type', 'text/html');

	let path = './static';
	switch(req.url){
		case '/':
			path += '/index.html';
			res.statusCode = 200;
			break;
		case '/home':
			path += '/home.html';
			res.statusCode = 200;
			break;
		case '/style.css':
			path += '/style.css';
			break;
		case '/Background.png':
			path += '/Background.png';
			break;
		default:
			break;
	}

	fs.readFile(path, (err, data) => {
		if(err){
			console.log(err);
			res.end();
		}
		else{
			res.end(data);
		}
	});

});

server.listen(8080, 'localhost', () => {
	console.log('Listening on port 8080');	
});
