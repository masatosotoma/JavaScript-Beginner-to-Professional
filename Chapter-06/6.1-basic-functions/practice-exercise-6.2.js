// to create a program that will randomly describe an inputted name

let randomArr = [
  "kind",
  "scary",
  "smart",
  "handsome",
  "weird",
  "friendly",
  "funny",
];

function decidePerson() {
  let askName = prompt("What is your name?"); // set the prompt to get the name
  let randomWords = Math.floor(Math.random() * randomArr.length); // make variable to get random index number
  console.log(askName + ", You are " + randomArr[randomWords]); // get a random adjective in the randomArr
}

decidePerson();
