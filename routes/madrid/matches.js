const express = require('express');
const router = express.Router();
const { singlePhoto } = require('../../middleware/upload');
const { createMatch, getMatches } = require('../../controllers/madrid/matches');

router.post('/', singlePhoto, createMatch);
router.get('/', getMatches);

module.exports = router;