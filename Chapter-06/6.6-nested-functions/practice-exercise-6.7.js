//Create a countdown loop starting at a dynamic value of 10

let start = 10; //used as the starting value for the loop

//Create a function that takes one argument, which is the countdown value
function countdown1(x) {
  console.log(x);
  if (x < 1) {
    return;
  }
  return countdown1(x - 1);
}
countdown1(start);

function countdown2(y) {
  console.log(y);
  if (y > 0) {
    y--;
    return countdown2(y);
  }
  return;
}
countdown2(start);
