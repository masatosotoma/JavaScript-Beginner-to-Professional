/* When you want to execute at leaset once, you can use do while loop
It execute what is within a block, and then after that it evaluates the while.
If the condithon is true, it will execute what is in the do block again.
 the syntax of do while loop is like below

do {
 // code to be executed if the condition is true
} while (condition);


 */

//example
let number;
do {
  number = prompt("Please enter a number between 0 and 100");
} while (!(number >= 0 && number < 100)); // it will loop if number is greater/equal to 0 and less than 100

//If you enter number that is less than 0 or more than 100, the loop will keep asking you the number