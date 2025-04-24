const express = require('express');
const router = express.Router();
const { singleImage } = require('../../middleware/upload');
const { createPlayer, getPlayers } = require('../../controllers/brazil/players');

router.post('/', singleImage, createPlayer);
router.get('/', getPlayers);

module.exports = router;