const users = require('./controllers');
const jsonParser = require('body-parser').json();

module.exports = (app) => {
  app.post('/api/users/create/', jsonParser, users.create);
};