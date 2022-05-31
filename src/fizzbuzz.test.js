const fizzbuzz = require('./fizzbuzz');

test('should return value as string when value is regular', () => {
    expect(fizzbuzz(1)).toBe("1");
});

test('should return fizz when value is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe("fizz");
})

test('should return buzz when value is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe("buzz");
});

test('should return fizzbuzz when value is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
});