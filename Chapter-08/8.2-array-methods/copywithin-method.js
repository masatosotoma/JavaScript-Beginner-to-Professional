//copyWithin() = It's used to replace a part of the array with another part of the array

//example
arr = ["grapefruit", 4, "hello", 5.6, true];

/*
The first one is the target position, 
The second one is the start of what to which the values get copied,
The last one is the end of the sequence that will be copied to the target position; this last index is not included
*/

console.log(arr.copyWithin(0, 3, 4));

// If you specify a range with length 2, the first two elements after the starting position get overridden

console.log(arr.copyWithin(0, 3, 5));

// You can also not specify an end at all; it will take the range to the end of the string

console.log(arr.copyWithin(0, 3));