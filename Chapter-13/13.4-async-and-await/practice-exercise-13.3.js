//Create a global value for a counter
let counter = 0;

/*Create a function that takes one argument. Return the result of a new Promise, 
setting a setTimeout() function that will contain the resolve instance.*/

function counting(x) {
  return new Promise((resolve) => {
    //Increment the counter within setTimeout(), adding one every second
    setTimeout(() => {
      counter++;
      //Resolve the Promise with the value of the counter and the value of the variable that was in the function argument
      resolve(`x value ${x} counter:${counter}`);
    }, 1000);
  });
}
/*Create an asynchronous function that outputs into the console the value of the global counter 
and the value of the argument of the function*/
async function output(y) {
  console.log(`ready ${y} counter:${counter}`);
  //Create a variable to capture the returned resolve value from the await function. Output that result into the console.
  let capture = await counting(y);
  console.log(capture);
}
/*
Create a loop to iterate 10 times, incrementing the value and invoking the
async function, passing the value of the increment variable as the parameter in the function.
*/
for (let i = 1; i < 4; i++) {
  output(i);
}
