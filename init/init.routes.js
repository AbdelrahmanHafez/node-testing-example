const glob = require('glob');
const path = require('path');
const routesPaths = glob.sync('./modules/**/*.routes.js');

module.exports = (app) => {
  routesPaths.forEach(relativePath => {
    const absolutePath = path.resolve(relativePath);

    require(absolutePath)(app);
  });
};