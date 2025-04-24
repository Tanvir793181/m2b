const BrazilPlayer = require('../../models/brazil/Player');

exports.createPlayer = async (req, res) => {
  try {
    const player = new BrazilPlayer({
      ...req.body,
      image: req.file.path
    });
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await BrazilPlayer.find().sort({ createdAt: -1 });
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};