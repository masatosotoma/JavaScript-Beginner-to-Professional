/*
 immediately invoked function expression (IIFE) 
 - way of expressing a function to invoke immediately
 - it's anonymousm it doesn't have a name and it is self-executing
 - useful when you want to initialize something using a function
 - it's also used in many design pattern
*/

(function () {
  console.log("IIFE!");
})();

/* the above is the same as below (except naming)
function noName(){
  console.log("IIFE!");
};

noName();
*/

// (); executes the unnamed function. If IIFE needs arguments, you can put them in
// Example: To use IIFE with other function

(() => {
  console.log("run right away");
})();
