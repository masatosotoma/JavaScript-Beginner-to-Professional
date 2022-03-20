// replace() = If you need to replace a part of the string, you can use the replace(old, new)
// It takes 2 arguments, one string to look for and one new value to replace the old value

//example
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal"); // change/update buddy to Pascal
console.log(new_hi);

// The original string hi is not changed, but the new string has been created
// If the string you are looking for is not in the string, it won't do anything

//exmaple
let new_hi2 = hi.replace("not there", "never there");
console.log(new_hi2); // it will console log "Hi buddy"(no change)

// If there is more than 2 same string word in the same vale, it will only update the first one

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3); // it will log in cosole "oh hello"

//replaceAll() =  to change all the targetting strings to new strings in one value

let new_s4 = s3.replaceAll("hello", "oh");
console.log(new_s4); // It will log in console "oh oh"
