//Create an array of allowed passwords

const allowed = ["1234", "basketball", "Canada"];

/*Create a login function that will check if the argument is a value that is included in the passwords array
You can use indexof() or the includes() method to check the array for a value and return a Boolean value of the result.*/

function passwordchecker(pass) {
  return allowed.includes(pass);
}

/*Add a function that returns a Promise. Using resolve and reject, 
return a JavaScript object with the Boolean of true or false to indicate the password validity status. */

function login(password) {
  return new Promise((resolve, reject) => {
    if (passwordchecker(password)) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}

/*Create a function that checks the password, sending it to the login function,
and using then() and catch(), outputs the result of either the rejected password or the resolved password.*/

function checker(pass) {
  login(pass)
    .then((token) => {
      console.log("Approve:");
      console.log(token);
    })
    .catch((value) => {
      console.log("Reject:");
      console.log(value);
    });
}

//Send several passwords, some within the array, others not, to the checker function.
checker("1234");
checker("wrong");
