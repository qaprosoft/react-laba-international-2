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
  else result.log('Key', sku, 'not found!');
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
  else result.log('Key', sku, 'not found!');
};

const quickSort = originalList => {
  const list = [...originalList];

  if (list.length <= 1) {
    return list;
  }

  const leftList = [];
  const rightList = [];

  const pivotElement = list.shift();
  const centerList = [pivotElement];

  while (list.length) {
    const currentElement = list.shift();

    if (currentElement.sku === pivotElement.sku) {
      centerList.push(currentElement);
    } else if (currentElement.sku < pivotElement.sku) {
      leftList.push(currentElement);
    } else {
      rightList.push(currentElement);
    }
  }
  const leftListSorted = quickSort(leftList);
  const rightListSorted = quickSort(rightList);

  return leftListSorted.concat(centerList, rightListSorted);
};

result.log('STRAIGHT SEARCH');
const straightSearchStart = performance.now();
needleList.forEach(sku => {
  straightSearch(sku, products);
});
const straightSearchTime = performance.now() - straightSearchStart;

result.log('BINARY SEARCH');

let sortedProducts;
const bultInSortStart = performance.now();
sortedProducts = products.sort();
const bultInSortTime = performance.now() - bultInSortStart;

const quickSortStart = performance.now();
sortedProducts = quickSort(products);
const quickSortTime = performance.now() - quickSortStart;

const binarySearchStart = performance.now();
needleList.forEach(sku => {
  binarySearch(sku, sortedProducts);
});
const binarySearchTime = performance.now() - binarySearchStart;

result.log('MEASUREMENTS:');
result.log('\tSEARCHING:');
result.log('\t\tStraight search time:\t', straightSearchTime, 'ms');
result.log(
  '\t\tBinary search time without sorting included:\t',
  binarySearchTime,
  'ms',
);
result.log('\tSORTING:');
result.log('\t\tBuilt in sort method:\t', bultInSortTime, 'ms');
result.log('\t\tQuick sort:\t', quickSortTime, 'ms');
