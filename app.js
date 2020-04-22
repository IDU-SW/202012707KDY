const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

const musicRouter = require('./router/MusicRouter');
app.use(musicRouter);

module.exports = app;