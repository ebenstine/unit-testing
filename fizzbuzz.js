/**
 * FizzBuzz 
 * 
 * If the number is divisible by 3 return "fizz"
 * If the number is divisible by 5 return "buzz"
 * If the number is divisible by 3 & 5, return "fizzbuzz"
 * Otherwise, return null
 */

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FIZZBUZZ';
    }
    else if (number % 5 === 0) {
        return 'BUZZ';
    }
    else if (number % 3 === 0) {
        return 'FIZZ';
    }
    else {
        return number;
    }
}

module.exports = fizzBuzz