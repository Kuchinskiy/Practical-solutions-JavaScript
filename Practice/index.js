'use strict';

// Reduce
const arrNumbers = [5, -4, 7, -89, 0, 39, 8, 1, 2];

let bigNumber = arrNumbers.reduce((acc, item) => {
    if (item > acc) {
        acc = item;
    }
    return acc;
});

console.log(bigNumber);
