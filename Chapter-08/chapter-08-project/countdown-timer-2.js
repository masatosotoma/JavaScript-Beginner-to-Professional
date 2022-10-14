//Create an end date that you want to count down to. Format it in a date type format within a string.

let myBirthday = new Date("Sun Feb 05 2023 0:00:00 GMT-4");

console.log(myBirthday);

//Create a countdown function that will parse the endDate() and subtract the current date from that end date.
function countDownTime() {
  let timeLeft = Date.parse(myBirthday);
  let endTime = endDate(myBirthday, timeLeft);
  console.log(endTime);
  console.log(timeLeft);
}

countDownTime();
