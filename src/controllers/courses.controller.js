const {Client} = require('pg');
const config = require('../config/config');
const catchAsync = require('../utils/catchAsync');

const getAllCourses = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const data = await client.query(`SELECT * FROM public."Course" ORDER BY "Id" ASC`);
    await client.end();
    res.send(data.rows);
});

const getCourseById = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const id = parseInt(req.params.id);
    const data = await client.query(`SELECT * FROM public."Course" WHERE "Course"."Id"= ${id}`);
    await client.end();
    res.send(data.rows);
});

module.exports = {
    getAllCourses,
    getCourseById,
}