/* Arrow function = special way of writing functions
 The syntaxs is below

1. (param1, param2) => body of the function;
2. () => body of the function;  // no parameters
3. param => body of the function; //for one parameter (no parentheses are needed here)
4. //for a multiline function with two parameters
(param1, param2) => {
 // line 1;
 // any number of lines;
};

Arrow functions are useful whenever you want to write an implementation on the spot, 
such as inside another function as an argument

 */

// Example
let doingArrowStuff = (x) => console.log(x);
/* above means
function doingStuff(x) {
 console.log(x);
}
*/

doingArrowStuff("Great!"); // invoking the function

//If there is more than 1 argument
let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(5, 7);

//If there is no argument
let sayHi = () => console.log("Hi");
sayHi(); // just invoke without argument

//You can combine the arrow function with certain built-in methods
const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach((e) => console.log(e)); // for each with arrow function
