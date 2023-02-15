const express = require('express');
const coursesController = require('../../controllers/courses.controller');

const router = express.Router();

router.get('/', coursesController.getAllCourses);
router.get('/:id', coursesController.getCourseById);

module.exports = router;