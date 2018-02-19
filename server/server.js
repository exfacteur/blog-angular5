var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var winston = require('winston');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/'+ process.env.NODE_ENV + '.json');


app.use(cors());

app.use(bodyParser.json());

var api = require('./routes/api');
app.get('/api', function (req, res) {
  res.json({ 'apiversion': 'v1' });
});
app.use('/api/v1', api);

let server = app.listen(config.nodePort, ()=> {
  console.log('App Started on PORT' + config.nodePort );
});

module.exports = {
  app,
  server
};