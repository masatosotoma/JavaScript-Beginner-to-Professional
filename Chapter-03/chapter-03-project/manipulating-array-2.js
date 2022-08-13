const theList = [
  "Laurence",
  "Svekis",
  true,
  "35",
  null,
  undefined,
  { test: "one", score: 55 },
  [("one", "two")],
];

//Remove the first itme and the last itme

theList.shift(); //Delete the first element
console.log(theList);

theList.pop(); //Delete the last element
console.log(theList);

//Add 'FIRST' to the start of the array
theList.splice(0, 0, "FIRST");
console.log(theList);

//Assign 'hello world' to the fourth index value
theList.splice(3, 1, "hello world");
console.log(theList);

//Assign 'MIDDLE' to the third index value
theList.splice(2, 1, "MIDDLE");
console.log(theList);

//Add LAST to the last position in the array as well as last 3 index values
theList.splice(4, 3, "LAST");
console.log(theList);
