const reportError = require('../../../helpers/report.error');
const { User } = require('mongoose').models;

module.exports = async (req, res) => {
  try {
    // validation goes here

    const creationResult = await User.add({ user: req.body.user });
    return res.json(creationResult);
  }
  catch (err) {
    reportError(err, req, res);
  }
};