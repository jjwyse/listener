var express = require('express');

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 31337);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
var httpServer = http.createServer(app);

httpServer.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

app.post('/', function(req, res) {
   var webhookJson = {};
   webhookJson['body'] = req.body;
   webhookJson['headers'] = req.headers;
   webhookJson['query'] = req.query;
   console.log(JSON.stringify(webhookJson, null, 2));
   res.end();
});
