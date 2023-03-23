/*1. Set up a date object, which can be any date in the future or past. 
Log the date out into the console to see how it is typically output as a date object.*/
let tempTime = new Date();
console.log(tempTime);

/* 2. Set up an array with all the named months of the year. 
Keep them in sequential order so that they will match the date month output.*/
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// 3. Get the day from the date object value, using getDate().
console.log(tempTime.getDate());

// 4. Get the year from the date object value, using getFullYear().
console.log(tempTime.getFullYear());

// 5. Get the month of the date object value, using getMonth().
console.log(tempTime.getMonth());

/*6. Set up a variable to hold the date of the date object and output the month using 
the numeric value as the index for the array month name. 
Due to arrays being zero-based and the month returning a value of 1-12, 
the result needs to be subtracted by one.*/

let tempVal = tempTime.getMonth();

// 7. Output the result into the console.
console.log(months[tempVal]);