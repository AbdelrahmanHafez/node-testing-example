const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: 'User', required: true },
  requestId: { type: Schema.ObjectId, ref: 'Request', required: true },
  products: [{ type: String, trim: true }]
});

orderSchema.statics.add = require('./functions/orders.add.function');

mongoose.model('Order', orderSchema);