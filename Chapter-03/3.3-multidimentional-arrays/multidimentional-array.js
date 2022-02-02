// arrays can also contain other arrays, which is called a dimentional array

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];

console.log(arrOfArrays);

// you can also write like this

let arrOfArrays2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arrOfArrays2);

//If you want to access elements of the inner arrays, you will have to specify an index twice:
let value1 = arrOfArrays[0][1]; // means that to return the first array's index 1
console.log(value1);

let value2 = arrOfArrays[2][2]; // means that to return the 3rd array's index 3
console.log(value2);

// you can even make 3-dimentional array
arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);

// to get the middle element of the array will be below
let middlevalue = arrOfArraysOfArrays[1][1][1];
console.log(middlevalue);
