// 1. Create a Boolean value for an ID variable
let id = true;

// 2. Using a ternary operator, create a message variable that will check whether their ID is valid and either allow a person into a venue or not
let msg = "";
id ? (msg += "You passed") : (msg += "You are denied");

// 3. Output the response to the console
console.log(msg);
