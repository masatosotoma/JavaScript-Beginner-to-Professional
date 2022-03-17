// Create an array of names of people the duplicate names

let nameArr = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

// assign the results of each item from the array as arguments within an function
// add a console.log call within the function that will output the index value of the current item in the array.

function checkDupe(value, index, array) {
  console.log(value, index, array.indexOf(value)); // console.log call within the function that will output the index value and index
  return array.indexOf(value) === index; // set the return value to true 
}
// If the value's index# and the index# of the element are matched, it will be left and return it to a new array,
// If the value's index# and the indec# of the element are not matched, it won't return

let nameArr2 = nameArr.filter(checkDupe);
console.log(nameArr2);
