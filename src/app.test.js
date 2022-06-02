const app = require('./app');

describe('input validation', () => {
    test('NaN should not be valid input', () => {
        expect(app.parseInput("abc").isValid).toBe(false);
    });

    test('negative number should not be valid input', () => {
        expect(app.parseInput(-3).isValid).toBe(false);
    });

    test('zero should not be valid input', () => {
        expect(app.parseInput(0).isValid).toBe(false);
    });

    test('positive integer should be valid input', () => {
        let result = app.parseInput(4);
        expect(result.isValid).toBe(true);
        expect(result.value).toBe(4);
    });

    test('should truncate positive non integer numbers to integer value', () => {
        let result = app.parseInput(4.7);
        expect(result.isValid).toBe(true);
        expect(result.value).toBe(4);
    });
});

describe('main loop', () => {
    test('should call fizzbuzz for each integer', () => {
        var result = app.main(5);
        expect(result.length).toBe(5);
    });
});