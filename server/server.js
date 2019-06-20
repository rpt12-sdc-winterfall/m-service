/* eslint-disable import/no-extraneous-dependencies */
require('newrelic');
const express = require('express');
// bundled with express by default
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const { Book } = require('./database/index');

const app = express();

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`the server listening on port ${port}!`));

app.use('/:id', express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/books/:id', (req, res) => {
  Book.findOne({ id: Number(req.params.id) })
    .then((result) => {
      if (result === null) {
        res.status(404).send('This book doesn\'t exist!');
      } else {
        res.status(200).send(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('something went wrong...');
    });
});

const jsonParser = bodyParser.json();
app.post('/books', jsonParser, (req, res) => {
  const book = new Book(req.body);

  book.save()
    .then(() => {
      res.status(201).end();
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
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
      res.send('something went wrong...');
    });
});
