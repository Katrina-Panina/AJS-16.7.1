import Validator from '../task';

test('Метод должен правильно валидировать переданное имя и возвращать true', () => {
  expect(new Validator().validateUsername('Da-ak_i0n')).toBeTruthy();
});

test('Метод должен правильно валидировать переданное имя и возвращать true, 2 вариант', () => {
  expect(new Validator().validateUsername('Da-ak_i000n')).toBeTruthy();
});

test('Метод должен создавать свойство username в инстансте класса, с переданным именем, если имя валидно', () => {
  const testObj = new Validator();
  testObj.validateUsername('Daakin');
  expect(testObj.username).toBe('Dakakin');
});

test('Метод должен выбросить ошибку если имя содержит в начале цифру', () => {
  expect(() => new Validator().validateUsername('3Daakin')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в начале -', () => {
  expect(() => new Validator().validateUsername('-Daakin')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в начале #', () => {
  expect(() => new Validator().validateUsername('#Daakin')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в начале @', () => {
  expect(() => new Validator().validateUsername('@Daakin')).toThrow();
});

test('Метод должен выбросить ошибку если имя состоит из @@', () => {
  expect(() => new Validator().validateUsername('@@')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в начале _', () => {
  expect(() => new Validator().validateUsername('_Daakin')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в конце цифру', () => {
  expect(() => new Validator().validateUsername('3Akakiy3')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в конце -', () => {
  expect(() => new Validator().validateUsername('Daakin-')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в конце _', () => {
  expect(() => new Validator().validateUsername('Daakin_')).toThrow();
}
    );
