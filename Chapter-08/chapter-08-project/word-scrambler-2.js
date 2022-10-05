//Create a function that returns a value of a word and scrambles the letter order with Math.random():

//1.Create a string that will hold a word value of your choice.
let answerWord = "CANADA";
//2.Create a function that can intake a parameter of the string word value.
function scrambleWord(word) {
  defaultArray = [];
  for (i = 0; i <= word.length; i++) {
    defaultArray.push(word.charAt(i));
  }
  console.log(defaultArray);
  let scrambled = [];
  for (x = 0; x < word.length; x++) {
    randomNum = Math.floor(Math.random() * (word.length * 10));
    scrambled.push(defaultArray[randomNum]);
    if (!scrambled[randomNum]) {
      scrambled[randomNum] = word[x];
    } else {
      i--;
    }
  }
  scrambled.join("");
  console.log(scrambled);
}

scrambleWord(answerWord);
