// Given a string, return true if the string is a palindrome or false if it is not.
// Palindromes are strings that form the same word if it is reversed.

function palindrome(str) {
  var reversed = '';

  for (var char of str) {
    reversed = char + reversed;
  }

  return reversed === str ? true : false;
}

palindrome('aba');
