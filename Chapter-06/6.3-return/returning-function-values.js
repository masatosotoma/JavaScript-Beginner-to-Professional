/*
When we specify a return value, functions can give back a result
the return value can be stored in a variable ex/prompt()
*/

// Example
function addTwoNumbers(x, y) {
  return x + y;
}

let result = addTwoNumbers(2, 6);
console.log(result);

// Another example with loop

let resultsArr = [];
for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * i);
  resultsArr.push(result);
}
console.log(resultsArr);
