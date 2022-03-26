/* Create code for a countdown timer that can be executed in the console window
and will show the total milliseconds, days, hours, minutes, and seconds remaining until a target date is reached*/

// Create an end date that you want to count down to

let endDate = new Date("2022,9,3");
console.log(endDate);

// Create a countdown function that will parse the endDate() and subtract the current date from that end date
function countdown() {
  //Using Date.parse() you can convert a string representation of a date to a numeric value as a number
  let total = Date.parse(endDate) - new Date();
  //To get days you can divide the number of milliseconds in a date
  let days = Math.floor(total / (1000 * 60 * 60 * 24));
  //To get hours use modulus to capture just the remainder once the total days are removed
  let hour = Math.floor((total / (1000 * 60 * 60)) % 24);
  //To get minutes you can use the value of milliseconds in a minute and using the modulus capture the remainder
  let mins = Math.floor((total / (1000 * 60)) % 60);
  //  for seconds by dividing the number by seconds in milliseconds and getting the remainder
  let secs = Math.floor((total / 1000) % 60);
  // Return all the values within an object with property names
  return {
    days,
    hour,
    mins,
    secs,
  };
}

function update() {
  //  create a variable that can temporarily hold the object return values of countdown()
  let temp = countdown();
  let output = ""; // to create an empty variable that will be used to create the output values.

  //using the for loop get all the properties and values of the temp object variable
  for (let property in temp) {
    output += `${property}: ${temp[property]} `;
  }
  console.log(output);
  setTimeout(update, 1000);
}
update();
