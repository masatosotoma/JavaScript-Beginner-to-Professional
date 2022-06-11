//Set up a Promise that resolves with a value of Start Counting

const myPromise = new Promise((resolve, reject) => {
  resolve("Start Counting");
});

//Create a function named counter() that has one argument that gets the value and outputs it into the console
function counter(value) {
  console.log(value);
}
/*
Set up the next function in the Promise with four then() instances, 
which should output a value into the counter function, 
and return a value which will provide input for the subsequent then() instance
The returned values
should be one, then two, then three
*/
myPromise
  .then((value) => {
    counter(value);
    return "one";
  })
  .then((value) => {
    counter(value);
    return "two";
  })
  .then((value) => {
    counter(value);
    return "three";
  })
  .then((value) => {
    counter(value);
  });

/*
Set up the next function in the Promise with four then() instances, 
which should output a value into the counter function, 
and return a value which will provide input for the subsequent then() instance
The returned values
should be one, then two, then three
*/
