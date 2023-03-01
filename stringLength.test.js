const strLength = require('./stringLength');

test('Length of String', () => {
  expect(strLength('test')).toBe(4);
});

test('Acceptable length of String', () => {
  expect(() => 
  strLength('Pneumonoultramicroscopicsilicovolcanoconiosis')).toThrow(
    'String length should be in the inclusive range 1 - 10');

})