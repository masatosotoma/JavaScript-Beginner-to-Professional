/* break and continue can be used in nested loops as well
it's important to know when break or continue is used, the outer loop will not break
*/

// Example

let groups = [
  ["Martin", "Daniel", "Keith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
];

for (let i = 0; i < groups.length; i++) {
  let matches = 0; // set a counter of numbers of matching names
  for (let j = 0; j < groups[i].length; j++) {
    if (groups[i][j].startsWith("M")) {
      matches++; // if the loop finds names with "M", the counter will be incremented
    } else {
      continue; // unless the loops find M, it will skip other names
    }

    if (matches === 2) {
      // if the loops find 2 matches it will send message
      console.log("Found a group with two names starting with an M");
      console.log(groups[i]); 
      break;
      /* Although it finds the first name of the elements with M, it won't check the rest of the elements
         because it will break if the first element was found the names with M (at this point, loop will break) */
    }
  }
}

// another example
for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("M")) {
      console.log("Found one starting with M:", member);
      break;
    }
  }
}
