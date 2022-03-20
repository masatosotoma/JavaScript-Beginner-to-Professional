// startWith() = to check if the string starts with the specific letters. Return true or false

//example
let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You"); // it will return true
console.log(bool_start);

//example2: it also check upper/lowercase is matched.

let bool_start2 = encouragement.startsWith("you"); // it will return false because it's not
console.log(bool_start2);

//example3: If you don't care about uppercase or lowercase, toLowerCase() method at the same time

let bool_star3 = encouragement.toLowerCase().startsWith("you"); // it will return true
console.log(bool_star3);

// endWith() = same like startWith but this will checking whether a string ends with a cerain string
let bool_end = encouragement.endsWith("Something else"); // it will return false because it's not ended with this string
console.log(bool_end);
