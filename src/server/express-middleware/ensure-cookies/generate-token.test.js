const generateToken = require('./generate-token');

describe('generate-token.js', () => {
  it('generates 20 character string token', () => {
    const token = generateToken();

    expect(typeof token).toBe('string');
    expect(token).toHaveLength(20);
  });
});
