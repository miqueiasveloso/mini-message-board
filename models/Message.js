const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date
});

module.exports = mongoose.model('Message', MessageSchema);
