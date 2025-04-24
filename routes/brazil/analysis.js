const express = require('express');
const router = express.Router();
const { arrayImages } = require('../../middleware/upload');
const { createAnalysis, getAnalyses } = require('../../controllers/brazil/analysis');

router.post('/', arrayImages, createAnalysis);
router.get('/', getAnalyses);

module.exports = router;