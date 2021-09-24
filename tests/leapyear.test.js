const isLeapYear = require('../leapyear');


test('1996 should return true', () => {
    let result = isLeapYear(1996);

    expect(result).toBe(true);
})

test('2000 should return true', () => {
    let result = isLeapYear(2000);

    expect(result).toBe(true)
})

test('1900 should return false', () => {
    let result = isLeapYear(1900);

    expect(result).toBe(false);
});