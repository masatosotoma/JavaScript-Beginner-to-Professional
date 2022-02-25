/* Rest parameter = the same symbol as the spread operator,
but it is used inside the function parameter list.

If we use the rest parameter, it allows you to send in any number of arguments,
and translate them into a parameter array
*/

function someFunction(param1, ...param2) {
  console.log(param1, param2);
}
someFunction("hi", "there", "How are you?");

// In this rest parameter case, not only 2 arguments, but rest of the arguments will be created as array
