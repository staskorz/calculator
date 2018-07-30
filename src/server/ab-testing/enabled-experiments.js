module.exports = require('../../../ab-testing-experiments.json').filter(
  ({ enabled }) => enabled
);
