const data = require('./MOCK_DATA');

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

// Straight Search Function
function straightSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].sku === target) {
      return target;
    }
  }
  return -1;
}

// Binary Search Function
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid].sku === target) {
      return mid;
    } else if (arr[mid].sku < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

//Testing
const performanceTest = (searchFunction, searchName) => {
  const start = performance.now();
  searchFunction(needleList, data);
  const end = performance.now();
  const elapsedTime = end - start;
  console.log(`${searchName} took ${elapsedTime.toFixed(2)} milliseconds.`);
};

performanceTest(straightSearch, 'Straight Search');
performanceTest(binarySearch, 'Binary Search');
