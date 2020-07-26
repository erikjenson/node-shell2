const fs = require('fs');

module.exports = (filename, done) => {
  fs.readFile(`./${filename}`, 'utf8', (err, data) => {
    if (err) {
      done('something went wrong');
    } else {
      data = data.toString().split('\n');
      if (data.length < 10) {
        data = data.join('\n');
        done(data);
      } else {
        data = data.slice(data.length - 10).join('\n');
        done(data);
      }
    }
  });
};
