const fake = require('faker');
const now = require('performance-now');
const { createObjectCsvWriter } = require('csv-writer');
const moment = require('moment');

const csvWriter = createObjectCsvWriter({
  path: './books.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'title', title: 'title' },
    { id: 'author', title: 'author' },
    { id: 'description', title: 'description' },
    { id: 'image', title: 'image' },
    { id: 'rating_five', title: 'rating_five' },
    { id: 'rating_four', title: 'rating_four' },
    { id: 'rating_three', title: 'rating_three' },
    { id: 'rating_two', title: 'rating_two' },
    { id: 'rating_one', title: 'rating_one' },
    { id: 'reviews', title: 'reviews' },
    { id: 'kindle', title: 'kindle' },
    { id: 'amazon', title: 'amazon' },
    { id: 'audible', title: 'audible' },
    { id: 'barnesAndNoble', title: 'barnesAndNoble' },
    { id: 'walmart', title: 'walmart' },
    { id: 'apple', title: 'apple' },
    { id: 'google', title: 'google' },
    { id: 'abebooks', title: 'abebooks' },
    { id: 'bookDesository', title: 'bookDesository' },
    { id: 'indigo', title: 'indigo' },
    { id: 'alibris', title: 'alibris' },
    { id: 'betterWorldBooks', title: 'betterWorldBooks' },
    { id: 'indieBound', title: 'indieBound' },
    { id: 'type', title: 'type' },
    { id: 'pages', title: 'pages' },
    { id: 'publishDate', title: 'publishDate' },
    { id: 'publisher', title: 'publisher' },
    { id: 'originalTitle', title: 'originalTitle' },
    { id: 'isbn', title: 'isbn' },
    { id: 'asin', title: 'asin' },
    { id: 'isbn13', title: 'isbn13' },
    { id: 'language', title: 'language' },
    { id: 'series_name', title: 'series_name' },
    { id: 'series_url', title: 'series_url' },
  ],
});

let fakeData;

const CreateFakeDocument = function CreateFakeDocument(i) {
  const book = {};

  book.id = i;
  book.title = fake.random.words(3);
  book.author = fake.name.findName();
  book.description = fake.lorem.paragraph();
  book.image = 'http://lorempixel.com/480/640/abstract/';
  book.rating_five = fake.random.number();
  book.rating_four = fake.random.number();
  book.rating_three = fake.random.number();
  book.rating_two = fake.random.number();
  book.rating_one = fake.random.number();
  book.reviews = fake.random.number();
  book.kindle = fake.internet.url();
  book.amazon = fake.internet.url();
  book.audible = fake.internet.url();
  book.barnesAndNoble = fake.internet.url();
  book.walmart = fake.internet.url();
  book.apple = fake.internet.url();
  book.google = fake.internet.url();
  book.abebooks = fake.internet.url();
  book.bookDesository = fake.internet.url();
  book.indigo = fake.internet.url();
  book.alibris = fake.internet.url();
  book.betterWorldBooks = fake.internet.url();
  book.indieBound = fake.internet.url();
  book.type = fake.random.word();
  book.pages = fake.random.number({ max: 3000 });
  book.publishDate = moment(fake.date.past()).format('YYYY/MM/DD hh:mm:ss');
  book.publisher = fake.company.companyName();
  book.originalTitle = book.title;
  book.isbn = fake.random.number();
  book.asin = fake.random.number();
  book.isbn13 = fake.random.number();
  book.language = 'English';
  if (i % 2 === 0) {
    book.series_name = fake.random.words(2);
    book.series_url = fake.internet.url();
  }

  return book;
};

let batches = 0;
let start;
const generate = function generate(startingPoint, endingPoint) {
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

  csvWriter.writeRecords(fakeData)
    .then(() => {
      generate(endingPoint, endingPoint + 10000);
    })
    .catch((err) => {
      console.log(err);
    });
};

start = now();
generate(0, 10000);
