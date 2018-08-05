const { DISTANT_FUTURE_DATE } = require('../../../constants');

module.exports = ({ name, generateValue, cookies, setCookie }) => {
  if (!cookies[name]) {
    const value = generateValue();

    setCookie(name, value, {
      expires: DISTANT_FUTURE_DATE,
      httpOnly: true
    });

    cookies[name] = value; // make cookie is available in the same session it was generated in
  }
};
