/*1. Create a string with several words that have letters with different cases, 
a mix of upper and lowercase words.*/
let word = "Toronto Raptors may go to the playinn game";

// 2. Create a function that gets a string as an argument, which will be the value that we will manipulate.
function wordDivide(str) {
  // 3. In the function first transform everything to lowercase letters.
  let letter = str.toLowerCase();
  // 4. Create an empty array that can hold the values of the words when we capitalize them.
  let arr = [];
  // 5. Convert the phrase into words in an array using the split() method.
  let words = letter.split(" ");

  /* 6. Loop through each one of the words that are now in the new array, 
so you can select each one independently. You can use forEach() for this.*/
  words.forEach((element) => {
    /*7. Using slice() isolate the first letter in each word, then transform it to uppercase. 
    Again using slice(), get the remaining value of the word without including the first letter. 
    Then concatenate the two together to form the word that is now capitalized.*/
    let temp = element.slice(0, 1).toUpperCase() + element.slice(1);

    /*8. Add the new capitalized word into the blank array that you created. 
By the end of the loop you should have an array with all the words as separate items in the new array.*/
    /*9. Take the array of updated words and using the join() method, 
transform them back into a string with spaces between each word.*/
    arr.push(temp);
    /*10. Return the value of the newly updated string with capitalized words 
that can then be output into the console.*/
  });
  return arr.join(" ");
}

console.log(wordDivide(word));
