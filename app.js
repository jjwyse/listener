const express = require('express');

const http = require('http');
const path = require('path');

const app = express();

// all environments
app.set('port', process.env.PORT || 31337);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
const httpServer = http.createServer(app);

httpServer.listen(app.get('port'), () => {
  console.log(`Listening for POSTs on port ${app.get('port')}`);
});

app.post('/', (req, res) => {
  console.log(JSON.stringify({
    body: req.body,
    header: req.headers,
    query: req.query
  }, null, 2));
  res.end();
});
