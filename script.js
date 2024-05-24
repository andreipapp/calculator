function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

const firstNumber = 0;
const secondNumber = 0;
const operator = '';

function operate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
        add(firstNumber, secondNumber);
    } else if (operator === '-') {
        subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        divide(firstNumber, secondNumber);
    }
}