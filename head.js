const fs = require('fs');

module.exports = (filename, done) => {
  fs.readFile(`./${filename}`, 'utf8', (err, data) => {
    if (err) {
      done('something went wrong');
    } else {
      let result = '';
      let count = 0;
      let i = 0;
      while (count < 10 && i < data.length) {
        if (data[i] === '\n') count++;
        result += data[i];
        i++;
      }
      done(result);
    }
  });
};
