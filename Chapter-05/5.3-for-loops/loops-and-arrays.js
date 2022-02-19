/*It can be combined the length property and the condition part of the for loop or while loop to loop over arrays
the example of syntax is like below 

let arr = [some array];
for (initialize variable; variable smaller than arr.length; statement)
{
 // code to be executed
}
*/

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// To add hello with the begginings of our names

for (let i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
//startsWith method = to check whether the string starts with a cetain character
// to delete name with starts with M while using the for loops

for (let i = 0; i < names.length; i++) {
  if (names[i].startsWith("M")) {
    delete names[i];
    continue; // Even if loops finds M and delete the element, the loops still continues
  }
}
console.log(names);
