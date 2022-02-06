/* If you want to evaluating more than 4 or 5 values, it will be useful
the switch statement template below

switch(expression) {
 case value1:
 // code to be executed
 break;
 case value2:
 // code to be executed
 break;
 case value-n:
 // code to be executed
 break;
} 
*/

//Example
activity = "Lunch";
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
}
/* If you don't put break keyword, switch statement will execute the next case as well 
until it encounters the end of the statement or break.*/
