// Create a function that returns a value of a word and scrambles the letter order with Math.random():

// Create a string that will hold a word value of your choice
let str = "March Break";

// Create a function that can intake a parameter of the string word value

function scramble(val) {
  let max = val.length; // use length to set the loop maximum value
  let temp = ""; // Create an empty temporary string variable
  // Create a for loop that will iterate the number of letters within the string parameter at 0
  for (x = 0; x < max; x++) {
    console.log(val.length);
    // variable that will randomly select one letter using its index value

    let randomNum = Math.floor(Math.random() * val.length);
    // Add the new letter to the new string and remove it from the original string.
    temp += val[randomNum];
    // Using console.log() output the newly constructed string from the random letters
    console.log(temp);

    //Update the original string by selecting the substring from the index value
    //and adding it to the remaining string value from the index plus one onward.
    val = val.substr(0, randomNum) + val.substr(randomNum + 1);
    console.log(val);
  }
  return temp;
}
console.log(scramble(str));
