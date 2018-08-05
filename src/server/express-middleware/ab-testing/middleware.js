const {
  DISTANT_FUTURE_DATE,
  PERCENTAGE_COOKIE_NAME,
  AB_TESTING_COOKIE_NAME
} = require('../../../constants');

module.exports = experiments => (req, res, next) => {
  const percentage = req.cookies[PERCENTAGE_COOKIE_NAME];

  const numberOfExperiments = experiments.length;

  let isParticipant = false;

  for (let i = 0; i < numberOfExperiments; i++) {
    const experiment = experiments[i];

    if (experiment.conditions) {
      const { country } = experiment.conditions;

      if (country && req.query.country === country) {
        if (percentage < experiment.percentage) {
          res.cookie(AB_TESTING_COOKIE_NAME, experiment.name, {
            expires: DISTANT_FUTURE_DATE
          });

          isParticipant = true;
        }
        break;
      }
    } else {
      if (percentage < experiment.percentage) {
        res.cookie(AB_TESTING_COOKIE_NAME, experiment.name, {
          expires: DISTANT_FUTURE_DATE
        });

        isParticipant = true;
      }
      break;
    }
  }

  if (!isParticipant) {
    res.clearCookie(AB_TESTING_COOKIE_NAME);
  }

  next();
};
