// null is a special value for saying that a variable is empty or has an unknown value.

let empty = null;

// It is better to assign null to a variable when you want to say it is empty and unknown first, not undefined.

let terribleThingToDo = undefined;
let lastName;

let betterOption = null;

console.log(empty);
console.log("Same undefined:", lastName === terribleThingToDo); //Both variables are undefined and return true
console.log("Same null:", lastName === betterOption); //betterOption is null, so the variables are not the same, return false
