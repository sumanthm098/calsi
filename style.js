function appendValue(value) {
    document.getElementById('screen').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('screen').value = '';
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const expression = document.getElementById('screen').value;
    const result = eval(expression);
    document.getElementById('screen').value = result;
    document.getElementById('display').value = expression;
  }