const now = require('performance-now');
const { MongoClient } = require('mongodb');
const { CreateFakeDocument } = require('./CreateFakeDocument');

let fakeData;
let batches = 0;
let start;
const generate = function generate(db, startingPoint, endingPoint) {
  fakeData = [];

  batches += 1;

  if (batches === 1001) {
    console.log(`the whole process took ${Math.floor((now() - start).toFixed(0) / 1000)} seconds`);
    return;
  }

  console.log(`Starting the data generation process from ${startingPoint} to ${endingPoint}`);
  for (let i = startingPoint; i < endingPoint; i += 1) {
    fakeData.push(CreateFakeDocument(i));
  }

  db.collection('books').insertMany(fakeData, {
    ordered: false,
  })
    .then(() => {
      generate(db, endingPoint, endingPoint + 10000);
    })
    .catch((err) => {
      console.log(err);
    });
};


const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true })
  .then((client) => {
    console.log('Connected successfully to server');
    const db = client.db('books');
    start = now();
    generate(db, 0, 10000);
  })
  .catch((err) => {
    console.log(err);
  });
