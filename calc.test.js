const calculator = require('./calc');
const calc = new calculator();

describe('add', () => {
  test('addition logic', () => {
    expect(calc.add(8,2)).toBe(10);
  });
  test('typeof output', () => {
    expect(typeof calc.add(8,2)).toBe('number');
  });
  test('truthiness', () => {
    expect(calc.add(8,2)).not.toBeFalsy();
  })
});

describe('subtract', () => {
  test('subtraction logic', () => {
    expect(calc.subtract(8,2)).toBe(6);
  });
  test('typeof output', () => {
    expect(typeof calc.subtract(8,2)).toBe('number');
  });
  test('truthiness', () => {
    expect(calc.subtract(8,2)).not.toBeFalsy();
  })
});

describe('multiply', () => {
  test('multiplication logic', () => {
    expect(calc.multiply(8,2)).toBe(16);
  });
  test('typeof output', () => {
    expect(typeof calc.multiply(8,2)).toBe('number');
  });
  test('truthiness', () => {
    expect(calc.multiply(8,2)).not.toBeFalsy();
  })
});

describe('division', () => {
  test('division logic', () => {
    expect(calc.divide(8,2)).toBe(4);
  });
  test('typeof output', () => {
    expect(typeof calc.divide(8,2)).toBe('number');
  });
  test('truthiness', () => {
    expect(calc.divide(8,2)).not.toBeFalsy();
  })
});