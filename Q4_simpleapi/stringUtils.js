const fs = require('fs');
const path = require('path');

function capitalizeString(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    if (!str) return '';
    return str.split('').reverse().join('');
}

function countVowels(str) {
    if (!str) return 0;
    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
}

module.exports = {
    capitalizeString,
    reverseString,
    countVowels
};