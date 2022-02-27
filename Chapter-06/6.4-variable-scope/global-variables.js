/*
Global variables = variables declared outside a function
-it's accessible in the scopeeither function or block
-Can be accessed from anywhere
*/

let globalVar = "Accessible everywhere!";
console.log("Outside function", globalVar);

function creatingNewScope(x) {
  console.log("Access to global vars inside function.", globalVar);
}

creatingNewScope("some argument");

console.log("Still available", globalVar);

/* If you use the same variable name in the global scope and local scope,
those are different variables but you sometimes use it depending on the configulation
*/

//Example
let x = "global";
function doingStuff() {
  let x = "local"; // different variable than global let x
  console.log(x);
}
doingStuff();
console.log(x);

// If you have the same parameter name as a global variable, the value of the parameter will be used:

let i = "global";
function doingStuff2(i) {
  console.log(i);
}
doingStuff2("param");

//

function confuseReader() {
  y = "Guess my scope...";
  // although it's inside of the function, y is global variable since it's declare without keyword/scope type
  console.log("Inside the function:", y);
}

confuseReader();
console.log("Outside of function:", y); // it will get the y in the scope (it's global)

// It's is not a good practice to create a global variable inside the function