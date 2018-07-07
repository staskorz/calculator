import calculate from './calculate';

function pressButtons(buttons) {
  const value = {};
  buttons.forEach((button) => {
    Object.assign(value, calculate(value, button));
  });
  // no need to distinguish between null and undefined values
  Object.keys(value).forEach((key) => {
    if (value[key] === null) {
      delete value[key];
    }
  });
  return value;
}

function expectButtons(buttons, expectation) {
  expect(pressButtons(buttons)).toEqual(expectation);
}

test('should support 6', () => {
  expectButtons(['6'], { next: '6' });
});

test('should support 66', () => {
  expectButtons(['6', '6'], { next: '66' });
});

test('should support 6 + 6', () => {
  expectButtons(['6', '+', '6'], {
    next: '6',
    total: '6',
    operation: '+',
  });
});

test('should support 6 + 6 =', () => {
  expectButtons(['6', '+', '6', '='], {
    total: '12',
  });
});

test('should support 00 + 0 =', () => {
  expectButtons(['0', '0', '+', '0', '='], {
    total: '0',
  });
});

test('should support 6 + 6 = 9', () => {
  expectButtons(['6', '+', '6', '=', '9'], {
    next: '9',
  });
});

test('should support 3 + 6 = +', () => {
  expectButtons(['3', '+', '6', '=', '+'], {
    total: '9',
    operation: '+',
  });
});

test('should support 3 + 6 = + 9', () => {
  expectButtons(['3', '+', '6', '=', '+', '9'], {
    total: '9',
    operation: '+',
    next: '9',
  });
});

test('should support 3 + 6 = + 9 =', () => {
  expectButtons(['3', '+', '6', '=', '+', '9', '='], {
    total: '18',
  });
});

test('should support 3 + = 3 =', () => {
  // When '=' is pressed and there is not enough information to complete
  // an operation, the '=' should be disregarded.
  expectButtons(['3', '+', '=', '3', '='], {
    total: '6',
  });
});
