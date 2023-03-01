const capital = require('./capitalize');

test('Capitalize first letter', () => {
  expect(capital('test')).toBe('Test');
})