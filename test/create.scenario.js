const { User, Request, Order, Payment } = require('mongoose').models;

async function createTestingScenario ({ user = false, request = false, order = false }) {
  if (order) request = true;
  if (request) user = true;

  let userId;
  let requestId;
  let orderId;

  if (user) {
    const res = await User.add({ username: 'Hafez' });
    userId = res.userId;
  }

  if (request) {
    const res = await Request.add({ request: { userId, products: ['product A', 'product B'] } });
    requestId = res.requestId;
  }

  if (order) {
    const res = await Order.add({ order: { requestId, delivery: { country: 'Japan', city: 'Tokyo' } } });
    orderId = res.orderId;
  }

  return { userId, requestId, orderId };
}


module.exports = createTestingScenario;