const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, trim: true, required: true, unique: true }
});

userSchema.statics.add = require('./functions/users.add.function');

mongoose.model('User', userSchema);