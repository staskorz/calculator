const loadConfigFromJsonFile = path => {
  try {
    return require(path);
  } catch (_) {
    console.log('Error reading experiments config file "%s"', path);
    console.log('Running without experiments');

    return [];
  }
};

const getEnabledExperiments = experiments =>
  experiments.filter(({ enabled }) => enabled);

module.exports = path => getEnabledExperiments(loadConfigFromJsonFile(path));
