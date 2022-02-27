//If we have a one-line arrow function, we can return without using the keyword return
//Example

let addTwoNumbers = (x, y) => x + y;

let result = addTwoNumbers(12, 15);
console.log(result);

//Exmaple of multiline function (you will need to use return keyword)

let addTwoNumbers2 = (x, y) => {
  console.log("Adding...");
  return x + y;
};

let result2 = addTwoNumbers2(22, 45);
console.log(result2);
