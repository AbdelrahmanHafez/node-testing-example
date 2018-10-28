const glob = require('glob');
const modelsPaths = glob.sync('./modules/**/*.model.js');
const path = require('path');

modelsPaths.forEach(relativePath => {
  const absolutePath = path.resolve(relativePath);
  require(absolutePath);
});