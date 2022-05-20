
//In order to specify a certain range of options, we can use this syntax:

let text = "I love React and JavaScript!";
console.log(text.match(/javascript|nodejs|react/i));

/*the expression matches either javascript, nodejs, or react. At this point, 
weare only matching for the first encounter and then we quit. 
So this is not going to find two or more matches */

/*If we wanted to find all matches, we could specify the global modifier g.
You can use multiple modifiers at the same time as we do below, or you could decide to only use g:
*/
//Example:
console.log(text.match(/javascript|nodejs|react/gi)); //global modifier and case-insensitive search

//This returns both React and JavaScript as a result
//As soon as you specify g, the match function will just return an array of the matching words