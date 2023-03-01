const reverseString = require('./reverse'); 

test('String has reversed', () => {
  expect(reverseString('orange')).toBe('egnaro')
});