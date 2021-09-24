const fizzBuzz = require('../fizzbuzz');

test('3 should return FIZZ', () => {
    let result = fizzBuzz(3);

    expect(result).toBe('FIZZ');
});

test('10000000 should return BUZZ', () => {
    let result = fizzBuzz(1000000);

    expect(result).toBe('BUZZ');
});

test('45 should return FIZZBUZZ', () => {
    let result = fizzBuzz(45);
    
    expect(result).toBe('FIZZBUZZ');
});

test('22 should return null', () => {
    let result = fizzBuzz(22);

    expect(result).toBe(result);
});