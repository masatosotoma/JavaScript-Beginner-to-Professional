// Set up two variables containing number values
num1 = 3;
num2 = 6;

//Set up a variable to hold an operator, either + or -
operator = "+";

// To create a function that calculate two numbers depending on the operators
function calTwoNum(x, y) {
  if (operator === "+") {
    console.log(x + y);
  } else if (operator === "-") {
    console.log(x - y);
  }
}
calTwoNum(num1, num2);

// Update the operator value to be the other operator type
operator = "-";

calTwoNum(num1, num2);
