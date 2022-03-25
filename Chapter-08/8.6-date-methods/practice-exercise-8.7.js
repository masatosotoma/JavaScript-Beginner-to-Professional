// Output the date with the full month name into the console.

// Set up a date object, which can be any date in the future or past
let birthDay = new Date(1990, 2, 5);
console.log(birthDay);

// Set up an array with all the named months of the year.
//Keep them in sequential order so that they will match the date month output.

let months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months);

// Get the day from the date object value, using getDate().
let day = birthDay.getDate();
// Get the year from the date object value, using getFullYear().
let year = birthDay.getFullYear();
// Get the month of the date object value, using getMonth().
let month = birthDay.getMonth();

/* Set up a variable to hold the date of the date object and 
output the month using the numeric value as the index for the array month name.
*/
let theDate = `${months[month - 1]} ${day} ${year}`;
console.log(theDate);
