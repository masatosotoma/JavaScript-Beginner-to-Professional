/*
Regular expressions = also known as regex, are simply ways to describe text patterns.

Regex can be very useful in many situations, for example when you need to look for
errors in a large file or retrieve the browser agent a user is using.
They can also be used for form validation, as with regex you can specify valid patterns for field entries, such as email.

Also regex can also be used for replacing strings

regres looks the random characters but there is a pattern
*/

//Example:   /JavaScript/

/*The above expression will match if a given string contains the word JavaScript.
When it matches, this means the result is positive. And this can be used to do many things.*/

/*
match() = built-in function that returns the regex match on the result (if there is one) in the form of the 
substring that matched the starting position of this string and the input string
*/

//Example:
let text = "I love JavaScript!";
console.log(text.match(/javascript/)); //This logs null because it is case-sensitive by default and therefore is not a match

/*
This logs null because it is case-sensitive by default and therefore is not a match.
If we had looked for /ava/ or simply /a/, it would have matched because it contains ava and a.
If you want it to be case-insensitive, you can specify this using an i after the slash
*/

//Example:
console.log(text.match(/javascript/i));

/*The result is an object, containing the found match and the index it started on, as
well as the input that was looked through. The groups are undefined. You can create
groups with round parentheses, as you'll see when we get to the section on groups.*/