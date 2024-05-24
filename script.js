function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return (a * b).toFixed(2);
}
function divide(a, b) {
    return (a / b).toFixed(2);
}

let firstNumber = -1;
let secondNumber = -1;
let operator = '';
const buttons = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen');
const displayValue = 0;
let lastValue = 0;
let isOperator = 0;
function operate(firstNumber, secondNumber, operator) {

    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
}
buttons.forEach(function (button) {
    button.addEventListener('click', () => {
        const display = document.createElement('span');
        if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
            if (isOperator !== 1 && firstNumber !== -1) {
                display.textContent = button.textContent;
                operator = button.textContent;
                screen.textContent = '';
            } else if (isOperator = 1) {
                firstNumber = display.textContent;
                result = operate(firstNumber, secondNumber, operator);
                display.textContent = '';
                screen.appendChild(result);
            }
            isOperator = 1;
        } else if (button.textContent === '=') {
            if (firstNumber !== -1 && secondNumber !== -1) {
                screen.textContent = '';
                let result = operate(firstNumber, secondNumber, operator);
                display.textContent = String(result);
                if (result !== 'Infinity') {
                    screen.appendChild(display);
                } else {
                    display.textContent = 'ERROR';
                    screen.appendChild(display);
                }
                firstNumber = operate(firstNumber, secondNumber, operator);
                isOperator = 0;
            }
        } else if (button.textContent === 'C') {
            screen.textContent = ''
            firstNumber = -1;
            secondNumber = -1;
            operator = '';
        } else {
            display.textContent = button.textContent;
            screen.appendChild(display);
            if (firstNumber === -1) {
                firstNumber = parseInt(button.textContent);
            } else {
                secondNumber = parseInt(button.textContent);
            }
        }
    })
})