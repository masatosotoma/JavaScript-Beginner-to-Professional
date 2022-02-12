let yourName = prompt("What is your name?"); // to create an prompt entry to get a name
yourName = String(yourName); // convert it to string
let message = "What's up?"; // to create a variable for the message

// switch statement to check if the entry matches with the friend's names
switch (yourName) {
  case "Derek":
  case "John":
  case "Amy":
    message += "I haven't seen you for a while right, " + yourName + "?";
    break;
  case "Claire":
  case "Mark":
  case "Tom":
    message += " Hey " + yourName + " Do you want to hangout tonight?";
    break;
  default:
    message = yourName + "? Sorry, I don't know you.";
}

console.log(message);
