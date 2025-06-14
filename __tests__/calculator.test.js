const { calculator } = require('../app');

describe('Calculator Functions', () => {
    describe('Addition', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('adds positive and negative numbers', () => {
            expect(calculator.add(5, -3)).toBe(2);
        });

        test('adds two negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });

        test('adds decimal numbers', () => {
            expect(calculator.add(1.5, 2.3)).toBeCloseTo(3.8);
        });
    });

    describe('Subtraction', () => {
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        });

        test('subtracts negative from positive', () => {
            expect(calculator.subtract(5, -3)).toBe(8);
        });

        test('handles subtraction with zero', () => {
            expect(calculator.subtract(5, 0)).toBe(5);
        });
    });

    describe('Multiplication', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(3, 4)).toBe(12);
        });

        test('multiplies by zero', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
        });

        test('multiplies two negative numbers', () => {
            expect(calculator.multiply(-3, -4)).toBe(12);
        });

        test('multiplies positive and negative numbers', () => {
            expect(calculator.multiply(3, -4)).toBe(-12);
        });
    });

    describe('Division', () => {
        test('divides two positive numbers', () => {
            expect(calculator.divide(8, 2)).toBe(4);
        });

        test('returns decimal result when needed', () => {
            expect(calculator.divide(7, 2)).toBe(3.5);
        });

        test('throws error when dividing by zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
        });

        test('divides two negative numbers', () => {
            expect(calculator.divide(-6, -2)).toBe(3);
        });
    });
});
