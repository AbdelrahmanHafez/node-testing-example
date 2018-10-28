const OperationalError = require('../../../helpers/operational.error');

async function createOrder ({ order }) {
  const { User, Request, Order } = require('mongoose').models;

  const request = await Request.findOne({ _id: order.requestId, userId: order.userId });
  if (!request) throw new Error('Request does not exist.');

  const createdOrder = await Order.create(order);
  return { code: 1, message: 'Created order successfully.', orderId: createdOrder._id };
}

module.exports = createOrder;