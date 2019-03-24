const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books');

let bookSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  title: String,
  author: [String],
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



let seed = async () => {
  Book.deleteMany({}, async () => {
    let bookExample = new Book();

    bookExample.title = "Harry Potter and the Goblet of Firey"
    bookExample.id = 1
    await bookExample.save();
  })
}

seed();