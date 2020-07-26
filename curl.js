const request = require('request');

module.exports = (uri, done) => {
  request(uri, function (error, response, body) {
    if (error) {
      done('something went wrong');
    } else {
      done(body);
    }
  });
};
