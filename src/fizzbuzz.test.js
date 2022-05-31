const fizzbuzz = require('./fizzbuzz');

test('should return value as string when value is regular', () => {
    expect(fizzbuzz(1)).toBe("1");
});