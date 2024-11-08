function add (a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multiply (a,b){
    return a*b;
}
function divide (a,b){
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }
      return a / b;
}

function operate(operator,number1,number2){
    if (operator=="+"){
        return add(number1,number2);
    }
    if (operator=="-"){
        return subtract(number1,number2);
    }
    if (operator=="*"){
        return multiply(number1,number2);
    }
    if (operator=="/"){
        return divide(number1,number2);
    }
    return "Invalid operator";
}


let num1 = '';
let num2 = '';
let operation ='';

const currentDisplay = document.getElementById("display");
function clearDisplay(){
    currentDisplay.textContent = display;
    display = '';
    num1='';
    num2='';
    operation='';
}

let display = '';
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
numbers.forEach(button => {
    button.addEventListener('click', () => {
        display += button.textContent;
        currentDisplay.textContent = display;
        
    })
});
const clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    display = 0;
    clearDisplay();
});

function getNumber(button){
    const num = button.textContent;
}

let num1Length = 0;
operators.forEach(button =>{
    button.addEventListener('click', ()=>{
        num1 = display;
        operation = button.textContent;
        display += button.textContent;
        currentDisplay.textContent = display;
        num1Length = display.length;
    })
})

let equal = document.getElementById("equals");
equal.addEventListener('click', ()=>{
    num2 = display.substring(num1Length);
    let number1 = Number(num1);
    let number2 = Number(num2);
    if (operation == "+"){
        display = add(number1,number2);
        currentDisplay.textContent = display;
    }
    if (operation == "-"){
        display = subtract(number1,number2);
        currentDisplay.textContent = display;
    }
    if (operation == "*"){
        display = multiply(number1,number2);
        currentDisplay.textContent = display;
    }
    if (operation == "/"){
        display = divide(number1,number2);
        currentDisplay.textContent = display;
    }
});



