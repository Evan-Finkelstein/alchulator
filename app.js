import {sumHandle} from './handles.js';
import {subHandle} from './handles.js';
import {multHandle} from './handles.js';
import {divHandle} from './handles.js';

const button = document.getElementById("button")
const operation = document.getElementById("operations")



button.addEventListener('click', () => {
    const math = operation.value;
    switch(math){
    case '+':
        sumHandle()
        break;
    case '-':
        subHandle()
        break;
    case '*':
        multHandle()
        break;
    case '/':  
        divHandle()
        break;
    }
})