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

app.get('/', function(req, res){
    // The URL we will scrape from - in our example Anchorman 2.

    url = 'http://www.imdb.com/title/tt1229340/';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};
        }
    })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});