const loadConfig = require('./load-config');

describe('load-config.js', () => {
  it('returns an empty array for non-existing config file', () => {
    // silence console.log
    console.log = f => f;

    expect(loadConfig('./non-existing-file.json')).toEqual([]);
  });

  it('returns array with enabled experiment', () => {
    expect(loadConfig('./load-config.fake-test-data.json')).toEqual([
      { name: 'enabled', enabled: true }
    ]);
  });
});
