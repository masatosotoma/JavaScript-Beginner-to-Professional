// Nested function = We can have a function inside of a function

function doOuterFunctionStuff(nr) {
  // outer function
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    // inside of a function
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
  }
}
doOuterFunctionStuff(2);

/*
The outer function is calling its nested function. This nested function has access to the variables of the parent. 
Variables defined inside the inner function have function scope.
*/

