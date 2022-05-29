/*
When we are dealing with code that depends on some sort of outside input, 
such as an API, user input, or a file we will need to deal with the errors that this input can cause
*/

try {
  somethingVeryDangerous();
} catch (e) {
  if (e instanceof TypeError) {
    // deal with TypeError exceptions
  } else if (e instanceof RangeError) {
    // deal with RangeError exceptions
  } else if (e instanceof EvalError) {
    // deal with EvalError exceptions
  } else {
    //deal with all other exceptions
    throw e; //rethrow
  }
}

/*If it throws an error, it will end up in the catch block. Since Error could mean
many different errors, we are going to check for the exact error we are dealing with
and write a specific handling of this error.*/

//instanceof operator = We check the exact error class with this command

//finally block = gets executed irrespective ofwhether errors are thrown. great for cleanup purposes.

try {
  trySomething();
} catch (e) {
  console.log("Oh oh");
} finally {
  console.log("Error or no error, I will be logged!");
}

// throw =  for whatever reason, you need to throw an error
function somethingVeryDangerous() {
  throw RangeError();
}
