const requests = require('./controllers');
const jsonParser = require('body-parser').json();

module.exports = (app) => {
  app.post('/api/requests/create/', jsonParser, requests.create);
};