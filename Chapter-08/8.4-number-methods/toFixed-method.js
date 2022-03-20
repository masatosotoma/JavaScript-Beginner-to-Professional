// toFixed() = to check how many decimals to specifically use. It doesn't change the original value

let x = 1.23456;
let newX = x.toFixed(2); // to specify to use only 2 dicimals. It will return 1.23
console.log(newX);

// It will give you the rounded number depending on which decimal point you choose

let y = 1.23456;
let newY = y.toFixed(3);
console.log(x, newY); // newY return 1.235 which is rounded