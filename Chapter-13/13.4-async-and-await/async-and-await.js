/*
async keyword = to make a function return a Promise.
This makes the Promises nicer to read and look a lot like synchronous (non-concurrent) code

await =  wait until the Promise is done. await only works in an asynchronous function.
*/

function saySomething(x) {
  /* saySomething() function contains a new Promise that is being resolved 
    with a setTimeout() function that waits two seconds before resolving with the value of something plus x */
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("something" + x);
    }, 2000);
  });
}

// after two seconds, the three functions are done at the same time

//If the talk() function were not asynchronous, it would throw a SyntaxError because of the await keyword
async function talk(x) {
  const words = await saySomething(x);//await is only valid in asynchronous functions, so talk() must be asynchronous
  console.log(words);
}
/*Without the async and the await in this example, 
it would store the result of the function saySomething(), 
a pending Promise, in words and log that once for every function call*/

// call the asynchronous function talk() three times in a row with no break
//Each of these function calls is awaiting the saySomething() function
talk(2);
talk(4);
talk(8);
