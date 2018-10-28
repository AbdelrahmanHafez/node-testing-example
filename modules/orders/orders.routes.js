const orders = require('./controllers');
const jsonParser = require('body-parser').json();

module.exports = (app) => {
  app.post('/api/orders/create/', jsonParser, orders.create);
};