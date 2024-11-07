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
        throw new Error("Cannot divide by zero");
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


let num1 = 0;
let num2 = 0;
let operation = "+";