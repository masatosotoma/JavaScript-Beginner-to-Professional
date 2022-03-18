// slice() = to create substrings from strings. Doesn't change the original but get a new string.
// takes 2 parameters; 1st = index at which it starts, 2nd = the end index
// if you leave out the second index, it will just continue to the end of the string

let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3);

console.log(substr1);
console.log(substr2);
