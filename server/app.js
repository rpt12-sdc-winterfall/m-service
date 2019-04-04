const express = require('express');
// bundled with express by default
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const path = require('path');
const books = require('./database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client')));
app.use(bodyParser.json());

app.get('/books/:id', (req, res) => {
  books.retrieve(req.params.id, (err, doc) => {
    res.send(doc);
  });
});

module.exports = app;
