const sumAll = function(first, second) {
    if (first < 0 || second < 0 || typeof(first) != "number" || typeof(second) != "number"){
        return "ERROR";
    } else if (first < second) {
        return sum(first, second);
    } else if (first > second) {
        return sum(second, first);
    }
};

function sum(start, end){
    let result = 0;
    for (let i=start; i<=end; i++){
        result += i;
    }
    return result;
}

// Do not edit below this line
module.exports = sumAll;
