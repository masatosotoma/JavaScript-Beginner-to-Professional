/* Ternary operator
it has three operand template = operand1 ? operand2 : operand3;
operand1 is to be evaluated
→If the value of the expression is true, operand2 gets executed
→If the value of the expression is false, operand3 gets executed
*/

// The template for saying it meaning below
// if *operand1*, then *operand2*, else *operand3*

let access = age < 18 ? "denied" : "allowed";

//the code above bacially means like below

let access;
if (age < 18) {
  access = "denided";
} else {
  access = "allowed";
}

// You can also specify an action in a ternary statement
age < 18 ? console.log("denied") : console.log("allowed");
