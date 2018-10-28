const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: 'User', required: true },
  products: [{ type: String, trim: true }]
});

requestSchema.statics.add = require('./functions/requests.add.function');

mongoose.model('Request', requestSchema);