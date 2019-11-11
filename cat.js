const fs = require('fs');

module.exports = (filename) => {
  fs.readFile(`./${filename}`, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    }
  })
}
