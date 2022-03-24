// 1. Date() = by using the different constructors

let currentDateTime = new Date();
console.log(currentDateTime);

// 2. Date.now() = built-in method to return the current date and time by Unix time

let now2 = Date.now();
console.log(now2);

// You can add 1000 millisseconds to the Unix time
let milliDate = new Date(1000);
console.log(milliDate); // it will log the start point of the Unix time

// You can also conver the string formats to a date.
// Always mind the order in which days and months of dates are presented in the date format.

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

// You can specify a certain date using the constructor
let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);
// the second parameter is the month. 0 is for January and 11 is for December.
