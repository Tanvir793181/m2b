const BrazilAnalysis = require('../../models/brazil/Analysis');

exports.createAnalysis = async (req, res) => {
  try {
    const analysis = new BrazilAnalysis({
      title: req.body.title,
      description: req.body.description,
      photos: req.files.map(file => file.path)
    });
    await analysis.save();
    res.status(201).json(analysis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAnalyses = async (req, res) => {
  try {
    const analyses = await BrazilAnalysis.find().sort({ createdAt: -1 });
    res.json(analyses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};