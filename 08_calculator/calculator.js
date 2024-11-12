const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
  if (!input || input.length === 0) {
    return 0;
  }
  let total = 0;
	for (let item of input) {
    total += Number(item);
  }
  return total;
};

const multiply = function(input) {
  let total = 1;
  for (let item of input) {
    total *= Number(item);
  }
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a <= 1) {
    return 1;
  }
  let total = a;
  for (let i = a-1; i >= 1; i--) {
    total *= i;
  }
  return total;
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
