const assert = require('assert');
const { Order, Request } = require('mongoose').models;
const createTestingScenario = require('../../../test/create.scenario');

describe('Order.add(...)', () => {
  let requestId;

  beforeEach(async () => {
    const res = await createTestingScenario({ request: true });
    requestId = res.requestId;
  });

  it('Creates an order successfully', async () => {
    const { code, message, orderId } = await Order.add({ order: { requestId } });

    assert.equal(code, 1);
    assert.equal(message, 'Created order successfully.');


    const order = await Order.findOne({ _id: orderId }).select('_id').lean();
    assert.ok(order);
  });


  it('Fails when user does not own the request');
});