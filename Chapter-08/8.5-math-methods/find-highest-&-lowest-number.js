// Math.max() = to find the highest number among the arguments

let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest); // it loggs 233

// Math.min() = to find the lowest number among the arguments

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest); // it loggs 1

//  If you try to do this with non numeric arguments, you will get NaN as a result:

let highestOfWords = Math.max("hi", 3, "bye");
console.log(highestOfWords); // it loggs NaN
