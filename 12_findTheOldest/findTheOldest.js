const findTheOldest = function(list) {
    return list.reduce((oldest, person, index)=>{
        let birth, death;
        if (person.yearOfDeath == undefined){
            birth = person.yearOfBirth;
            death = 2024;
        } else {
            birth = person.yearOfBirth;
            death = person.yearOfDeath;
        }
        let yearsold = death-birth;
        let olddeath = oldest.yearOfDeath
        if (oldest.yearOfDeath == undefined) olddeath = 2024;
        if (olddeath-oldest.yearOfBirth < yearsold){
            return person;
        } else {
            return oldest;
        }
    }, list[0])
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
// Do not edit below this line
module.exports = findTheOldest;
