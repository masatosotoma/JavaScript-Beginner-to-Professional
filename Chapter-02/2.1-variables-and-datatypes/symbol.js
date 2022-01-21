let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";

// To make a variable unique, use Symbol datatype below
let sym1 = Symbol("Java Script is fun!");
let sym2 = Symbol("Java Script is fun!");

console.log("There two strings are the same:", str1 === str2); //Return true because they are the same strings
console.log("There two strings are the same:", sym1 === sym2); //Return false because they are unique symbol variables
