// to create a functorial calculator

// to create a function:condition to check if the argument is 0
function fuctorial(nr) {
  console.log(nr);
  if (nr === 0) {
    //if it's 0, return 1
    return 1;
  } else {
    return nr * fuctorial(--nr); // to call (recursive) calculate factorial including all the numbers counted down
  }
}

console.log(fuctorial(13));
