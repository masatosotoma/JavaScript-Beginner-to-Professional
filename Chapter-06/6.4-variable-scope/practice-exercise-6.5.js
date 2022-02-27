let value1 = "1000"; // to create a string valuable
(function () {
  let value1 = "12345";
  console.log(value1);
})();

let result = (() => {
  value1 = "9876";
  return value1;
})();
console.log(result, value1);

((value1) => console.log(`My name is ${value1}`))("Lawrence");
