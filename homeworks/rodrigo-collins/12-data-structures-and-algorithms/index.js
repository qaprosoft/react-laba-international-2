const MOCK_DATA = require('./data/MOCK_DATA');

const needleList = [
    'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
    '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
    '3c511860-d159-457d-8374-e8205904e6f5',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
    '3c511860-d159-457d-8374-e8205904e6f5',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
    '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
];

function straightSearch(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i].sku === needle) {
            return i;
        }
    }
    return -1;
}

function binarySearch(needle, haystack) {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (haystack[mid].sku === needle) {
            return mid;
        } else if (haystack[mid].sku < needle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const fs = require('fs');
const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/result.log', { flags: 'w' });
const log_stdout = process.stdout;

console.log = function (d) {
    log_file.write(util.format(d) + '\n \n');
    log_stdout.write(util.format(d) + '\n \n');
};

// Test straight search
needleList.forEach((needle) => {
    const startTime = Date.now();
    const index = straightSearch(needle, MOCK_DATA);
    const endTime = Date.now();
    console.log(`Straight search for ${needle}: Index ${index}, Time: ${endTime - startTime}ms`);
});

// Test binary search
const sortedData = MOCK_DATA.slice().sort((a, b) => a.sku.localeCompare(b.sku));
needleList.forEach((needle) => {
    const startTime = Date.now();
    const index = binarySearch(needle, sortedData);
    const endTime = Date.now();
    console.log(`Binary search for ${needle}: Index ${index}, Time: ${endTime - startTime}ms`);
});
