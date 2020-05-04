const express = require('express');
const bodyParser = require('body-parser');
var methodOverride = require("method-override");

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

const musicRouter = require('./router/MusicRouter');
app.use(musicRouter);

module.exports = app;