const maxValue = 5; // to set the max amount you will be guessing
const randomNum = Math.floor(Math.random() * maxValue) + 1; // to set the random number up to the maxValue number
let yourAnswer = false; // to set your anwer as false

while (!yourAnswer) {
  // it will keep executing until the your anser becomes false.
  let input1 = prompt("Enter a number between 1 - " + maxValue); // to ask the player to input the number he/she guesses
  input1 = Number(input1); // to convert it to number date
  if (input1 === randomNum) { // if the input and the random number matches, your answer will become true, which ends the loop
    yourAnswer = true;
    console.log("Your guess is correct!");
  } else if (input1 > randomNum) {
    console.log("Your guess is high");
  } else if (input1 < randomNum) {
    console.log("Your guess is low");
  } else {
    console.log("Your answer is invalid");
  }
}
