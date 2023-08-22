const fs = require('fs');
const mockData = require('../../../lectures/12-data-structures-and-algorithms/MOCK_DATA');
const skuForTests = '5ce1e0a6-1e39-406e-b2be-08bce24b33b3';
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

const straightSearch = (mockData, skuToFind) => {
  for (let item of mockData) {
    if (item['sku'] === skuToFind) {
      return item;
    }
  }
  return -1;
};

const binarySearch = (mockData, skuToFind) => {
  let start = 0;
  let end = mockData.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (mockData[middle].sku === skuToFind) {
      return mockData[middle];
    } else if (mockData[middle].sku < skuToFind) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};

// An extra task* Quicksort algorithm
const quickSort = arr => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot.sku < arr[i].sku) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

//tests
const sortedData = quickSort([...mockData]);

console.log(straightSearch(mockData, skuForTests).sku === skuForTests);
console.log(binarySearch(sortedData, skuForTests).sku === skuForTests);

//perfomance tests
const stream = fs.createWriteStream('./result.log');

const perfomanceTest = (callback, array) => {
  const numberOfTests = 1000;
  const start = performance.now();

  for (let i = 0; i <= numberOfTests; i++) {
    needleList.forEach(skuToFind => callback(array, skuToFind));
  }

  const duration = performance.now() - start;
  const averageDuration = duration / numberOfTests / array.length;
  const message =
    `${callback.name} test took ${duration} milliseconds to execute ${
      numberOfTests * array.length
    } times.` +
    '\n' +
    `The average time is ${averageDuration} milliseconds` +
    '\n' +
    '***************************' +
    '\n';

  stream.write(message);
  console.log(message);
};

perfomanceTest(straightSearch, mockData);
perfomanceTest(binarySearch, sortedData);

stream.end();
