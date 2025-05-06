let currentInput = '';
let previousInput = '';
let operator = null;

function appendValue(value) {
  currentInput += value;
  document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  document.getElementById('display').textContent = '0';
}

function setOperator(op) {
  if (currentInput === '') return;  // Do nothing if there's no input
  if (previousInput !== '') {
    calculate();  // If there's a pending calculation, perform it
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Can't divide by zero!");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  document.getElementById('display').textContent = currentInput;
}
