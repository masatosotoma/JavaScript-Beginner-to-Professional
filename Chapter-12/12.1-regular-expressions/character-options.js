let text1 = "d";

//if want to search for a string of only one character equal to a, b, or c
console.log(text1.match(/[abcd]/));

//If you want to write it shorter
console.log(text1.match(/[a-d]/));

//if you wanted any letter, lowercase or uppercase
let text2 = "t";

console.log(text2.match(/[a-zA-Z]/));

// You can use e case-insensitive modifier to do lowercase/uppercase
console.log(text2.match(/[a-z]/i));

// to include numbers as well
console.log(text2.match(/[a-zA-Z0-9]/));

// the match doesn't work
let text3 = "äé!";
console.log(text3.match(/[a-zA-Z0-9]/)); // return null

//the dot functions as a special wildcard character in regex that can match any character
let text4 = "Just some text.";
console.log(text4.match(/./g)); // return all letters
//if you only wanted to find a match for the dot character itself

/*
If you want a special character (one that is used in regex to specify a pattern) to have a normal meaning, 
or a normal character to have a special meaning, you can escape it using the backslash:
*/
let text5 = "Just some text.";
console.log(text5.match(/\./g));

//If we escape the d, \d, it matches any digit. We are doing a global search so it will specify any digit.
let text6 = "I'm 29 years old.";
console.log(text6.match(/\d/g));

//You can also escape the s, \s, which matches all whitespace characters
let text7 = "Coding is a lot of fun!";
console.log(text7.match(/\s/g));

// Usuful one \b, which matches text only when it's at the beginning of a word
let text8 = "In the end or at the beginning?";
console.log(text8.match(/\bin/gi));

//the match() method belongs to the string object, it will return error if you try to match with number
let nr = 357;
console.log(nr.match(/3/g)); //return an error
