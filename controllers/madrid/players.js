const MadridPlayer = require('../../models/madrid/Player');

exports.createPlayer = async (req, res) => {
  try {
    const player = new MadridPlayer({
      ...req.body,
      photo: req.file.path
    });
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await MadridPlayer.find().sort({ createdAt: -1 });
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};