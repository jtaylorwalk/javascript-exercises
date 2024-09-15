const removeFromArray = function(fullArray, ...removeList) {
let rLoc = 0
let fLoc = 0
const newList = []

    while (fLoc < fullArray.length) {
                if (rLoc < removeList.length){
                    
                        if (fullArray[fLoc] === removeList[rLoc]){
                        fLoc ++
                        rLoc = 0
                        
                        }
                        else {
                            rLoc ++
                            
                        }
                    }
                else if (rLoc === removeList.length) {
                        newList.push(fullArray[fLoc])
                            fLoc ++
                            rLoc = 0
                        }
    }
if (fLoc === fullArray.length) {
console.log (newList)
return newList
}   

        
    
   

        
};
// Check each element from fullArray against the first item in
// removeList. If the element is not in removeList, copy it to
// returnArray. Loop through all items in removeList. Return  
//
//

// Do not edit below this line
module.exports = removeFromArray;
