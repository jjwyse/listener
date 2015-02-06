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
   var body = JSON.stringify(req.body);
   var headers = JSON.stringify(req.headers);
   var webhookJson = {};
   webhookJson['body'] = body;
   webhookJson['headers'] = headers;
   console.log(webhookJson);
   res.end();
});
