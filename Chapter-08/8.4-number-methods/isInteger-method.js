// isInteger() = You have to refer to the number object to use it.
// it returns true if the value is an integer and false when it's not an integer

let x = 3;
let str = "integer";
console.log(Number.isInteger(x)); // it return true because it's an integer number
console.log(Number.isInteger(str)); // it return false because it's a string value
console.log(Number.isInteger(Infinity)); // it return false because it's not an integer but infinity
console.log(Number.isInteger(2.4)); // it return false because it's not an integer but a dicimal number
