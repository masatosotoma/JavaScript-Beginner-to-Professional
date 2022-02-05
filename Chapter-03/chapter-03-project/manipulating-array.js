const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

theList.shift(); // to delete the first item
theList.pop(); // to delete the last item

theList.unshift("FIRST"); // to add FIRST to the start of the array
theList[3] = "hello World"; // to assign hello World to the 4th item value
theList[2] = "MIDDLE"; // to assign MIDDLE to the third index value
theList.push("LAST"); // to add LAST to the last position of the array

console.log(theList);
