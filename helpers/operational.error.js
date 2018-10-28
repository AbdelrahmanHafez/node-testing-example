class OperationalError extends Error {
  constructor (...args) {
    super(args);
  }
}

module.exports = OperationalError;