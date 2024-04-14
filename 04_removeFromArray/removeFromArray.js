const removeFromArray = function(list, ...removelist) {
    let array = [];
    for (let i=0; i<list.length; i++){
        let match = false;
        for (let j=0; j<removelist.length; j++){
            if (list[i] === removelist[j]){
                match = true;
            }
        }
        if (match == false){
            array.push(list[i]);
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
