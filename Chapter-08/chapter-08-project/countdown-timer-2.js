//Create an end date that you want to count down to. Format it in a date type format within a string.

let myBirthday = new Date("Sun FEB 05 2023 0:00:00 GMT-4").getTime();
console.log(myBirthday);

//Create variable for doing setInterval that includes function of countdown
let countDown = setInterval(function () {
  //Create the current date
  let now = new Date().getTime();

  //To calculate the birthday - now
  let howLongWait = myBirthday - now;
  
  //Get the days,hours,minutes,seconds left
  let days = Math.floor(howLongWait / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (howLongWait % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((howLongWait % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((howLongWait % (1000 * 60)) / 1000);

  //Log into console the countdown timer
  console.log(
    days +
      "days, " +
      hours +
      "hours, " +
      minutes +
      "minutes, " +
      seconds +
      "seconds until my birthday."
  );
  if (howLongWait < 0) {
    clearInterval(countDown);
    console.log("Happy birthday!");
  }
}, 1000);
