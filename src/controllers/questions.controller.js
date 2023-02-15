const {Client} = require('pg');
const config = require('../config/config');
const catchAsync = require('../utils/catchAsync');


const getAllQuestions = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const data = await client.query(`SELECT * FROM public."Question" ORDER BY "Id" ASC`);
    await client.end();
    res.send(data.rows);
});

const getQuestionById = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const courseName = req.params.courseName;
    const chapterName = req.params.chapterName;
    const id = parseInt(req.params.id);
    const data = await client.query(`SELECT *
    FROM "Question", "Chapter", "Course"
    WHERE "Question"."chapter_id" = "Chapter"."Id" 
    AND "Chapter"."course_id" = "Course"."Id"
    AND "Chapter"."Chapter_name" = '${chapterName}'
	AND "Course"."Course_name" = '${courseName}'
	AND "Question"."Id" = '${id}'
    ORDER BY "Question"."Id" ASC;`);
    await client.end();
    res.send(data.rows);
});

const getQuestionsByCourseName = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const courseName = req.params.courseName;
    // console.log(typeof courseName);
    const data = await client.query(`SELECT *
    FROM "Question", "Chapter", "Course"
    WHERE "Question"."chapter_id" = "Chapter"."Id" 
    AND "Chapter"."course_id" = "Course"."Id"
    AND "Course"."Course_name" = '${courseName}'
    ORDER BY "Question"."Id" ASC;`);
    await client.end();
    res.send(data.rows);
});

const getQuestionsByChapterName = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const courseName = req.params.courseName;
    const chapterName = req.params.chapterName;
    const data = await client.query(`SELECT *
    FROM "Question", "Chapter", "Course"
    WHERE "Question"."chapter_id" = "Chapter"."Id" 
    AND "Chapter"."course_id" = "Course"."Id"
    AND "Chapter"."Chapter_name" = '${chapterName}'
	AND "Course"."Course_name" = '${courseName}'
    ORDER BY "Question"."Id" ASC; `);
    await client.end();
    res.send(data.rows);
});

module.exports = {
    getAllQuestions,
    getQuestionById,
    getQuestionsByCourseName,
    getQuestionsByChapterName,
}