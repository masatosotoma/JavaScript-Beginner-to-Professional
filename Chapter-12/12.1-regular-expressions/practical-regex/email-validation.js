/*
In order to create a regex pattern, we need to be able to describe the pattern with
words first. Email addresses consist of five parts, in the form of [name]@[domain].[extension].
*/

/*
Here are the five parts explained:
1. name: One or more alphanumerical characters, underscores, dashes, or dots
2. @: Literal character
3. domain: One or more alphanumerical characters, underscores, dashes, or dots
4. .: Literal dot
5. extension: One or more alphanumerical characters, underscores, dashes, or dots
*/

/*

the steps for regex:
1. [a-zA-Z0-9._-]+
2. @
3. [a-zA-Z0-9._-]+
4. \. (remember, the dot is a special character in regex, so we need to escape it)
5. [a-zA-Z0-9._-]+

Putting all together

/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g

*/

let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike@mail@.com";

console.log(validEmail.match(emailPattern));
console.log(invalidEmail.match(emailPattern));

//it returns a result for the valid email and it returns null (no match) for the invalid email.
