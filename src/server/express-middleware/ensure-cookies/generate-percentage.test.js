const generatePercentage = require('./generate-percentage');

describe('generate-percentage.js', () => {
  it('returns a number between 0 and 99', () => {
    const percentage = generatePercentage();

    expect(percentage).toBeGreaterThanOrEqual(0);
    expect(percentage).toBeLessThan(100);
  });
});
