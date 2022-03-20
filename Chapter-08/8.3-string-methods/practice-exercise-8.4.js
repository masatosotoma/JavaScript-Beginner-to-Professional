/* create a function that will return a string with the first letter of all the words capitalized 
and the rest of the letters in lowercase
*/

// Create a string with several words mixed with upper/lower cases
let intro = "My name is Masato Sotoma";

// Create a function that gets a string as an argument, which will be the value that we will manipulate
function multi(str) {
  str = str.toLowerCase(); // In the function first transform everything to lowercase letters
  let arr = []; //Create an empty array
  let byWord = intro.split(" "); //Convert the phrase into words in an array using the split() method.
  // Using slice() isolate the first letter in each word, then transform it to  uppercase.
  byWord.forEach((word) => {
    let temp = word.slice(0, 1).toUpperCase() + word.slice(1); // Then concatenate the two together to form the word that is now capitalized.
    arr.push(temp);
  });
  return arr.join(" "); // Take the array of updated words and using the join() method, transform them back into a string with spaces 
}

console.log(multi(intro));
