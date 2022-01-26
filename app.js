const express = require('express');
const path = require('path');
const sqlite = require('sqlite3').verbose();
const sequelize = require('./database');
const Post = require('./models/Post');
const home = require('./controllers/HomeController');
const board = require('./controllers/BoardController');
const post = require('./controllers/PostController');

sequelize.sync({force: true}).then(() => console.log('db is ready'));

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");

app.use(express.static('public'))

app.use('/', home);
app.use('/board', board)
app.use('/post', post)

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));