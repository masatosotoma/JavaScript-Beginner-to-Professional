/* Spread operator is a special operator
It consists of 3 dots used before a referenced expression or string,
and it speads out the arguments or elements of an array
*/

//Exmaple

let spread = ["so", "much", "fun"];
let message = ["JaveScript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

//the element of the spread operator become indivisual elements in the array

//It can also be used to send multiple arguments to a function

function addTwoNumbers(x, y) {
  console.log(x + y);
}
let arr = [5, 9];
addTwoNumbers(...arr);
// the arguments will be put in the function are 5 & 9, which are the elements of arr

// You can call a function with multiple spread operators. To avoid having to copy a long array or string into function

function addFourNumbers(x, y, z, a) {
  console.log(x + y + z + a);
}
let arr1 = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr1, ...arr2); // the arguments will be 5,9 and 6,7
