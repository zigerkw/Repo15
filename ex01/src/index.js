// only change code below this line
let myName = "John";
let message = "Hi";
// only change code above this line

myName = "Padawans";
function myMsg(name) {
    "use strict";
    message = "Hello, " + name + "!";

    return message;
}
console.log(myMsg(myName)); 
module.exports = myMsg;