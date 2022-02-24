// If you call the function without any arguments, JavaScript gives you the default type, which is undefined call NaN

// Exmaple

function addTwoNumbers(x = 2, y = 3) {
  // set the default arguments
  console.log(x + y);
}

addTwoNumbers(); // Since no arguments when it's called, the default arguments will be calculated = 5
addTwoNumbers(6, 6); // The arguments are given, so it will calculate with the given arguments = 12
addTwoNumbers(10); // Only one argument is given, it will override the first parameter and get the default argument for the rest = 13
addTwoNumbers(1,2,3,4); //Call more arguments than parameters, only execute the first arguments that is set to the parameters = 3