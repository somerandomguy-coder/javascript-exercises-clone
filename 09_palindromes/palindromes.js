const palindromes = function (word) {
    cleanedWordList = clean(word).split("");
    let index = 0
    for (let i = cleanedWordList.length-1; i>-1; i--){
        if (cleanedWordList[index] != cleanedWordList[i]){
            return false;
        }
        index += 1
    }
    return true;
};

function clean(word){
    return word.split(",").join("").split(" ").join("").split(".").join("").split("!").join("").toLowerCase();
}


// Do not edit below this line
module.exports = palindromes;
