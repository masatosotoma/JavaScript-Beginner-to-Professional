// In case you want to call the same function from inside the function, that will do the recursive functions

function getRecursive(nr) {
  console.log(nr);
  // to give the ending point of the countdown
  if (nr > 0) {
    getRecursive(--nr); // recursive function
  }
}

getRecursive(3); // when it calls, it will output the countdown from 3 to 0

/* 
When you feel the need to call the same function over and over again in a loop, 
you should probably consider recursion.
For example, searching for something instead of looping.
Recursion is slightly worse than the loop. It may slow down your application.
*/

// An another example
function logRecursive(nr1) {
  console.log("Started function:", nr1);
  if (nr1 > 0) {
    logRecursive(nr1 - 1); // recursive function
  } else {
    console.log("done with recursioin");
  }
  console.log("Ended function:", nr1);
}

logRecursive(3);
