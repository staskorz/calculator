const randomString = require('randomstring');

const options = {
  length: 20
};

module.exports = () => randomString.generate(options);
