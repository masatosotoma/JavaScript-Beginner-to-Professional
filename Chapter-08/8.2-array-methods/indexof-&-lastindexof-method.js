// indexOf() = to find the index number of a element

let bb1 = ["so", "bye", "hi", "love"];
console.log(bb1.indexOf("bye")); // it return 1 since the index number of variable is 2 seaching from the beggining

// lastIndexOf() = to find the index number of a element seaching from the end of the array

let bb2 = ["so", "bye", "hi", "love"];
console.log(bb2.lastIndexOf("hi")); // it return 2 since the index number of variable is 2 seaching from the ending


// when you ask for the last index of something that's not there, it will return -1

let bb3 = ["so", "bye", "bye", "love"];
console.log(bb3.lastIndexOf("hi"));