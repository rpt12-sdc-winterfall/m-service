const mongoose = require('mongoose');
const fake = require('faker');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books');

let bookSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  title: String,
  author: String,
  description: String,
  ratings: {
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number
  },
  reviews: Number,
  links: {
    kindle: String,
    amazon: String,
    stores: {
      audible: String,
      barnesAndNoble: String,
      walmart: String,
      apple: String,
      google: String,
      abebooks: String,
      bookDesository: String,
      indigo: String,
      alibris: String,
      betterWorldBooks: String,
      indieBound: String
    },
    worldcat: String
  },
  type: String,
  pages: Number,
  publishdate: Date,
  publisher: String,
  metadata: {
    originalTitle: String,
    isbn: Number,
    isbn13: Number,
    asin: String,
    language: String,
    series: {
      name: String,
      url: String
    }
  }
});

let Book = mongoose.model('Book', bookSchema);

module.exports.seed = async () => {
  // clean out current database, if any test records clogging up
  Book.deleteMany({}, async () => {
    var book;
    for (var i = 0; i < 100; i++) {
      book = new Book();

      // initiate a bunch of new book info
      book.id = i;
      book.title = fake.random.words(3);
      book.author = fake.name.findName();
      book.description = fake.lorem.paragraphs();
      book.ratings = {
        five: fake.random.number(),
        four: fake.random.number(),
        three: fake.random.number(),
        two: fake.random.number(),
        one: fake.random.number()
      },
      book.links = {
        kindle: fake.internet.url(),
        amazon: fake.internet.url(),
        stores: {
          audible: fake.internet.url(),
          barnesAndNoble: fake.internet.url(),
          walmart: fake.internet.url(),
          apple: fake.internet.url(),
          google: fake.internet.url(),
          abebooks: fake.internet.url(),
          bookDesository: fake.internet.url(),
          indigo: fake.internet.url(),
          alibris: fake.internet.url(),
          betterWorldBooks: fake.internet.url(),
          indieBound: fake.internet.url()
        }
      }
      book.type = fake.random.word();
      book.pages = fake.random.number({max: 3000});
      book.publishdate = fake.date.past();
      book.publisher = fake.company.companyName();
      book.metadata = {
        originalTitle: book.title,
        isbn: fake.random.number(),
        isbn13: fake.random.number(),
        language: 'English'
      }

      if (i % 2 === 0) {
        book.series = {
          name: fake.random.words(2),
          url: fake.internet.url()
        }
      }

      await book.save();
      console.log(`${i} saved as ${book.title}`)
    }
  })
}

module.exports.seed();