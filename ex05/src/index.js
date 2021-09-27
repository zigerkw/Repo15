function myObject() {
    'use strict';
    const MATH_CONSTANTS = {
        E: 2.71828
    };
    // Only change code below this line
    MATH_CONSTANTS.E = 2.71828;
    Object.freeze(MATH_CONSTANTS);
    myObject();
    // Only change code above this line
    try {
        MATH_CONSTANTS.E = 23;
    } catch(error) {
        console.log(error.message);
    }
    return MATH_CONSTANTS.E
}
const E = myObjects = myObject;