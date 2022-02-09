// To create a variable "prize" and ask a number between 0-10;
let prize = prompt("Choose a number between 0-10");
prize = Number(prize); // To convert the prompt response to number datatype

let message = "My Selection: "; // to create a variable for the output

// to create switch statement to assign the prize for the numbers
switch (prize) {
  case 0:
    message += "PS4";
    break;
  case 1:
    message += "Nitendo Switch";
    break;
  case 2:
    message += "Walmart gift card";
    break;
  case 3:
    message += "A car";
    break;
  case 4:
    message += "A house";
    break;
  case 5:
    message += "A movie ticket";
    break;
  case 6:
    message += "A new sofa";
    break;
  case 7:
    message += "A bottle of water";
    break;
  case 8:
    message += "Iceream";
    break;
  case 9:
    message += "PS5";
    break;
  case 10:
    message += "100 million dollars";
    break;
  default:
    message = "Wrong answer";
}

console.log(message);
