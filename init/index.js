require('./init.database');
require('./init.mongoose.models');
const app = require('./init.express');
require('./init.routes')(app);