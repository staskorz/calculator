const {
  DISTANT_FUTURE_DATE,
  TRACKING_COOKIE_NAME,
  AB_TESTING_COOKIE_NAME
} = require('../../../constants');

const tokenToNumber = require('./token-to-number');

module.exports = experiments => (req, res, next) => {
  const trackingToken = req.cookies[TRACKING_COOKIE_NAME];

  const numberDerivedFromToken = tokenToNumber(trackingToken);

  const numberOfExperiments = experiments.length;

  let isCandidate = false;

  for (let i = 0; i < numberOfExperiments; i++) {
    const experiment = experiments[i];

    if (experiment.conditions) {
      const { country } = experiment.conditions;

      if (country && req.query.country === country) {
        if (numberDerivedFromToken < experiment.percentage) {
          res.cookie(AB_TESTING_COOKIE_NAME, experiment.name, {
            expires: DISTANT_FUTURE_DATE
          });
        }

        isCandidate = true;

        break;
      }
    } else {
      if (numberDerivedFromToken < experiment.percentage) {
        res.cookie(AB_TESTING_COOKIE_NAME, experiment.name, {
          expires: DISTANT_FUTURE_DATE
        });
      }

      isCandidate = true;

      break;
    }
  }

  if (!isCandidate) {
    res.clearCookie(AB_TESTING_COOKIE_NAME);
  }

  next();
};
