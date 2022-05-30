/*
Cookies = small data files that are stored on your own computer and used by websites.
It's  invented to store things about the user of the website.
Cookies are strings with a special pattern. They contain key-value pairs,
and these key-value pairs are separated by semi-colons.
*/

//You can create a cookie and use it again later. How to create

document.cookie = "name=Maaike;favoriteColor=black";

//In Chrome, for example, you cannot set the cookies from the client side. You have to run the code from a server.

/*
It is also possible to start Chrome from the command line with certain settings
enabled, or to enable the cookies in the settings under privacy preferences
*/

//Example of how to read from the cookie
let cookie = decodeURIComponent(document.cookie);
let cookieList = cookie.split(";");
for (let i; i < cookieList.length; i++) {
  let c = cookieList[i];
  if (c.charAt(0) == " ") {
    c = c.trim();
  }
  if (c.startsWith("name")) {
    alert(c.substring(5, c.length));
  }
}

/*gets all the cookies using decodeURIComponent(), and then splits them
on the ;. This leaves us with an array, cookieList, with key-value pairs as strings.
Next, we loop over all the key-value pairs. Trim them (remove the whitespace in
front and at the back), and see whether they start with name. */