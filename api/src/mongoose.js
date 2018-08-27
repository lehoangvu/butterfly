const url = require('url');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = function (app) {
  const config = app.get('mongodb');
  const promise = mongoose.connect(config, {useNewUrlParser: true})
  app.set('mongooseClient', mongoose);
};
