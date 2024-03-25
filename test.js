const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate(num1, operator, num2) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if(num2 != 0) {
          return num1 / num2;
        } else {
          console.log("Error! Division by zero.");
          return null;
        }
      default:
        console.log("Invalid operator");
        return null;
    }
  }
  
  readline.question('Enter the first number: ', (firstNumber) => {
    readline.question('Enter an operator (+, -, *, /): ', (operator) => {
      readline.question('Enter the second number: ', (secondNumber) => {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const result = calculate(num1, operator, num2);
        if(result !== null) {
          console.log(`The result is: ${result}`);
        }
        readline.close();
      });
    });
  });