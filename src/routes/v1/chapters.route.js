const express = require('express');
const chaptersController = require('../../controllers/chapters.controller');

const router = express.Router();

router.get('/', chaptersController.getAllChapters);
router.get('/:id', chaptersController.getChapterById);


module.exports = router;