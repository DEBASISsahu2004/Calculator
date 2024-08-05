let displayElement = document.querySelector(".cal-display");
let displayOperation = document.querySelector(".op-display");
let currentInput = '';
let operator = null;
let previousInput = '';

function clr() {
    currentInput = '';
    operator = null;
    previousInput = '';
    displayElement.innerHTML = currentInput;
    displayOperation.innerHTML = '';
}

function addNum(number) {
    currentInput += number;
    displayElement.innerHTML = currentInput;
}

function addOp(op) {
    if(currentInput === '' && op === '-'){
        currentInput = op;
        displayElement.innerHTML = currentInput;
        return;
    }
    if(currentInput !== '' && previousInput !== ''){
        result();
    }
    if (operator !== null) {
        operator = op;
        displayOperation.innerHTML = op;
        return;
    }
    if (currentInput === '' || currentInput === '-') {
        return;
    }

    operator = op;
    displayOperation.innerHTML = op;
    previousInput = currentInput;
    currentInput = '';
    displayElement.innerHTML = currentInput;
}

function result() {
    if (operator === null || currentInput === '') {
        return;
    }

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    displayOperation.innerHTML = '';
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }

    result = Math.round(result * 1e10) / 1e10;
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    displayElement.textContent = currentInput;
}

function del() {
    currentInput = currentInput.slice(0, -1);
    displayElement.textContent = currentInput;
}