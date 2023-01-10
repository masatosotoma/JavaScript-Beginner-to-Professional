//Create an array of allowed passwords.

let allowed = ["yuki", "masa", "73 Blue Eagle"];

/*Create a login function that will check if the argument is a value that is included in the passwords array. 
You can use indexof() or the includes() method to check the array for a value and return a Boolean value of the result.*/

function logIn(password) {
  if (password.include(allowed)) {
    return true;
  } else {
    return false;
  }
}

/*Add a function that returns a Promise. Using resolve and reject, return a JavaScript object with 
the Boolean of true or false to indicate the password validity status.*/

let promise = new Promise(function (resolve, reject) {
  if (logIn == true) {
    resolve(password);
  } else if (logIn == false) {
    reject("The password is invalid");
  } else {
    console.log("Need to enter correctly");
  }
});

/*Create a function that checks the password, sending it to the login function, 
and using then() and catch(), outputs the result of either the rejected password or the resolved password. */
promise.then(
  function (value) {
    console.log("Success : " + value);
  },
  function (error) {
    console.log("Error : " + error);
  }
);

//Send several passwords, some within the array, others not, to the checker function.
