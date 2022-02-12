let variable = ["rock", "paper", "scissors"]; // to create an array contains rock, paper, scissers
let player = Math.floor(Math.random() * 2); // to create a variable for a player that generates random number up to 3
let computer = Math.floor(Math.random() * 2); // to create a variable for a computer that generates random number up to 3

// to create a message that tells you what the player and the computer chose
input1 = prompt(
  "Do you want to choose your choice else random choice(Y or Yes)"
);
input1 = input1.toLowerCase();
if (input1 == "y" || input1 == "yes") {
  input2 = prompt("Enter rock,paper,scissors");
  input2 = input2.toLowerCase();
} else {
  input2 = variable[player];
}

switch (input2) {
  case "rock":
    if (variable[computer] == "rock") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You tied."
      );
    } else if (variable[computer] == "paper") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You lose."
      );
    } else if (variable[computer] == "scissors") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You win."
      );
    }
    break;
  case "paper":
    if (variable[computer] == "rock") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You win."
      );
    } else if (variable[computer] == "paper") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You tied."
      );
    } else if (variable[computer] == "scissors") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You lose."
      );
    }
    break;
  case "scissors":
    if (variable[computer] == "rock") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You lose."
      );
    } else if (variable[computer] == "paper") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You win."
      );
    } else if (variable[computer] == "scissors") {
      alert(
        "You chose " +
          input2 +
          ", and computer chose " +
          variable[computer] +
          ". You tied."
      );
    }
    break;
  default:
    alert("You didn't choose rock, paper or scissors");
}
