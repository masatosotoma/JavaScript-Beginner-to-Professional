let myWork = []; // to create an empty array

// to create a list fo 10 objects including lessons and status of true/false if running this year
//
for (i = 1; i <= 10; i++) {
  let stat = i % 2 ? true : false; // using conditional ternary to assign true for odd numbers
  myWork.push({ name: "lesson " + i, status: stat }); // add the objects into the empty array
}
console.log(myWork);
