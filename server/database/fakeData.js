const now = require('performance-now');
const fs = require('fs');
const { CreateFakeDocument } = require('./CreateFakeDocument');

let start = 'timer';
// the file path is relative to the package.json file
const wstream = fs.createWriteStream('./books.json');

// Write the data to the supplied writable stream one million times.
// Be attentive to back-pressure.
const writeOneMillionTimes = function writeOneMillionTimes(writer, encoding, callback) {
  let i = -1;
  function write() {
    let ok = true;
    do {
      i += 1;
      if (i === 9999999) {
        // last time!
        writer.write(JSON.stringify(CreateFakeDocument(i)), encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        if (i % 10000 === 0) {
          console.log(`we have generated ${i} documents`);
        }

        ok = writer.write(JSON.stringify(CreateFakeDocument(i)), encoding);
      }
    } while (i < 9999999 && ok);
    if (i < 9999999) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
};

start = now();
writeOneMillionTimes(wstream, 'utf-8', () => {
  console.log(`the whole process took ${Math.floor((now() - start).toFixed(0) / 1000)} seconds`);
});
