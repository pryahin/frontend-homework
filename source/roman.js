'use strict';

const ROMAN_MAP = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function roman(val) {
    return (/^\d+$/.test(val)) ? toRoman(+val) : fromRoman(val);
}

function toRoman(val) {
    let result = '';
    Object.keys(ROMAN_MAP).forEach(key => {
        while (val >= ROMAN_MAP[key]) {
            result += key;
            val -= ROMAN_MAP[key];
        }
    });
    return result;
}

function fromRoman(val) {
    let result = 0;
    val.toUpperCase().split('').reduce((prev, current) => {
        let curr = ROMAN_MAP[current];
        result += prev < curr ? curr - 2 * prev : curr;
        return curr;
    }, 0);
    return result;
}