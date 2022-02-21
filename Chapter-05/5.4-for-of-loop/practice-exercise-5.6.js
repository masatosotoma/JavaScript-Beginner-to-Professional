// to construct an array as it loops through the incrementing values of x

let arr = []; //to create an empty array

// to run a loop 10 times adding a new incrementign value to the array
for (let x = 0; x < 10; x++) {
  arr.push(x + 1);
}
console.log(arr); // log the array into the console

// to use the for loop to iterate through the array(values are in your array)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // output into the console
}

// to use for of loop, to output the values into the console
for (let num of arr) { 
  console.log(num);
}
