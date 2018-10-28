const reportError = require('../../../helpers/report.error');
const { Request } = require('mongoose').models;

module.exports = async (req, res) => {
  try {
    // validation goes here

    req.body.request.userId = req.user._id;

    const creationResult = await Request.add({ request: req.body.request });
    return res.json(creationResult);
  }
  catch (err) {
    reportError(err, req, res);
  }
};