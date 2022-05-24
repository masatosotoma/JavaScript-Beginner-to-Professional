//We can use regex for case-insensitive search
let text = "That's not the case.";
console.log(text.search(/Case/i));

//This code returns 15, which is the starting index position of the match
//Adding the i modifier here ignores the distinction between uppercase and lowercase

let text2 = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text2.replace("Coding", "JavaScript"));
//Without regex, it only replaces the first encounter

//with the g global modifier:
console.log(text2.replace(/Coding/g,"JavaScript"));//all occurrences(JavaScript) are replaced