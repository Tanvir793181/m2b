const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  club: { type: String, required: true },
  age: { type: Number, required: true },
  position: { type: String, required: true },
  photo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MadridPlayer', PlayerSchema);