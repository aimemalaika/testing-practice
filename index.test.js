import Calculator from "./index.js";
import { stringLength, reverseString, capitalise } from "./index.js";

describe('Count String', () => {
    test('Should return the number of character', () => {
        expect(stringLength('Aime')).toEqual(4);
    });
    test('Should return the error of min character', () => {
        expect(stringLength('')).toBe('Min length is equal to 1');
    });
    test('Should return the error of max character', () => {
        expect(stringLength('Aime Malaika')).toBe('Max length is equal to 10');
    });
});

describe('Reverse String', () => {
    test('Should return the reverse of the string', () => {
        expect(reverseString('Aime')).toEqual('emiA');
    });
});

describe('Calculator', () => {
    describe('Addition method', () => {
        test('Should return the sum of two digit', () => {
            const calculate = new Calculator(5,6);
            expect(calculate.add(calculate)).toEqual(11);
        });
        test('Should return the error if the first value is not a number', () => {
            const calculate = new Calculator('text',6);
            expect(calculate.add(calculate)).toBe('First param should be a number');
        });
        test('Should return the sum of two digit', () => {
            const calculate = new Calculator(10, 'text');
            expect(calculate.add(calculate)).toBe('Last param should be a number');
        });
    });

    describe('Substruction method', () => {
        test('Should return the rest of two digit', () => {
            const calculate = new Calculator(6, 5);
            expect(calculate.substract(calculate)).toEqual(1);
        });
        test('Should return the error if the first value is not a number', () => {
            const calculate = new Calculator('text',6);
            expect(calculate.substract(calculate)).toBe('First param should be a number');
        });
        test('Should return the sum of two digit', () => {
            const calculate = new Calculator(10, 'text');
            expect(calculate.substract(calculate)).toBe('Last param should be a number');
        });
    });

    describe('Division method', () => {
        test('Should return the quotian of two digit', () => {
            const calculate = new Calculator(6, 2);
            expect(calculate.divide(calculate)).toEqual(3);
        });
        test('Should return the error if the last value is 0', () => {
            const calculate = new Calculator(6, 0);
            expect(calculate.divide(calculate)).toBe('You can\'t divide by 0');
        });
        test('Should return the error if the first value is not a number', () => {
            const calculate = new Calculator('text',6);
            expect(calculate.divide(calculate)).toBe('First param should be a number');
        });
        test('Should return the sum of two digit', () => {
            const calculate = new Calculator(10, 'text');
            expect(calculate.divide(calculate)).toBe('Last param should be a number');
        });
    });

    describe('Multiplication method', () => {
        test('Should return the product of two digit', () => {
            const calculate = new Calculator(6, 5);
            expect(calculate.multiply(calculate)).toEqual(30);
        });
        test('Should return the error if the first value is not a number', () => {
            const calculate = new Calculator('text',6);
            expect(calculate.multiply(calculate)).toBe('First param should be a number');
        });
        test('Should return the sum of two digit', () => {
            const calculate = new Calculator(10, 'text');
            expect(calculate.multiply(calculate)).toBe('Last param should be a number');
        });
    });
});

describe('Capitalize String', () => {
    test('Should return the Capitalized of the string', () => {
        expect(capitalise('aime')).toEqual('AIME');
    });
});