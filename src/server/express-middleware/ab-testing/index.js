const middleware = require('./middleware');
const enabledExperiments = require('./enabled-experiments');

module.exports = middleware(enabledExperiments);
