const fizzbuzz = require('./fizzbuzz');

test('should return value as string when value is regular', () => {
    expect(fizzbuzz(1)).toBe("1");
});

test('should return fizz when value is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe("fizz");
})