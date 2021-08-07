// Write a program that console logs the numbers from 1 to n

// - For multiples of 3, print 'fizz' instead of the number
// - For multiples of 5, print 'buzz'
// - For numbers which are multiples of both 3 and 5, print 'fizzbuzz'

function fizzBuzz(a) {
  for (let n = 1; n <= a; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('fizzbuzz');
    } else if (n % 3 === 0) {
      console.log('fizz');
    } else if (n % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(n);
    }
  }
}

fizzBuzz(50);
