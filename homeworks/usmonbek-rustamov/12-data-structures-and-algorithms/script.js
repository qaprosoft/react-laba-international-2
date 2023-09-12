const data = require('./data/MOCK_DATA.js');

// SEARCHING
function straightSearchAlgorithm(key, target, data) {
  for (let item of data) {
    if (item[key] === target) {
      return item;
    }
  }
}

function binarySearchAlgorithm(key, target, data) {
  let leftIndex = 0;
  let rightIndex = data.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === data[middleIndex][key]) {
      return data[middleIndex];
    }

    if (target < data[middleIndex][key]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
}

// SORTING
function defaultSort(data, key) {
  data.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] === b[key]) return 0;
    if (a[key] < b[key]) return -1;
  });
  return data;
}

function mergeSort(data, key) {
  _doMergeSort(data, key, [], 0, data.length - 1);

  function _doMergeSort(data, key, temp, startIndex, endIndex) {
    if (startIndex === endIndex) return;

    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    _doMergeSort(data, key, temp, startIndex, middleIndex); // left side
    _doMergeSort(data, key, temp, middleIndex + 1, endIndex); // right side
    _mergeHalves(data, key, temp, startIndex, middleIndex, endIndex);
  }

  function _mergeHalves(data, key, temp, startIndex, middleIndex, endIndex) {
    let leftIndex = startIndex;
    let rightIndex = middleIndex + 1;
    let currentIndex = leftIndex;
    while (leftIndex <= middleIndex && rightIndex <= endIndex) {
      if (data[leftIndex][key] <= data[rightIndex][key]) {
        temp[currentIndex] = data[leftIndex];
        leftIndex++;
      } else {
        temp[currentIndex] = data[rightIndex];
        rightIndex++;
      }
      currentIndex++;
    }

    // push the remaining items
    for (let i = leftIndex; i <= middleIndex; i++) {
      temp[currentIndex] = data[i];
      currentIndex++;
    }

    for (let i = rightIndex; i <= endIndex; i++) {
      temp[currentIndex] = data[i];
      currentIndex++;
    }

    // copy sorted part of temp into data
    for (let i = startIndex; i <= endIndex; i++) {
      data[i] = temp[i];
    }
  }
}

//////// TEST ////////
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

// Test functions
function singleTestCallback(callback, ...args) {
  const startTime = performance.now();
  callback(...args);
  const endTime = performance.now();

  return endTime - startTime;
}

function testSearchPerformance(searchAlgorithm, key, dataToSearch, dataToTest) {
  let numOfTestes = 0;
  let totalElapsedTime = 0;

  for (let testValue of dataToTest) {
    totalElapsedTime += singleTestCallback(
      searchAlgorithm,
      key,
      testValue,
      dataToSearch,
    );
    numOfTestes++;
  }

  const averageElapsedTime = (totalElapsedTime / numOfTestes).toFixed(4);
  return `${searchAlgorithm.name} executed in average ${averageElapsedTime} ms`;
}

function testSortPerformance(sortAlgorithm, key, dataToSort) {
  const copyData = structuredClone(dataToSort);
  const elapsedTime = singleTestCallback(sortAlgorithm, copyData, key).toFixed(
    4,
  );
  return `${sortAlgorithm.name} executed in ${elapsedTime} ms`;
}

// Log test results
const sortedData = structuredClone(data);
mergeSort(sortedData, 'sku');

console.log(
  testSearchPerformance(straightSearchAlgorithm, 'sku', data, needleList),
);
console.log(
  testSearchPerformance(binarySearchAlgorithm, 'sku', sortedData, needleList),
);

console.log(testSortPerformance(defaultSort, 'sku', data));
console.log(testSortPerformance(mergeSort, 'sku', data));
