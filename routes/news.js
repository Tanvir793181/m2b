const express = require('express');
const router = express.Router();
const { singleImage } = require('../middleware/upload');
const { createNews, getNews } = require('../controllers/news');

router.post('/', singleImage, createNews);
router.get('/', getNews);

module.exports = router;