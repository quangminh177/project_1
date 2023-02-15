const express = require('express');
const questionsController = require('../../controllers/questions.controller');

const router = express.Router();

router.get('/', questionsController.getAllQuestions);
router.get('/:courseName', questionsController.getQuestionsByCourseName);
router.get('/:courseName/:chapterName', questionsController.getQuestionsByChapterName);
router.get('/:courseName/:chapterName/:id', questionsController.getQuestionById);


module.exports = router;