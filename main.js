/*set values to '' start off with */
let previousNumber = '';
let currentNumber = '';
let operator = '';

/*set values and query respective HTML elements */
let previousScreen = document.querySelector('.previous-number');
let currentScreen = document.querySelector('.current-number');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');
let clearBtn = document.querySelector('.clear');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

/*query all numbers' buttons, if a buttons is clicked, the number is returned on screen*/
numbers.forEach((num) => num.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentNumber;
}));

operators.forEach((operator) => operator.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
}));

equal.addEventListener("click", handleEqual())

function handleNumber(num){
    currentNumber += num;
}

function handleOperator(operator){
    currentScreen.textContent = currentNumber + operator;
}

function handleEqual(operator){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if(operator === "+"){
        previousNumber += currentNumber;
    } else if(operator === "-"){
        previousNumber -= currentNumber;
    } else if(operator === "x"){
        previousNumber *= currentNumber;
    } else if (operator === "/"){
        previousNumber /= currentNumber;
    }
};