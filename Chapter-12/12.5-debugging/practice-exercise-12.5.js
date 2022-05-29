//1. Using throw, try, and catch, check if the value is a number, and if it's not, then create a custom error.

//2. Create a function with one argument called val

function erroCheck(val) {
  //3.Use try, and within it add a condition that checks whether val is a number using isNaN
  try {
    if (isNaN(val)) {
      // If true, then throw an error that states that it is not a number.
      throw "Not a number";
    } else {
      //Otherwise, output Got a number to the console.
      console.log("Got number");
    }
  } catch (e) {
    //4.Use catch to catch any errors and output the error values to the console
    console.error(e);
  } finally {
    //5.Add finally to run and output the value, and when the function has completed, also include the value of val.
    console.log("Done "+ val);
  }
}
//6.Create one request to the function with a string argument and another with a number.

erroCheck("a");
erroCheck(10);
