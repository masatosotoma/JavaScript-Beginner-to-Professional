// To create Magic 8-Ball

let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
// you can also shorten it to const randomNumber = Math.floor(Math.random() * 6);

answer = "Not even need to see the score"; // to create an answer variable
askRank = prompt("How did I do?"); // to create prompt message to ask your rank

switch (randomNumber) {
  case 0:
    answer = "you are the number 1!";
    break;
  case 1:
    answer = "you are almost number 1, but number 2. Well done.";
    break;
  case 2:
    answer = "you are Mr.Normal.";
    break;
  case 3:
    answer = "just stay being yourself.";
    break;
  default:
    answer = "do better next time.";
}

console.log(
  "You said" +
    " " +
    askRank +
    "." +
    " Guess what? What I can say is that " +
    answer
);
