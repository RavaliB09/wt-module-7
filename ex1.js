var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, { 'content-Type': 'text/html' });
	res.write('<h1>welcome to ola booking<h1>');
	res.end();
	console.log("connecting");

}).listen(8080);