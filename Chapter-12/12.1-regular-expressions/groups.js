//Whenever you want to match a group of characters, you can surround them with parentheses
let text = "I love JavaScript!";
console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

/*Here it is going to look for either love or dislike, 
followed by a whitespace character, followed by javascript or spiders, 
and it will do so for all occurrences while ignoring whether they are in uppercase or lowercase*/

//Very often, you'll find yourself in need of repeating a certain regex piece. 
//Example:if we want to match any four alphanumeric characters in a sequence

console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

//Here is the better options
// If we only want it to be present 0 or 1 times, we can use the question mark
let text2 = "You are doing great!";
console.log(text2.match(/n?g/gi));

//If you want something at least once, but optionally more often, you can use the plus sign: +
let text3 = "123123123";
console.log(text3.match(/(123)+/)); 
//This is going to match for the group 123 one or more times. And since this string is present, it will find a match

/* There are also situations where you want to have a certain piece of regex match any number of
times, which can be indicated with the asterisk: *   */
console.log(text3.match(/(123)*a/));  //It will match with any a preceded by 123 any number of time

//To note about repeating is that we can be more specific as well. This using this syntax {min, max}
let text4 = "abcabcabc";
console.log(text4.match(/(abc){1,2}/));// it will match on abc both once and twice
//In order to specify groups, we'll have to name them. Here's an example:
console.log(text.match(/(?<language>javascript)/i));


