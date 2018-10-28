const { Order } = require('mongoose').models;
const reportError = require('../../../helpers/report.error');

module.exports = async (req, res) => {
  try {
    // validation goes here

    req.body.order.userId = req.user._id;
    const creationResult = await Order.add({ order: req.body.order });
    return res.json(creationResult);
  }
  catch (err) {
    reportError(err, req, res);
  }
};