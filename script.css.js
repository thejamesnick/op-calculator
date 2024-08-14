// The calculator JS Code.

let operator = "";
let currentInput = "";
let display;

// Wait for the DOM to load before running the JS code.
document.addEventListener('DOMContentLoaded', () => {
    display = document.getElementById('display');

    // Update the display with the input.
    function updateDisplay(input) {
        display.value += input;
    }

    // Clear the input.
    function clearInput() {
        currentInput = "";
        display.value = "";
    }

    // Add event listeners to the buttons.
    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentInput = button.textContent;
            updateDisplay(currentInput);
        });
    });


    // Add event listeners to the operator buttons.
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            operator = button.textContent;
            updateDisplay(operator);
        });
    });

    function calculate() {
        try {
            display.value = eval(display.value);
        }
        catch {
            display.value = "Error";
        }
    }

    // Add event listener to the equals button.
    const equalsButton = document.getElementById('equals');
    equalsButton.addEventListener('click', calculate);

    // Add event listener to the clear button.
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', clearInput);
});
