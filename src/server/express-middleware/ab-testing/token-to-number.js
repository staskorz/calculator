module.exports = token =>
  token
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce((acc, elem) => acc + elem, 0) % 100;
