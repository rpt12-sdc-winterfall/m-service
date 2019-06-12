const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books',
  {
    useNewUrlParser: true,
    autoIndex: false,
  })
  .catch((err) => {
    console.log(err);
  });

const bookSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  title: String,
  author: String,
  description: String,
  image: String,
  ratings: {
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number,
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
      bookDepository: String,
      indigo: String,
      alibris: String,
      betterWorldBooks: String,
      indieBound: String,
    },
  },
  type: String,
  pages: Number,
  publishDate: Date,
  publisher: String,
  metadata: {
    originalTitle: String,
    isbn: Number,
    isbn13: Number,
    asin: String,
    language: String,
    series: {
      name: String,
      url: String,
    },
  },
});

const Book = mongoose.model('book', bookSchema);

module.exports = {
  Book,
};
