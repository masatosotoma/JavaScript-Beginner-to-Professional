// Output the value of PI into the console using Math
console.log(Math.PI);
// Using Math get the ceil() value of 5.7, get the floor() value of 5.7,
// get the round value of 5.7, and output it into the console

let x = 5.7;

let ceilX = Math.ceil(x);
console.log(ceilX);

let floorX = Math.floor(x);
console.log(floorX);

let roundX = Math.round(x);
console.log(roundX);

// Output a random value into the console
console.log(Math.random());

// Use Math.floor() and Math.random() to get a number from 0 to 10
console.log(Math.floor(Math.random() * 11)); // 0-10
// Use Math.floor() and Math.random() to get a number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // 1-10
// Use Math.floor() and Math.random() to get a number from 1 to 100.
console.log(Math.floor(Math.random() * 100) + 1); // 1-100

// Create a function to generate a random number using the parameters of min and max
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let x = 0; x < 100; x++) {
  console.log(randomNum(1, 100));
}
