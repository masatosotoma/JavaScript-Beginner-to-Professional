let x = 1;
let y = 2;
let z = 3;

// When you use "&&" for comparison operators, it will only return if the both expressions are true.
console.log(x < y && y < z); // Since both expressions are true, it will return true.
console.log(x > y && y < z); // Since one part of the expression is not true, it will return false.

// When you "||" for comarison operators, it will return true if either of the expressions is true.

console.log(x > y || y < z); // Since one part of the expression is true, it will return true.
console.log(x > y || y > z); // If both side are false, it will return false.

// "!" mark will flip the value of the boolean

let a = false;
console.log(!a); // it will change false boolean value to true value.

let b = 1;
let c = 2;

console.log(!(b < c)); // Although b < c is true, using ! to change the boolean value to false, which means it will return false.
