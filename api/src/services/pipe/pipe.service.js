// Initializes the `pipe` service on path `/pipe`
const createService = require('feathers-mongoose');
const createModel = require('../../models/pipe.model');
const hooks = require('./pipe.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pipe', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('pipe');

  service.hooks(hooks);
};
