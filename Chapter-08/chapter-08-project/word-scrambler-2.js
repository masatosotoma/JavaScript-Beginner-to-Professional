//Create a function that returns a value of a word and scrambles the letter order with Math.random():

//Create a string that will hold a word value of your choice.
let answerWord = "Toronto";
//Create a function that can intake a parameter of the string word value.
function scrambleWord(word) {
  let defaultArray = [...word]; //the default array for putting word
  // for (i = 0; i <= word.length; i++) {
  //   defaultArray.push(word.charAt(i)); //Put the word to the default array
  // }

  // [...word].forEach((character) => {
  //   defaultArray.push(character);
  // });
  console.log(defaultArray); //Check if the word is in the array

  let scrambled = []; // Created the array for the scrambled word
  for (x = 0; x < word.length; x++) {
    //Used the random number method to get the random# of for the index
    //In order to get the dupulicated letters, set up the x100 of word.length
    let randomNum = Math.floor(Math.random() * (word.length - x));
    scrambled.push(defaultArray[randomNum]);
    delete defaultArray[randomNum];
    let filteredArray = defaultArray.filter((ele) => ele !== undefined);
    defaultArray = filteredArray;
  }
  // To remove undefined values from the scrambled array
  console.log(scrambled);
}

scrambleWord(answerWord);
