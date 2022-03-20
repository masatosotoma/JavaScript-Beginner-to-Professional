// Using the replace() string method, complete this vowel replacer exercise by replacing the vowels in a string with numbers.

// Create the specified string, and convert it to lowercase.
let str = "I love JavaScript";
str = str.toLowerCase();

// Create an array containing the vowels: a, e, i, o, u.
let vowels = ["a", "e", "i", "o", "u"];

// Loop through each letter you have in the array, and output the current letter into the console
vowels.forEach((letter, index) => {
  console.log(letter);
  str = str.replaceAll(letter, index); // using replaceAll() update each vowel substring with the index value of the letter
});

//Once the loop completes output the result of the new string into the console.
console.log(str);
