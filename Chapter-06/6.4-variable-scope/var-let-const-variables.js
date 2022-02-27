/* 
var variable = function scope, if you declare it in the function, you can use it in the scope
let variable = block scope, defined by {} which is block scope
const variable = block scope, but you cannot reassign values once it's declared(unless change properties of the const objects)
*/

//Example var variable
function doingStuff() {
  if (true) {
    var x = "local";
  }
  //  console.log(x);
}
doingStuff();

//Example let variable
function doingStuff2() {
  if (true) {
    let x = "local";
  }
  //  console.log(x); // it's not defined since x is not in the same block
}
doingStuff2();

// The difference of var & let is that relates to the order of the declaration in a script

//Example let
function doingStuff3() {
  if (true) {
    console.log(x);
    let x = "local";
  }
}
//doingStuff3(); // it comes with an error bcz the x is not defined before console.log

//Example var

function doingStuff4() {
  if (true) {
    console.log(x);
    var x = "local";
  }
}

doingStuff4(); //x is declared but it's not defined.(x is found)

/*
hoisting =  means using a var variable before it's been declared results in the variable
being undefined rather than giving a ReferenceError.
*/

//Example const variable
function doingStuff5() {
  if (true) {
    const x = "local";
  }
  console.log(x);
}

doingStuff5(); // const variable is not accessable bcz it's block scope
