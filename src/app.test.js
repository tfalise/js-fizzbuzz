const parseInput = require('./app');

test('NaN should not be valid input', () => {
    expect(parseInput("abc").isValid).toBe(false);
});

test('negative number should not be valid input', () => {
    expect(parseInput(-3).isValid).toBe(false);
});

test('zero should not be valid input', () => {
    expect(parseInput(0).isValid).toBe(false);
});

test('positive integer should be valid input', () => {
    let result = parseInput(4);
    expect(result.isValid).toBe(true);
    expect(result.value).toBe(4);
});