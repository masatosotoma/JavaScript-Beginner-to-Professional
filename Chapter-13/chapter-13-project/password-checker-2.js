//Create an array of allowed passwords.

let allowed = ["yuki", "masa", "73 Blue Eagle"];

/*Create a login function that will check if the argument is a value that is included in the passwords array. 
You can use indexof() or the includes() method to check the array for a value and return a Boolean value of the result.*/

function pwchecker(password) {
  return allowed.include(password);
}

/*Add a function that returns a Promise. Using resolve and reject, return a JavaScript object with 
the Boolean of true or false to indicate the password validity status.*/
function logIn(pw) {
  return new Promise(function (resolve, reject) {
    if (pwchecker(pw)) {
      resolve({ status: true });
    } else {
      reject({ status: false });
    }
  });
}
/*Create a function that checks the password, sending it to the login function, 
and using then() and catch(), outputs the result of either the rejected password or the resolved password. */

function checker(password) {
  logIn(password)
    .then((token) => {
      console.log("Success : " + token);
    })

    .catch((value) => {
      console.log("Reject : " + value);
    });
}
//Send several passwords, some within the array, others not, to the checker function.
