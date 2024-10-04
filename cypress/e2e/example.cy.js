function addNumbers(c, d) {
  return c + d;
}

describe('Adding two numbers', () => {
  it('Return the correct sum of two numbers', () => {
    const c = 2;
    const d = 8;
    const result = addNumbers(c, d);

    expect(result).to.equal(10);
  });
});
