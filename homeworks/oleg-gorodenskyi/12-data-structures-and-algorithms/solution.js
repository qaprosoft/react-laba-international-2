const data = require('./MOCK_DATA');
const needleList = require('./needleList');
const {performance} = require('perf_hooks');

// implementation checks and return true, if there are needleList array keys, in data array

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
  const sortedData = [...data].sort((a, b) => a.sku.localeCompare(b.sku));
  let count = 0;

  for (const sku of needleList) {
    let leftIdx = 0;
    let rightIdx = sortedData.length - 1;
    let middleIdx;

    while (leftIdx <= rightIdx) {
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (sku === sortedData[middleIdx].sku) {
        count += 1;
        break;
      } else if (sku < sortedData[middleIdx].sku) {
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

const straightSearchTime = measureTime(straightSearch, needleList, data);
console.log(`Straight search ${straightSearchTime} ms`);

const binarySearchTime = measureTime(binarySearch, needleList, data);
console.log(`Binary search ${binarySearchTime} ms`);
