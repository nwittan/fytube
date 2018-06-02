var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

const Youtube = require('youtube-stream-url');

app.get('/video/*', function(req, res){
	var id = req.path;
	id = id.substring(7, id.length);
	id = 'https://www.youtube.com/watch?v=' + id;
	Youtube.getInfo({url: id})
  .then(video => { try {request(video['formats'][0]['url']).pipe(res);}catch(e){res.send("Please recheck  video id ! If it wasn't wrong, perhaps cause by video restriction !");}});
})
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});