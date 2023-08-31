const MOCK_DATA = require('./MOCK_DATA'); 
const fs = require('fs');
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

// straight
function straightSearch(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i].sku === needle) {
      return i; 
    }
  }
  return -1;
}

// binary
function binarySearch(needle, haystack) {
  let left = 0;
  let right = haystack.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (haystack[mid].sku === needle) {
      return mid; 
    } else if (haystack[mid].sku < needle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; 
}


const performanceTest = (searchFunction, searchName) => {
  const start = performance.now();

  for (const needle of needleList) {
    searchFunction(needle, MOCK_DATA);
  }

  const end = performance.now();
  const elapsedTime = end - start;
  console.log(`${searchName} took ${elapsedTime} milliseconds.`);

  fs.writeFileSync('result.log', `${searchName} took ${elapsedTime} milliseconds.\n`, { flag: 'a' });
};

performanceTest(straightSearch, 'straight Search');
performanceTest(binarySearch, 'binary Search');


// node script.js