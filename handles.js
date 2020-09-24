import{addTwoNumbers} from './math.js';
import{subTwoNumbers} from './math.js';
import{multTwoNumbers} from './math.js';
import{divTwoNumbers} from './math.js';
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const answer = document.getElementById("answer")

export function sumHandle(){
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const sum = addTwoNumbers(num1, num2);
    answer.textContent = sum;
}

export function subHandle(){
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const sub = subTwoNumbers(num1, num2);
    answer.textContent = sub;
}

export function multHandle(){
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const mult = multTwoNumbers(num1, num2);
    answer.textContent = mult;
}
export function divHandle(){
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const div = divTwoNumbers(num1, num2);
    answer.textContent = div;
}