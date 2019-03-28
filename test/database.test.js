const mongoose = require('mongoose');
const chai = require('chai');
const mongoDB = require('../server/database/index.js');

const { expect } = chai;
const testSchema = mongoDB.bookSchema;
const testModel = mongoose.model('Test', testSchema);

describe('seeding script', () => {
  before((done) => { // from https://medium.com/nongaap/beginners-guide-to-writing-mongodb-mongoose-unit-tests-using-mocha-chai-ab5bdf3d3b1d
    mongoose.connect('mongodb://localhost/testDatabase', { useNewUrlParser: true });
    mongoDB.seed(testModel, () => {
      done();
    });
  });

  it('should seed the database with 100 records', (done) => {
    testModel.find({}, (err, docs) => {
      expect(docs.length).to.equal(100);
      done();
    });
  });

  it('should seed the database with a correct model', (done) => {
    testModel.findOne({ id: 6 }, (err, doc) => {
      // eslint-disable-next-line no-underscore-dangle
      const document = doc._doc;
      expect(document).to.have.all.keys(
        {
          id: true,
          __v: true,
          _id: true,
          title: 'String',
          author: 'String',
          description: 'String',
          ratings: {
            five: 'Number',
            four: 'Number',
            three: 'Number',
            two: 'Number',
            one: 'Number',
          },
          reviews: 'Number',
          links: {
            kindle: 'String',
            amazon: 'String',
            stores: {
              audible: 'String',
              barnesAndNoble: 'String',
              walmart: 'String',
              apple: 'String',
              google: 'String',
              abebooks: 'String',
              bookDesository: 'String',
              indigo: 'String',
              alibris: 'String',
              betterWorldBooks: 'String',
              indieBound: 'String',
            },
            worldcat: 'String',
          },
          type: 'String',
          pages: 'Number',
          publishDate: 'Date',
          publisher: 'String',
          metadata: {
            originalTitle: 'String',
            isbn: 'Number',
            isbn13: 'Number',
            asin: 'String',
            language: 'String',
            series: {
              name: 'String',
              url: 'String',
            },
          },
          image: true,
        // eslint-disable-next-line function-paren-newline
        });
      done();
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
