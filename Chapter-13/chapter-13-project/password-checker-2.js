//Create an array of allowed passwords.

let allowed = ["yuki", "masa", "73 Blue Eagle"];

function logIn(password) {
  if (password.include(allowed)) {
    return true;
  } else {
    return false;
  }
}
