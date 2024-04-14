const getTheTitles = function(list) {
    const titles = [];
    list.forEach(element => {
        keys = Object.keys(element);
        values = Object.values(element);
        for (let i=0; i<keys.length; i++){
            if (keys[i] == "title"){
                titles.push(values[i]);
            }
        }
    });
    return titles;
};


// Do not edit below this line
module.exports = getTheTitles;
