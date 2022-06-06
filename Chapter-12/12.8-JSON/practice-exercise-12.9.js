/*
Create a JSON object with several items and objects. You can use the JSON object from the previous lesson
*/

let myList = [
  { name: "Learn JavaScript", status: true },
  { name: "Try JSON", status: false },
];

//Using the JSON stringify() method, convert the JSON JavaScript object into a string version

let newStr = JSON.stringify(myList);

//Using JSON.parse(), convert the newStr value back into an object and assign it to a variable named newObj

let newObj = JSON.parse(newStr);

//Iterate through the items in the newObj and output the results to the console

newObj.forEach((el) => {
  console.log(el);
});
