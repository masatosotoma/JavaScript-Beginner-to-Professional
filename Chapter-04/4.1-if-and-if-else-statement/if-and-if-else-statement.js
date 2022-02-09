/* if statement = 
if *some condition is true*, then *a certain action will happen*, else *another action will happen*
*/
if (expression) {
  // code associated with the if block
  // will only be executed if the expression is true
} else {
  // code associated with the else block
  // we don't need an else block, it is optional
  // this code will only be executed if the expression is false
}

// Below an example
let rain = true;

if (rain) {
  console.log("** Taking my umbrella when I need to go outside **");
} else {
  console.log("** I can leave my umbrella at home **");
}
// Since it's true, it will return the first statement

//Another example using operator below

if (age < 18) {
  console.log("We're very sorry, but you can't get in under 18");
} else {
  console.log("Welcome!");
}
