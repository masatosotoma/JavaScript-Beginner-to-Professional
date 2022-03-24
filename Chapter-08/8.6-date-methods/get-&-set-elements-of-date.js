// to get certain parts of dates, you can use get methods

// examples

let d = new Date();

console.log("Day of week: ", d.getDay()); // to get the day of week
console.log("Day ofmonth: ", d.getDate()); // to get the day of month
console.log("Month: ", d.getMonth()); // to get the month
console.log("Year: ", d.getFullYear()); // to get the year
console.log("Seconds: ", d.getSeconds()); // to get the secnod
console.log("Milliseconds: ", d.getMilliseconds()); // to get the millisecond
console.log("Time: ", d.getTime()); // to get the Unix time(conunt from Jan 1st 1970)

// the original date object gets changed with the set methods

d.setFullYear(2010);
console.log(d);

// You can also change the month

d.setMonth(9);
console.log(d); // this will log to October

// in order to change the day, you have to call setDate() method.

d.setDate(10);
console.log(d); // this will log to 10th

// You can also change the hours

d.setHours(10);
console.log(d); // this will log to 10 am
