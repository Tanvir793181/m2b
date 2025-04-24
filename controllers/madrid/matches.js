const MadridMatch = require('../../models/madrid/Match');

exports.createMatch = async (req, res) => {
  try {
    const match = new MadridMatch({
      homeTeam: req.body.homeTeam,
      awayTeam: req.body.awayTeam,
      date: req.body.date,
      venue: req.body.venue,
      photo: req.file?.path
    });
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMatches = async (req, res) => {
  try {
    const matches = await MadridMatch.find().sort({ date: -1 });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};