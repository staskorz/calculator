const generateToken = require('./generate-token');
const {
  TRACKING_COOKIE_NAME,
  DISTANT_FUTURE_DATE
} = require('../../../constants');

module.exports = (req, res, next) => {
  if (!req.cookies[TRACKING_COOKIE_NAME]) {
    const token = generateToken();

    res.cookie(TRACKING_COOKIE_NAME, token, {
      expires: DISTANT_FUTURE_DATE,
      httpOnly: true
    });

    req.cookies[TRACKING_COOKIE_NAME] = token; // make token cookie available in the same session it was generated in
  }

  next();
};
