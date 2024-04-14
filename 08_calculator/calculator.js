const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(list) {
  let result = 0;
  for (let i=0; i<list.length; i++){
    result += list[i];
  }
  return result;
};

const multiply = function(list) {
  let result = 1;
  for (let i=0; i<list.length; i++){
    result *= list[i];
  }
  return result;
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num == 1 || num == 0){
    return 1;
  } else {
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
