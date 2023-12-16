let displayValue = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendInput(input) {
  if (displayValue === '0') {
    displayValue = input;
  } else {
    displayValue += input;
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  firstOperand = displayValue;
  displayValue = '0';
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = '';
  updateDisplay();
}

function calculate() {
  let result;
  const secondOperand = displayValue;

  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }

  displayValue = result.toString();
  operator = '';
  firstOperand = '';
  updateDisplay();
}
