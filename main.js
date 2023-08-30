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

equal.addEventListener("click", function(e){
    handleEqual()
    console.log(handleEqual)
})

clearBtn.addEventListener("click", function(e){
    clearScreen(e.target.textContent)
    currentScreen.textContent = '';
    previousScreen.textContent = '';
});

function handleNumber(num){
    num = Number(num);
    currentNumber = num;
    previousNumber.textContent = '';
    previousNumber = num;
}

function handleOperator(operator){
    currentScreen.textContent = currentNumber + operator;
}

function handleEqual(operator){

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

function clearScreen(){
    previousNumber = '';
    currentNumber = '';
    operator = '';
}