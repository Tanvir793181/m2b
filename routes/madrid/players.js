const express = require('express');
const router = express.Router();
const { singlePhoto } = require('../../middleware/upload');
const { createPlayer, getPlayers } = require('../../controllers/madrid/players');

router.post('/', singlePhoto, createPlayer);
router.get('/', getPlayers);

module.exports = router;