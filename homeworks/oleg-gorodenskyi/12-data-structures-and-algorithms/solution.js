const data = require('./MOCK_DATA');
const needleList = require('./needleList');
const {performance} = require('perf_hooks');
const fs = require('fs')

// implementation checks and return true, if there are needleList array keys, in data array and false, if there aren't.

function straightSearch(needleList, data) {
  let count = 0;

  for (let i = 0; i < needleList.length; i++) {
    const needleListSku = needleList[i];
    for (let j = 0; j < data.length; j++) {
      const dataSku = data[j].sku;
      if (needleListSku === dataSku) {
        count += 1;
      }
    }
  }
  return needleList.length === count;
}

function binarySearch(needleList, data) {
  let count = 0;

  for (const sku of needleList) {
    let leftIdx = 0;
    let rightIdx = data.length - 1;
    let middleIdx;

    while (leftIdx <= rightIdx) {
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (sku === data[middleIdx].sku) {
        count += 1;
        break;
      } else if (sku < data[middleIdx].sku) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    }
  }

  return count === needleList.length;
}

function measureTime(func, ...args) {
  const startTime = performance.now();
  func(...args);
  const endTime = performance.now() - startTime;
  return endTime;
}

// Extra task
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const leftSide = [];
  const rightSide = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftSide.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightSide.push(arr[i]);
    }
  }

  return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}

const sortedData = quickSort(data);
const straightSearchTime = measureTime(straightSearch, needleList, data);
console.log(`Straight search ${straightSearchTime} ms`);            

const binarySearchTime = measureTime(binarySearch, needleList, sortedData);
console.log(`Binary search ${binarySearchTime} ms`);                          

const logContent = `
Straight search ${straightSearchTime} ms
Binary search ${binarySearchTime} ms
`;

fs.writeFile('result.log', logContent, (err) => {
  if (err) {
    console.log(err)
  } else {
    `File successfully written`
  }
})
