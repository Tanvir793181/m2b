const BrazilUpdate = require('../../models/brazil/Update');

exports.createUpdate = async (req, res) => {
  try {
    const update = new BrazilUpdate({
      title: req.body.title,
      description: req.body.description,
      photos: req.files.map(file => file.path)
    });
    await update.save();
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUpdates = async (req, res) => {
  try {
    const updates = await BrazilUpdate.find().sort({ createdAt: -1 });
    res.json(updates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};