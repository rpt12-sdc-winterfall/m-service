const { fakeData, generate } = require('./fakeData.js');
const { Book } = require('./index.js');

// generate 100 books/documents based on the bookSchema
generate(100);

Book.deleteMany().exec()
  .then(() => Book.insertMany(fakeData))
  .then(() => {
    console.log('Seeding is complete!');
  })
  .catch((err) => {
    console.log(err);
  });
