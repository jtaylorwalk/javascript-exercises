const reverseString = function(rString) {
    const splitString = rString.split("")
    const revString = splitString.reverse("")
    const newString = revString.join("")
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
