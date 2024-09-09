import Validator from '../js/Validator';

test('valid usernames', () => {
  const validator = new Validator();
  
  expect(validator.validateUsername('John_Doe')).toBe(true);
  expect(validator.validateUsername('User-Name')).toBe(true);
});

test('invalid usernames', () => {
  const validator = new Validator();
  
  // начинается с цифры
  expect(validator.validateUsername('123Jack')).toBe(false);
  
  // заканчивается на цифру
  expect(validator.validateUsername('Jack123')).toBe(false);
  
  // содержит более трёх цифр подряд
  expect(validator.validateUsername('Jack_12345')).toBe(false);
  
  // начинается или заканчивается на тире или подчёркивание
  expect(validator.validateUsername('-Jack')).toBe(false);
  expect(validator.validateUsername('Jack_')).toBe(false);
  expect(validator.validateUsername('_Jack-')).toBe(false);
  expect(validator.validateUsername('Jack_123')).toBe(false);
});
