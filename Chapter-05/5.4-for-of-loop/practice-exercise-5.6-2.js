// 1. Create an empty array
let arr = [];

// 2. Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i <= 10; i++) {
  arr.push(i);
}

// 3. Log the array into the console
console.log(arr);

/*4. Use the for loop to iterate through the array (adjust the number of iterations to 
    however many values are in your array) and output into the console*/
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 5. Use the for of loop to output the value into the console from the array
for (let num of arr) {
  console.log(arr[num]);
}
