// You can break out of the outer loop from inside the inner loop only if you give a label to the loop

// Exmaple

let groups = [
  ["Martin", "Daniel", "Keith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
];

outer: for (let group of groups) { // Give a label (name by yourself) in front of the code block
  inner: for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M", member);
      break outer; // it makes the loop out of the outer loop and all the loops end as soon as they find one
    }
  }
}
