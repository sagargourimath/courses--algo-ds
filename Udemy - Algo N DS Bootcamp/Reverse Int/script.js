// Given an integer, return an integer that is the reverse ordering of numbers.

function reverseInt(n) {
  let stringInt = n.toString();
  let isNegative = false;

  if (stringInt[0] === '-') {
    isNegative = true;
    stringInt = stringInt.slice(1);
  }

  let reversed = stringInt.split('').reverse().join('');

  if (isNegative) {
    reversed = '-' + reversed;
  }

  return parseInt(reversed);
}
