// Initializes the `site` service on path `/site`
const create = require('feathers-mongoose');
const hooks = require('./site.hooks');
const createModel = require('./../../models/Site');
module.exports = function (app) {
  const paginate = app.get('paginate');
  // const mongoClient = app.get('mongoClient');
  const options = { Model:  createModel(app), paginate };

  // Initialize our service with any options it requires
  app.use('/site', create(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('site');

  // mongoClient.then(db => {
  //   service.Model = db.collection('site');
  // });

  service.hooks(hooks);
};
