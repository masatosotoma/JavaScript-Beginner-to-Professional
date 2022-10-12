//Create a function that returns a value of a word and scrambles the letter order with Math.random():

//Create a string that will hold a word value of your choice.
let answerWord = "Toronto";
//Create a function that can intake a parameter of the string word value.
function scrambleWord(word) {
  let defaultArray = []; //the default array for putting word
  let result = []; // Created the result array
  for (i = 0; i <= word.length; i++) {
    defaultArray.push(word.charAt(i)); //Put the word to the default array
  }
  console.log(defaultArray); //Check if the word is in the array

  let scrambled = []; // Created the array for the scrambled word
  for (x = 0; x < word.length; x++) {
    //Used the random number method to get the random# of for the index
    //In order to get the dupulicated letters, set up the x100 of word.length 
    randomNum = Math.floor(Math.random() * (word.length * 100)); 
    scrambled.push(defaultArray[randomNum]);
    if (!scrambled[randomNum]) {
      scrambled[randomNum] = word[x];
    } else {
      i--;
    }
  }
  // To remove undefined values from the scrambled array
  scrambled.join("");
  result = scrambled.filter(function (ele) {
    return ele !== undefined;
  });
  console.log(result);
}

scrambleWord(answerWord);
