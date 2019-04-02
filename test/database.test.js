const mongoose = require('mongoose');
const mongoDB = require('../server/database/index.js');

const testSchema = mongoDB.bookSchema;
const testModel = mongoose.model('Test', testSchema);

describe('seeding script', () => {
  beforeAll((done) => {
    mongoose.connect('mongodb://localhost/testDatabase', { useNewUrlParser: true });
    mongoDB.seed(testModel, () => {
      done();
    });
  });

  test('should seed the database with 100 records', (done) => {
    testModel.find({}, (err, docs) => {
      expect(docs.length).toBe(100);
      done();
    });
  });

  test('should seed the database with a correct model', (done) => {
    testModel.findOne({ id: 6 }, (err, doc) => {
      // eslint-disable-next-line no-underscore-dangle
      const actual = doc._doc;
      // const expected = {
      //   id: expect.anything(),
      //   __v: expect.anything(),
      //   _id: expect.anything(),
      //   title: expect.any(String),
      //   author: expect.any(String),
      //   description: expect.any(String),
      //   ratings: {
      //     five: expect.any(Number),
      //     four: expect.any(Number),
      //     three: expect.any(Number),
      //     two: expect.any(Number),
      //     one: expect.any(Number),
      //   },
      //   reviews: expect.any(Number),
      //   links: {
      //     kindle: expect.any(String),
      //     amazon: expect.any(String),
      //     stores: {
      //       audible: expect.any(String),
      //       barnesAndNoble: expect.any(String),
      //       walmart: expect.any(String),
      //       apple: expect.any(String),
      //       google: expect.any(String),
      //       abebooks: expect.any(String),
      //       bookDesository: expect.any(String),
      //       indigo: expect.any(String),
      //       alibris: expect.any(String),
      //       betterWorldBooks: expect.any(String),
      //       indieBound: expect.any(String),
      //     },
      //     worldcat: expect.any(String),
      //   },
      //   type: expect.any(String),
      //   pages: expect.any(Number),
      //   publishDate: expect.any(Date),
      //   publisher: expect.any(String),
      //   metadata: {
      //     originalTitle: expect.any(String),
      //     isbn: expect.any(Number),
      //     isbn13: expect.any(Number),
      //     asin: expect.any(String),
      //     language: expect.any(String),
      //     series: {
      //       name: expect.any(String),
      //       url: expect.any(String),
      //     },
      //   },
      //   image: expect.anything(),
      // };

      expect(actual).toContainAllKeys([
        'id',
        '__v',
        '_id',
        'title',
        'author',
        'description',
        'ratings',
        'reviews',
        'links',
        'type',
        'pages',
        'publishDate',
        'publisher',
        'metadata',
        'image',
      ]);

      done();
    });
  });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect();
      return done();
    });
  });
});
