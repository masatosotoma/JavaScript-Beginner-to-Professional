/*
JSON = JavaScript Object Notation (date format)
a way of representing data using a similar format as JavaScript objects

JSON is a standard used to communicate with APIs

APIs can accept data, for example, the data from a form on a website, in JSON format

for example, when you enter a web shop—the products typically come from a call to an API that is connected to a database. 
This data gets converted to JSON and is sent back to the website
*/

/*Example of JSON:

{
    "name" : "Malika",
    "age" : 50,
    "profession" : "programmer",
    "languages" : ["JavaScript", "C#", "Python"],
    "address" : {
    "street" : "Some street",
    "number" : 123,
    "zipcode" : "3850AA",
    "city" : "Utrecht",
    "country" : "The Netherlands"
    }
   }

   */

//an object that seems to describe a person. It has key-value pairs.
//the first key is name and the first value is Malika

/*
Lists of values (or JavaScript arrays) are indicated with []. 
The JSON object containsa list of languages


- Key-value pairs with values of the following types: string, number, Boolean, and null
- Key-value pairs with lists, which have [ and ] that contain the items in the list
- Key-value pairs with other objects, which have { and } that contain other JSON elements

*Three options can be combined, so an object can contain other objects and a list can contain other lists
*/