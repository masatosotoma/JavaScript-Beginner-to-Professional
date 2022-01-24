let a = prompt("Value 1?"); // Enter the value using prompt window
let b = prompt("Value 2?"); // Enter the another value using prompt window

a = Number(a); // To convert the entry a to number
b = Number(b); // To convert the entry b to number

//If the entries from the prompt are not numbers, it will return NaN

let hypotenuseVal = (a * a + b * b) ** 0.5;
console.log(hypotenuseVal);
