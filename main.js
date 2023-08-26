let previousNumber = '';
let currentNumber = '';
let operator = '';

let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');
let clearBtn = document.querySelector('#clear-btn');
let numbers = document.querySelector('.number');
let operators = document.querySelector('.operator');

numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
}));

function handleNumber(num){
    console.log(num);
}
