/* default = it works like the else part of if else statement.
If it doesn't find a match with any of the cases and a default case is present,
then it will execute the default case. The template will be as below
*/

switch (expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value - n:
    // code to be executed
    break;
  default:
    // code to be executed when no cases match
    break;
}

// it's a convention to have the default case at the last case in the switch statement

switch (activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot detarmine the current time");
    break;
}
