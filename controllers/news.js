const News = require('../models/News');

exports.createNews = async (req, res) => {
  try {
    const news = new News({
      ...req.body,
      image: req.file.path
    });
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};