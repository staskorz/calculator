const tokenToNumber = require('./token-to-number');

describe('token-to-number.js', () => {
  it('correctly generates a number between 0 and 99 from a token', () => {
    expect(tokenToNumber('abc')).toBe(94);
  });
});
