/*set values to '' start off with */
let previousNumber = '';
let currentNumber = '';
let operator = '';

/*set values and query respective HTML elements */
let currentScreen = document.querySelector('.display');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');
let clearBtn = document.querySelector('.clear');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

/*queries all numbers' buttons, if a button is clicked, the chosen number is returned on screen*/
numbers.forEach((num) => num.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentNumber;
}));

/*queries all operators' buttons, if a button is clicked, the chosen operator is returned on screen*/
operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    currentScreen.textContent = previousNumber + operator;
}));

equal.addEventListener("click", function(e){
    if(previousNumber !== "" && operator !== ""){
    calculate()
    currentScreen.textContent = previousNumber;
    }
});

clearBtn.addEventListener("click", function(e){
    clearScreen()
    currentScreen.textContent = '';
});

decimal.addEventListener("click", function(){
    addDecimal();
});

function handleNumber(num){
    num = Number(num);
    if(currentNumber.includes('.') || currentNumber === '') {
        currentNumber += num;
    }
}

function handleOperator(op){
   operator = op;
   previousNumber = currentNumber;
   currentNumber = '';
}

function calculate(){
    currentNumber = Number(currentNumber)
    previousNumber = Number(previousNumber)

    if(operator === "+"){
        previousNumber += currentNumber; 
    } else if(operator === "-"){
        previousNumber -= currentNumber;
    } else if(operator === "x"){
        previousNumber *= currentNumber;
    } else if (operator === "/"){
        previousNumber /= currentNumber;
    } else if(currentNumber.includes('.') && previousNumber === '' & operators.values(true)) {
        previousNumber = parseFloat(previousNumber).toFixed(5) + "....";
        currentNumber = '';
    }
};

function addDecimal(){
    if(!currentNumber.toString().includes(".")) {
        currentNumber = currentNumber + '.';
        currentScreen.textContent = currentNumber;
    }else if(currentNumber.length >= 8){
        currentNumber.setAttribute("disable", 1);
    }
};

function clearScreen(){
    previousNumber = '';
    currentNumber = '';
    operator = '';
};