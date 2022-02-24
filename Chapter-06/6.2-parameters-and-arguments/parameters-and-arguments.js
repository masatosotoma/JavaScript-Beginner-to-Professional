// A parameter = The information passed into a function. The variable listed inside the parentheses of the function definition
// An argument =  An object that is accessible inside functions that contain the values of the arguments passed to that function.

// Example

function tester(para1, para2) {
  return para1 + " " + para2;
}
const arg1 = "argument 1";
const arg2 = "argument 2";

tester(arg1, arg2);

// Example 2

function addTwoNumbers(x, y) {  //x and y are the parameters
  console.log(x + y);
}
addTwoNumbers(3, 4); // 3 and 4 are the arguments
addTwoNumbers(12, -90);
