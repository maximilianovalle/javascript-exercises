const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arr) {
	return arr.reduce((totalSum, currVal) => (totalSum + currVal), 0);
};

const multiply = function(arr) {
	return arr.reduce((total, currVal) => (total * currVal), 1);
};

const power = function(num1, num2) {
  let final = num1;

	for (let i = 1; i < num2; i++) {
    final *= num1;
  }

  // SOLUTION:
  // Math.pow(num1, num2);
};

const factorial = function(myNum) {
  if (myNum == 0 || myNum == 1) return 1;
  let decrement = myNum;
	let product = myNum;

  for (let i = 1; i < myNum; i++) {
    decrement -= 1;
    product *= decrement;
  }

  // SOLUTION:
  // if (myNum == 0) return 1;
  // let product = 1;

  // for (let i = myNum; i > 0; i--) {
    // product *= i;
  // }

  // return product
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
