const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BrazilMatch', MatchSchema);