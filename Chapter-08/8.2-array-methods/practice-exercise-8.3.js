// Using the array map() method, update an array's contents

let numbers = [3, 6, 7, 9, 11, 15, 18];

// Using the array map method and an anonymous function,
// array, multiplying all the numbers in the array by 2

let mapped_arr1 = numbers.map(function (x) {
  return x * 2;
});

console.log(mapped_arr1);

// Use the arrow function format to multiply each element of the array by 2
let mapped_arr2 = numbers.map((i) => i * 2);

console.log(mapped_arr2);
