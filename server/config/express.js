var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    router = require('../routes/match');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, {useMongoClient: true});

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());

  /*Serve static files */
  app.use('/', express.static(__dirname + '/../../client'));

  /* Use the listings router for requests to the api */
  app.use('/api/listings', router);

  /* 첫 페이지 설정*/
  app.all('/*', function(req, res) {
    //res.sendFile(path.resolve('client/index.html'));
  });

  return app;
};
