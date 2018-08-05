const ensureCookie = require('./ensure-cookie');

describe('ensure-cookie.js', () => {
  it('correctly creates a cookie', () => {
    const cookies = {};
    const generateValue = () => 'value1';
    const setCookie = jest.fn();

    ensureCookie({
      name: 'name1',
      generateValue,
      cookies,
      setCookie
    });

    expect(setCookie.mock.calls[0][0]).toBe('name1');
    expect(setCookie.mock.calls[0][1]).toBe('value1');
    expect(cookies['name1']).toBe('value1');
  });

  it('keeps existing cookie', () => {
    const cookies = {
      name1: 'value1'
    };

    const generateValue = jest.fn();
    const setCookie = jest.fn();

    ensureCookie({
      name: 'name1',
      generateValue,
      cookies,
      setCookie
    });

    expect(generateValue).not.toBeCalled();
    expect(setCookie).not.toBeCalled();
  });
});
