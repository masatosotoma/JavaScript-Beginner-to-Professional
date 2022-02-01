// length property will return the number of values that an array has

colors = ["black", "orange", "pink"]; // 3 elements
booleans = [true, false, false, true]; // 4 elements
emptyArray = []; // no elements

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

lastElement = colors[colors.length - 1]; // to access to the value of the last index
console.log(lastElement);

numbers = [12, 24, 36];
numbers[5] = 48; // at this point, index 3 and 4 has no value.
console.log(numbers.length); // the indexes 3 and 4 are also counted so total elements are 6
console.log("numbers", numbers);
