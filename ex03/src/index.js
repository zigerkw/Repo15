function printManyTimes(str) {
    "use strict";

    // Only change code below this line
    
    const SENTANCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTANCE);
    }
    
    return SENTANCE;
    // Only change code above this line
}
printManyTimes("Arena");
module.exports = printManyTimes;