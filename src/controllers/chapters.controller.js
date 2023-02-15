const {Client} = require('pg');
const config = require('../config/config');
const catchAsync = require('../utils/catchAsync');

const getAllChapters = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const data = await client.query(`SELECT * FROM public."Chapter" ORDER BY "Id" ASC`);
    await client.end();
    res.send(data.rows);
})

const getChapterById = catchAsync(async (req, res) => {
    const client = new Client(config.db);
    await client.connect();
    const id = parseInt(req.params.id);
    const data = await client.query(`SELECT * FROM public."Chapter" WHERE "Chapter"."Id"= ${id}`);
    await client.end();
    res.send(data.rows);
});

module.exports = {
    getAllChapters,
    getChapterById,
}