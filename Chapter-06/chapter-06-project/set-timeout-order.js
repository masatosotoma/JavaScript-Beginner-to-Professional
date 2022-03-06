// Use the arrow format to create functions that output the values one and two to the console
let setTimes1 = () => console.log("one");
let setTimes2 = () => console.log("two");

//Create a third function that outputs the value three to the console, and then invokes the first two functions.
let setTimes3 = () => {
  console.log("three");
  setTimes2();
  setTimes1();
};

//Create a fourth function that outputs "four" to the console and also use IIFE to invoke the setTime3
let setTimes4 = () => {
  console.log("four");
  (() => {
    setTimes3();
  })();
};
setTimes4();
