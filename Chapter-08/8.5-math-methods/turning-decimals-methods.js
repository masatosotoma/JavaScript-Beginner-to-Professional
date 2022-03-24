// Math.round() = to round a number

let x = 6.78;
let y = 5.34;

console.log("X:", x, " becomes ", Math.round(x)); // it rounded as 7
console.log("y:", y, " becomes ", Math.round(y)); // it rounded as 5

// Math.ceil() = to round up the number example: 1.1 => 2

console.log("X:", x, " becomes ", Math.ceil(x)); // it rounded as 7
console.log("y:", y, " becomes ", Math.ceil(y)); // it rounded as 6

// for negative numbers, if the number works opposite from positive numbers

let negativeX = -x; // -6.78
let negativeY = -y; // -5.34
console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX)); // it loggs 6
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY)); // it loggs 5

// Math.floor() = to round down to the nearest integer number. Work opposite of the ceil()

console.log("X:", x, "becomes", Math.floor(x)); // it rounded as 6
console.log("Y:", y, "becomes", Math.floor(y)); // it rounded as 5

// for negative numbers, if the number works opposite from positive numbers

console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX)); // it loggs -7
console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY)); // it loggs -6

// Math.trunc() = to give the integer part of the number (remove after decimal, just get integer)

console.log("X:", x, "becomes", Math.trunc(x)); // it loggs 6
console.log("Y:", y, "becomes", Math.trunc(y)); // it loggs 5

// for negative numbers, still get the integer number

console.log("negativeX:", negativeX, "becomes", Math.trunc(negativeX)); // it logss -6
console.log("negativeY:", negativeY, "becomes", Math.trunc(negativeY)); // it loggs -5
