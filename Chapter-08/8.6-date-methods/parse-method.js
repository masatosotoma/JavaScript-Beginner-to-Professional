// Date.Parse() = to parse epoch dates from strings. It accepts many formats

//example
let d1 = Date.parse("June 5, 2021");
console.log(d1); //  it ends with many zeros, because no time or seconds are specified in the string

//example
let d2 = Date.parse("6/5/2021");
console.log(d2); 
