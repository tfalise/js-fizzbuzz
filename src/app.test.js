const parseInput = require('./app');

test('NaN should not be valid input', () => {
    expect(parseInput("abc").isValid).toBe(false);
});

test('negative number should not be valid input', () => {
    expect(parseInput(-3).isValid).toBe(false);
});