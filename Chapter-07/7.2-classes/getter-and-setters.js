/* 
Getter/Setter = special properties that we can use to get data from a class and to set data fields on the class
They are more like properties than they are like functions. It's called accessors.

encapsulation = the properties cannot be set from outside without the object itself being in control
 The class encapsulates the data, and the object is in control of its own fields.
*/

class Person{
    #firstname;
    #lastname;
    constructor(firstname,lastname){
        this.#firstname = firstname;
        this.#lastname = lastname;

    }
    get firstname(){
        return this.#firstname;
    }
    set firstname(firstname){
        this.#firstname = firstname;
    }
    get lastname(){
        return this.#lastname;
    }
    set lastname(lastname){
        this.#lastname = lastname;
    }

    }


//Getter = used to get the property. it doesn't take any parameters, but simply returns the property
//Setter = it takes a parameter, assigns this new value to the property, and returns nothing. Can contain more logic

let p = new Person("Maria", "Saga"); // to create a person name Maria Saga
console.log(p.firstname);

// The output is showing the first name, which is only possible because we have a getter accessor

/*

Below check whether firstname starts with an M, 
and if it does it will update the value to whatever the firstname parameter is.
If it doesn't, it will concatenate an M in front of the parameter

set firstname(firstname) {
    if(firstname.startsWith("M")){
    this.#firstname = firstname;
    } else {
    this.#firstname = "M" + firstname;
    }
*/

