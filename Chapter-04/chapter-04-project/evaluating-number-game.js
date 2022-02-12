let numberChecker = prompt("Enter your number"); // to create a prompt entry to get a number
numberChecker = Number(numberChecker);

// if statement that checkes the number entered is either conditions below
if (numberChecker > 777) {
  console.log("Your number is big!");
} else if (numberChecker == 777) {
  console.log("Your number is lucky number 7s");
} else if (numberChecker < 777) {
  console.log("Your number is too low");
} else {
  console.log("Your entry is invalid");
}
