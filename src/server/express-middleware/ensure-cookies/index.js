const generateToken = require('./generate-token');
const generatePercentage = require('./generate-percentage');
const ensureCookie = require('./ensure-cookie');
const {
  TRACKING_COOKIE_NAME,
  PERCENTAGE_COOKIE_NAME
} = require('../../../constants');

module.exports = (req, res, next) => {
  [
    {
      name: TRACKING_COOKIE_NAME,
      generateValue: generateToken
    },
    {
      name: PERCENTAGE_COOKIE_NAME,
      generateValue: generatePercentage
    }
  ].forEach(({ name, generateValue }) => {
    ensureCookie({
      name,
      generateValue,
      cookies: req.cookies,
      setCookie: res.cookie.bind(res)
    });
  });

  next();
};
