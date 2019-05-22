const express = require('express');
// bundled with express by default
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const path = require('path');
const { Book } = require('./database/index.js');

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(path.join(__dirname, '/../client')));
app.use('/:id', express.static(path.join(__dirname, '/../client')));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/books/:id', (req, res) => {
  Book.findOne({ id: req.params.id }).exec()
    .then((result) => {
      if (result === null) {
        res.send('This book doesn\'t exist!');
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.send('something went wrong...');
    });
});

app.post('/books', (req, res) => {
  const book = new Book(req.body);

  book.save()
    .then(() => {
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.send('something went wrong...');
    });
});

app.patch('/books/:id', jsonParser, (req, res) => {
  Book.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {
      useFindAndModify: false,
      new: true,
    },
  ).exec()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send('something went wrong...');
    });
});

app.delete('/books/:id', (req, res) => {
  Book.deleteOne({ id: req.params.id })
    .then(() => {
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.send('something went wrong...');
    });
});

module.exports = app;
