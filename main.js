/*set values to empty strings to start off with */
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

/*queries the equal button, if the equal button is clicked, it checks if the previous number and operator
has a value and then proceeds starting the calculate function*/
equal.addEventListener("click", function(e){
    if(previousNumber !== "" && operator !== ""){
    calculate()
    currentScreen.textContent = previousNumber;
    }
});

/*queries the clear button, once pressed, it starts the function to clear any values from the
operator, previousNumber and currentNumber*/ 
clearBtn.addEventListener("click", function(e){
    clearScreen()
    currentScreen.textContent = '';
});

/*queries the decimal button, once pressed, it starts the addDecimal declaration*/
decimal.addEventListener("click", function(){
    addDecimal();
});

/*declares the currentNumber value according to the pressed number button*/
function handleNumber(num){
    currentNumber += num;
    /*if the currentNumber is a decimal or the currentNumber equals to a value,
    it is stored in the currentNumber and displayed on the screen*/
    if(currentNumber.includes('.') || currentNumber === '') {
        currentNumber = currentNumber;
        currentScreen.textContent = currentNumber;
    }
}

/*each operator is stored in the operator variable, previousNumber is currentNumber and currentNumber
is an empty string*/
function handleOperator(op){
   operator = op;
   previousNumber = currentNumber;
   currentNumber = '';
}

/*currentNumber and previousNumber are converted from strings to numbers, if statements check based on
the calculation performed, previousNumber equals the result*/
function calculate(){
    currentNumber = Number(currentNumber)
    previousNumber = Number(previousNumber)

    if(operator === "+"){
        previousNumber += currentNumber; 
    } else if(operator === "-"){
        previousNumber -= currentNumber;
    } else if(operator === "x"){
        previousNumber *= currentNumber;
    } else if(operator === "/"){
        if (currentNumber === 0){
            previousNumber = "Error!"
        } else {
            previousNumber /= currentNumber;
        }
    }

    /*if previousNumber is finite, it return "invalid syntax" otherwise it's executed as normal, if it's
    a decimal, it will return the calculation with 2 decimal places*/
    if(!isFinite(previousNumber)){
        previousNumber = "Invalid syntax"
    } else {
        previousNumber = previousNumber.toFixed(2)
        previousNumber = parseFloat(previousNumber)
    }
};

/*if currentNumber as a string does not include a period, it is added to currentNumber*/
function addDecimal(){
    if(!currentNumber.toString().includes(".")) {
        currentNumber += '.';
        currentScreen.textContent = currentNumber;
    }
    
};

/*all variables return to their default values*/
function clearScreen(){
    previousNumber = '';
    currentNumber = '';
    operator = '';
};