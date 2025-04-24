const express = require('express');
const router = express.Router();
const { arrayImages } = require('../../middleware/upload');
const { createUpdate, getUpdates } = require('../../controllers/madrid/updates');

router.post('/', arrayImages, createUpdate);
router.get('/', getUpdates);

module.exports = router;