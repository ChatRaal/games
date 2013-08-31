 var express = require('express')
  , http = require('http')
  , path = require('path');
var _ = require('underscore');

var app = express();
var scores = [];

app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, '..')));
});

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.get('/score', function(req, res) {
  res.json(scores);
});

app.post('/score', function(req, res) {
  if(!req.body.hasOwnProperty('name') || 
     !req.body.hasOwnProperty('score')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newScore = {
    name : req.body.name,
    score : req.body.score
  };

  scores.push(newScore);
  scores.sort(function(a,b) {
	  	if (a.score != b.score) {
	  		return b.score - a.score;
	  	} else {
	  		if (a.name < b.name) 
	  			return -1;
	  		if (b.name < a.name)
	  			return 1;
	  		return 0;
	  	}
	});
  scores = _.uniq(scores, true, function(a) {return a.name+a.score;});
  res.json(scores);
});



