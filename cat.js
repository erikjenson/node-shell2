const fs = require('fs');

module.exports = (filename, done) => {
  fs.readFile(`./${filename}`, 'utf8', (err, data) => {
    if (err) {
      done('something went wrong');
    } else {
      done(data);
    }
  });
};
