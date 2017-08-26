'use strict';

function roman(val) {
    return (/^\d+$/.test(val)) ? toRoman(+val) : fromRoman(val);
}

function toRoman(val) {
    let result = '';
    while (val > 0) {
        for (let key in mapToRoman) {
            if (val >= +key) {
                result += mapToRoman[key];
                val -= +key;
                break;
            }
        }
    }
    return result;
}

function fromRoman(val) {
    let result = 0;
    val.toUpperCase().split('').reduce((prev, current) => {
        let curr = mapFromRoman[current];
        result += prev < curr ? curr - 2 * prev : curr;
        return curr;
    }, 0);
    return result;
}

const mapToRoman = {
    '+1000': 'M', //+ для того, чтобы в for..in свойства перечислялись в заданном мной порядке
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

const mapFromRoman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}