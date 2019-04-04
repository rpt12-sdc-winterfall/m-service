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
    testModel.deleteMany({}, () => {
      mongoose.disconnect();
      return done();
    });
  });
});
