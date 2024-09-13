
const repeatString = function(a,b) {
    if (b < 0){
        return "ERROR";
    }

    else {
    let stResult = "";
    for (let i=b; i>0; i--) {
        stResult = stResult + a;
    }
    return stResult;
}
};

// Do not edit below this line
module.exports = repeatString;
