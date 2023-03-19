// 1. Create an array of numbers.

let numArr = [2, 4, 10, 27, 37, 29, 44, 71];

/*2. Using the array map method and an anonymous function, 
return an updated array, multiplying all the numbers in the array by 2. 
Output the result into the console.*/

let multiNumArr1 = numArr.map(function (x) {
  return x * 2;
});
console.log(multiNumArr1);

/*3. As an alternative method, use the arrow function format to multiply each element of the array by 2 
with the array map() method in one line of code.*/

let multiNumArr2 = numArr.map((e) => e * 2);
console.log(multiNumArr2);

// 4. Log the result onto the console.
