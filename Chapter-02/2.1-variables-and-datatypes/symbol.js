let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";

// To make a variable unique, use Symbol datatype below
let sym1 = Symbol("Java Script is fun!");
let sym2 = Symbol("Java Script is fun!");

console.log("There two strings are the same:", str1 === str2);
console.log("There two strings are the same:", sym1 === sym2);
