// 1. Set up two variables containing number values.
let num1 = 767;
let num2 = 9886;

// 2. Set up a variable to hold an operator, either + or -.
let plus = "+";
let minus = "-";

/*3. Create a function that retrieves the two values and the operator string value within its parameters. 
Use those values with a condition to check if the operator is + or -, 
and add or subtract the values accordingly */
function calculate(val1, val2, opert) {
  if (opert == "+") {
    let answer1 = val1 + val2;
    return answer1;
  } else if (opert == "-") {
    let answer2 = val1 - val2;
    return answer2;
  } else {
    console.log("Invalid");
  }
}

//4. Within console.log(), call the function using your variables and output the response to the console.
console.log(calculate(num1, num2, plus));

/*5. Update the operator value to be the other operator type—either 
plus or minus—and call to the function again with the new updated arguments.*/
console.log(calculate(num2, num1, minus));
