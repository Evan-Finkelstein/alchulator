import { addTwoNumbers } from '../math.js';
import { subTwoNumbers } from '../math.js';
import { multTwoNumbers } from '../math.js';
import { divTwoNumbers } from '../math.js';

const test = QUnit.test;

test('should return 7 if passed 3 and 4', (expect) => {

    const expected = 7;
    const firstNumber = 3;
    const secondNumber = 4;
    
    const actual = addTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});


test('should return 1 if passed 3 and 2', (expect) => {

    const expected = 1;
    const firstNumber = 3;
    const secondNumber = 2;
    
    const actual = subTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});


test('should return 12 if passed 3 and 4', (expect) => {

    const expected = 12;
    const firstNumber = 3;
    const secondNumber = 4;
    
    const actual = multTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});


test('should return 3 if passed 12 and 4', (expect) => {

    const expected = 3;
    const firstNumber = 12;
    const secondNumber = 4;
    
    const actual = divTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual, expected);
});

