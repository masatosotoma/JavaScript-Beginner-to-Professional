// toPrecision() = Similar to toFixed method. To specify the total number of numbers to look at.

let x = 1.23456;
let newX = x.toPrecision(2);
console.log(newX); // it will return 1.2 

let y = 1.23456;
let newY = y.toPrecision(4);
console.log(newY); // it will return 1.235 as a rounded number
