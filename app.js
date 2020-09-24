import {sumHandle} from './handles.js';
import {subHandle} from './handles.js';
import {multHandle} from './handles.js';
import {divHandle} from './handles.js';

const addButton = document.getElementById("add-button")
const subButton = document.getElementById("sub-button")
const multButton = document.getElementById("mult-button")
const divButton = document.getElementById("div-button")



addButton.addEventListener('click', sumHandle);

subButton.addEventListener('click', subHandle);

multButton.addEventListener('click', multHandle);

divButton.addEventListener('click', divHandle);
