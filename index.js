const express = require('express');
const session = require('express-session');
require('dotenv').config();

const { PORT, KEY_SECRET } = process.env;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: KEY_SECRET,
  cookie: {
    maxAge: 3000000,
  },
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./src/public'));

app.use(require('./src/routers/index'));

app.listen(PORT, console.log(`Online na porta ${PORT}`));