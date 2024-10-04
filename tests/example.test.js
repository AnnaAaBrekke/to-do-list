function addNumbers(a, b) {
  return a + b;
}

test('Should add two numbers and give a sum', () => {
  const a = 2;
  const b = 3;
  const result = addNumbers(a, b);
  expect(result).toBe(5);
});
