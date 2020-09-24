
const addButton = document.getElementById("add-button")
const subButton = document.getElementById("sub-button")
const multButton = document.getElementById("mult-button")
const divButton = document.getElementById("div-button")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const answer = document.getElementById("answer")


function addTwoNumbers(num1, num2){
    return num1 + num2;
}
function subTwoNumbers(num1, num2){
    return num1 - num2;
}
function multTwoNumbers(num1, num2){
    return num1 * num2;
}
function divTwoNumbers(num1, num2){
    return num1 / num2;
}

addButton.addEventListener('click',() =>{
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const sum = addTwoNumbers(num1, num2);
    answer.textContent = sum;
});
subButton.addEventListener('click',() =>{
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const sub = subTwoNumbers(num1, num2);
    answer.textContent = sub;
});
multButton.addEventListener('click',() =>{
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const mult = multTwoNumbers(num1, num2);
    answer.textContent = mult;
});
divButton.addEventListener('click',() =>{
    const num1 = input1.valueAsNumber;
    const num2 = input2.valueAsNumber;
    const div = divTwoNumbers(num1, num2);
    answer.textContent = div;
});