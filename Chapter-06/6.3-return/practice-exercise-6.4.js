const totalArr = []; //create an empty array

// to create a function that add two numbers
function cal(x, y) {
  return x + y;
}

for (i = 0; i < 10; i++) {
  let val1 = 5 * i; // to multiply the value of the loop count by 5
  let val2 = i * i; // multiply the value of the loop counter by itself
  let sum = cal(val1, val2); // call the function to calculate
  totalArr.push(sum); // to add the numbers to the empty array
}

console.log(totalArr);
