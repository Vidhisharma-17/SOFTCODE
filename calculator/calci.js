let display = document.getElementById("display");
let currentInput = "";
let isOperatorLast = false;

function appendNumber(number) {
    if (currentInput === "0" || isOperatorLast) {
        currentInput = "";
    }
    currentInput += number;
    isOperatorLast = false;
    updateDisplay();
}

function appendOperator(operator) {
    if (!isOperatorLast && currentInput !== "") {
        if (operator === "=") {
            calculate();
        } else {
            currentInput += operator;
            isOperatorLast = true;
        }
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "0";
    isOperatorLast = false;
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = "Error";
    }
    isOperatorLast = false;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || "0";
}

