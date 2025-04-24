const express = require('express');
const router = express.Router();
const { singleImage } = require('../../middleware/upload');
const { createMatch, getMatches } = require('../../controllers/brazil/matches');

router.post('/', singleImage, createMatch);
router.get('/', getMatches);

module.exports = router;