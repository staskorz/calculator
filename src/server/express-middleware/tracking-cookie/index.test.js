const ensureTrackingCookieExpressMiddleware = require('./index');
const { TRACKING_COOKIE_NAME } = require('../../../constants');

describe('ensure-tracking-cookie-express-middleware.js', () => {
  it('generates tracking cookie if one does not exist', done => {
    const req = {
      cookies: {}
    };

    const res = {
      cookie: jest.fn()
    };

    const next = () => {
      const trackingCookie = req.cookies[TRACKING_COOKIE_NAME];
      expect(trackingCookie).toBeDefined();
      expect(res.cookie.mock.calls[0][0]).toBe(TRACKING_COOKIE_NAME);
      expect(res.cookie.mock.calls[0][1]).toBe(trackingCookie);

      done();
    };

    ensureTrackingCookieExpressMiddleware(req, res, next);
  });

  it('keeps tracking cookie if one exists', done => {
    const token = 'abc';

    const req = {
      cookies: {
        [TRACKING_COOKIE_NAME]: token
      }
    };

    const res = {
      cookie: jest.fn()
    };

    const next = () => {
      expect(req.cookies[TRACKING_COOKIE_NAME]).toBe(token);
      expect(res.cookie).not.toBeCalled();

      done();
    };

    ensureTrackingCookieExpressMiddleware(req, res, next);
  });
});
