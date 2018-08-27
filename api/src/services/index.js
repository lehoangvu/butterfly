const users = require('./users/users.service.js');
const site = require('./site/site.service.js');
const pipe = require('./pipe/pipe.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(site);
  app.configure(pipe);
};
