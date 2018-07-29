const generateToken = require('./generate-token');
const { TRACKING_COOKIE_NAME } = require('../../../constants');

const TRACKING_COOKIE_EXPIRATION_DATE = new Date(253402300000000); // Approximately Friday, 31 Dec 9999 23:59:59 GMT

module.exports = (req, res, next) => {
  if (!req.cookies[TRACKING_COOKIE_NAME]) {
    const token = generateToken();

    res.cookie(TRACKING_COOKIE_NAME, token, {
      expires: TRACKING_COOKIE_EXPIRATION_DATE,
      httpOnly: true
    });

    req.cookies[TRACKING_COOKIE_NAME] = token; // make token cookie available in the same session it was generated in
  }

  next();
};
