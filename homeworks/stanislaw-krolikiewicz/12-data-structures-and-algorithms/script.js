const fs = require('fs');
const products = require('../../../lectures/12-data-structures-and-algorithms/MOCK_DATA');
const needleList = require('./needleList');

const resultLog = fs.createWriteStream(
  './homeworks/stanislaw-krolikiewicz/12-data-structures-and-algorithms/result.log',
);
const result = new console.Console(resultLog);

const skuLength = products[0].sku.length;

const straightSearch = (sku, list) => {
  if (sku.length !== skuLength) return "Product's sku key is invalid!";
  let found;
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    for (let j = 0; j < skuLength; j++) {
      if (sku[j] !== item.sku[j]) break;
      if (j === skuLength - 1) found = item;
    }
    if (found) {
      break;
    }
  }

  if (found) result.log('Key', sku, 'found:', found);
  else result.log("There's no such a product in the list!");
};

const binarySearch = (sku, sortedList) => {
  if (sku.length !== skuLength) return "Product's sku key is invalid!";
  let found,
    startIndex = 0,
    endIndex = sortedList.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (sortedList[middleIndex].sku === sku) {
      found = sortedList[middleIndex];
      break;
    }

    if (sortedList[middleIndex].sku < sku) startIndex = middleIndex + 1;
    else endIndex = middleIndex - 1;
  }
  if (found) result.log('Key', sku, 'found:', found);
  else result.log("There's no such a product in the list!");
};

result.log('STRAIGHT SEARCH');
const straightSearchStart = performance.now();
needleList.forEach(sku => {
  straightSearch(sku, products);
});
const straightSearchTime = performance.now() - straightSearchStart;

result.log('BINARY SEARCH');
const binarySearchWithSortingStart = performance.now();
const sortedProducts = products.sort((a, b) => a.sku.localeCompare(b.sku));
const binarySearchStart = performance.now();
needleList.forEach(sku => {
  binarySearch(sku, sortedProducts);
});
const binarySearchTime = performance.now() - binarySearchStart;
const binarySearchWithSortingTime =
  performance.now() - binarySearchWithSortingStart;

result.log('MEASUREMENTS:');
result.log('\tStraight search time:\t', straightSearchTime);
result.log(
  '\tBinary search time without sorting included:\t',
  binarySearchTime,
);
result.log('\tBinary search time with sorting:\t', binarySearchWithSortingTime);
