/* 
Scope defines where you can access a certain variable

when a variable is ou of scope, you cannot access the variable

*/

// Exmaple for local variable

function testAvailability(x) {
  console.log("Available here:", x);
}
// x is only existed in this function scope

testAvailability("Hi!");
console.log("Not available here", x);
// since x is not existed in the global scope, x is not defined so it comes with a reference error

function testAvailability2() {
  let y = "Local variable";
  console.log("Available here", y);
}
// Use let keyword to create a varialbe in the function sconpe, y is only existed in the function scope,not available out of scope

testAvailability2();
console.log("Not available here", y);

// If you want to get the value in the function scope, you need to use the return keyword to get the value out
//Example

function testAvailability3() {
  let y = "I'll return";
  console.log("Available here!", y);
  return y;
}

let z = testAvailability3();
console.log("Outside the function:", z);
console.log("Not available here:", y);
