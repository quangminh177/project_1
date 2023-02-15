const express = require('express');
const coursesRouter = require('./courses.route');
const chaptersRouter = require('./chapters.route');
const questionsRouter = require('./questions.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/courses',
    route: coursesRouter,
  },
  {
    path: '/chapters',
    route: chaptersRouter,
  },
  {
    path: '/questions',
    route: questionsRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
