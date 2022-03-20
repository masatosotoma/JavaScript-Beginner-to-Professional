// toUpperCase(), toLowerCase() = to change string values to upper/lower cases

//example of toUpperCase
let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye); // change it to all upper case

//example of toLoweCase
let caps = "HI HOW ARE YOU?";
let fixe_caps = caps.toLowerCase();
console.log(fixe_caps); // change it to all lower case

//example: combination of methods
let fixed_caps2 = caps.toLowerCase();
let first_capital = fixed_caps2
  .charAt(0) // get the first letter of the string
  .toUpperCase() // get the letter to upper case
  .concat(fixed_caps2.slice(1)); // add the rest of the string to concatinate to the uppercase first letter
console.log(first_capital); // log to console that only first letter is upper case.
