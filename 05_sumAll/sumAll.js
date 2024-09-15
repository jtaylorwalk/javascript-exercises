const sumAll = function(x,y) {
if (x > 0 && y > 0 && Number.isInteger(x) && Number.isInteger(y) ) {
    if (x<y) {
       return ((y-x+1) * (x+y) / 2)
    }
    else {
       return ((x-y+1)*(x+y)/2 )
    }
}
else {
    return ("ERROR")
}

};




// Do not edit below this line
module.exports = sumAll;
