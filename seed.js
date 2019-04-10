const mongo = require('./server/database/index.js');

mongo.seed(mongo.Book, () => {
  console.log('complete')
  process.exit(0);
});