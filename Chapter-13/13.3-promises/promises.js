/*
Promise = a special object that connects code that needs to produce
a result and the code that needs to use this result in the next step
*/

/*
When we create a Promise, we give it a function.
*/

//You can call these parameters anything you want, but resolve or res and reject or rej are most common.

/*we use a convention that we have seen a lot; 
we are creating a function on the spot. So, 
insidethe argument list we are defining the function, 
often done using arrow functions as well. 
This function needs two parameters, and these parameters are callbacks. 
We have called them resolve and reject here.*/

/*
resolve() = when it's called, the Promise is presumed to be successful 
and whatever is between the arrows is returned and used as input for the then method on the Promise object. 
If reject() is called, the Promise failed and the catch() method on 
the Promise object (if present) is executed with the argument of the reject() function.
*/

//Example
let promise = new Promise(function (resolve, reject) {
  // do something that might take a while
  // let's just set x instead for this example
  let x = 20;
  if (x > 10) {
    resolve(x); // on success
  } else {
    reject("Too low"); // on error
  }
});
//When creating a Promise, we don't know what the value of the Promise is going to be
//This value is whatever is sent as an argument to the resolve function. It is a sort of placeholder.
promise.then(
  //then() is a Promise itself, so when it returns we can use the result for the next then() instance.
  //when we call then on the Promise, we basically say: figure out what the value of the Promise is,
  function (value) {
    console.log("Success:", value);
  },
  // execute one function if the Promise was resolved or a different function if it was rejected
  function (error) {
    console.log("Error:", error);
  }
);

//we can chain the then() instances, which can look like this below
const promise2 = new Promise((resolve, reject) => {
  resolve("success!");
})
  .then((value) => {
    console.log(value);
    return "we";
  })
  .then((value) => {
    console.log(value);
    return "can";
  })
  .then((value) => {
    console.log(value);
    return "chain";
  })
  .then((value) => {
    console.log(value);
    return "promises";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
/*
The resolve functions are implemented with an arrow function. 
The return statement is the value input for the next function. 
You can see that the last block is a catch() function.
*/

/*
If any of the functions were to result in a rejection and the Promise were
therefore rejected, this catch() block would be executed and print whatever the reject() function sent to the catch() method
*/

const promise3 = new Promise((resolve, reject) => {
  reject("oops... ");
})
  .then((value) => {
    console.log(value);
    return "we";
  })
  .then((value) => {
    console.log(value);
    return "can";
  })
  .then((value) => {
    console.log(value);
    return "chain";
  })
  .then((value) => {
    console.log(value);
    return "promises";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

//This will just log oops… because the first Promise was rejected instead of resolved
