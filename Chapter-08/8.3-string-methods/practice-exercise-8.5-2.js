// 1. Create the previously specified string, and convert it to lowercase.
let word = "Toronto Raptors may go to the playinn game";
word = word.toLowerCase();
console.log(word);

// 2. Create an array containing the vowels: a, e, i, o, u.
let vowels = ["a", "e", "i", "o", "u"];

/*3. Loop through each letter you have in the array, and output the current letter into the console 
so that you can see which letter will be converted.*/

vowels.forEach((ele, index) => {
  /*4. Within the loop, using replaceAll() update each vowel substring 
with the index value of the letter from the vowel array.*/
  word = word.replaceAll(ele, index);
});

//5. Once the loop completes output the result of the new string into the console.
console.log(word);
