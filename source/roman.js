'use strict';

function roman(val) {
    if (/^\d+$/.test(val)) {
        return toRoman(Number(val));
    } else {
        return fromRoman(val);
    }
}

function toRoman(val) {
    let map = {
        '+1000': 'M', //+ чтобы в for..in свойства перечислялись в заданном мной порядке
        '+900': 'CM',
        '+500': 'D',
        '+400': 'CD',
        '+100': 'C',
        '+90': 'XC',
        '+50': 'L',
        '+40': 'XL',
        '+10': 'X',
        '+9': 'IX',
        '+5': 'V',
        '+4': 'IV',
        '+1': 'I'
    }
    let result = '';
    while (val > 0) {
        for (let key in map) {
            if (val >= Number(key)) {
                result += map[key];
                val -= Number(key);
                break;
            }
        }
    }
    return result;
}

function fromRoman(val) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    val.toUpperCase().split('').reduce((prev, current) => {
        let curr = map[current];
        result += prev < curr ? curr - 2 * prev : curr;
        return curr;
    }, 0);
    return result;
}