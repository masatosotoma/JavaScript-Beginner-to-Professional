/*
arguments = in functions by adding them to a custom object
object works a lot like an array, and we can use it instead of using the name of the parameter
*/

function test1(a, b, c) {
  console.log("first", a, arguments[0]);
  console.log("second", b, arguments[1]);
  console.log("third", c, arguments[2]);
}

test1("fun", "js", "secrets");

//When you update one of the parameters, the argument gets changed accordingly.

function test2(a, b, c) {
  a = "nice";
  arguments[1] = "JavaScript";
  console.log("first", a, arguments[0]);
  console.log("second", b, arguments[1]);
  console.log("third", c, arguments[2]);
}

test2("fun", "js", "secrets");

/*If the function is called with more arguments than were declared in the function
signature, this is the way to access them. However, the modern way is to use the rest
parameter (…param) instead of the arguments object.*/