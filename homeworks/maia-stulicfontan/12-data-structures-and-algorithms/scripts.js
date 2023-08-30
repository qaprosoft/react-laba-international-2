let data = require('../../../lectures/12-data-structures-and-algorithms/MOCK_DATA');

// Sorting function using JS sort() (doesn't modify the array passed as parameter)
function sortArrayBySku(objArray) {
  let sorted = JSON.parse(JSON.stringify(objArray));
  return sorted.sort((a, b) => (a.sku > b.sku ? 1 : a.sku < b.sku ? -1 : 0));
}

// Another option: merge sort
function merge(array1, array2) {
  let sorted = [];
  while (array1.length && array2.length) {
    array1[0].sku < array2[0].sku
      ? sorted.push(array1.shift())
      : sorted.push(array2.shift());
  }
  return [...sorted, ...array1, ...array2];
}

function sortArrayBySkuMerge(objArray) {
  let length = objArray.length;
  if (length == 1) return objArray;
  let middle = parseInt(length / 2);
  const leftArray = sortArrayBySkuMerge(objArray.slice(0, middle));
  const rightArray = sortArrayBySkuMerge(objArray.slice(middle));
  return merge(leftArray, rightArray);
}

// Straight search
const searchBySkuStraight = (sku, objArray) => {
  const length = objArray.length;
  for (let i = 0; i < length; i++) {
    if (objArray[i].sku === sku) {
      return objArray[i];
    }
  }
  return {};
};

// Binary search
// Note: array must be sorted prior to using binary search
const searchBySkuBinary = (sku, objArray) => {
  const arrLength = objArray.length;
  const middle = parseInt(arrLength / 2);
  if (arrLength == 1) return objArray[0].sku === sku ? objArray[0] : {};
  if (objArray[middle].sku === sku) return objArray[middle];
  objArray =
    sku < objArray[middle].sku
      ? objArray.slice(0, middle)
      : objArray.slice(middle);
  return searchBySkuBinary(sku, objArray);
};

// Test function
function testSearchFunction(searchFunction, sku, objArray) {
  console.time(searchFunction.name);
  const actualResult = searchFunction(sku, objArray);
  console.timeEnd(searchFunction.name);
  let expectedResult = objArray.find(object => object.sku === sku);
  if (expectedResult === undefined) expectedResult = {};
  console.log(
    `Expected result: ${JSON.stringify(
      expectedResult,
    )}, \nActual result: ${JSON.stringify(actualResult)}\n`,
  );
}

// ---- TESTS ----
const sortedData = sortArrayBySku(JSON.parse(JSON.stringify(data)));
const dataLength = data.length; // sortedData has the same length
const dataLengthMid = parseInt(dataLength / 2);

// ---- Finding first element of the list
console.log('------ Results for finding the first element of the list ------');
testSearchFunction(searchBySkuStraight, data[0].sku, data);
testSearchFunction(searchBySkuBinary, sortedData[0].sku, sortedData);

// ---- Finding element in the middle of the list
console.log(
  '------ Results for finding element in the middle of the list ------',
);
testSearchFunction(searchBySkuStraight, data[dataLengthMid].sku, data);
testSearchFunction(
  searchBySkuBinary,
  sortedData[dataLengthMid].sku,
  sortedData,
);

// ---- Finding last element of the list
console.log('------ Results for finding the last element of the list ------');
testSearchFunction(searchBySkuStraight, data[dataLength - 1].sku, data);
testSearchFunction(
  searchBySkuBinary,
  sortedData[dataLength - 1].sku,
  sortedData,
);

// ---- Finding element in first half of the array
console.log(`------ Results for finding element near start of the list ------`);
testSearchFunction(
  searchBySkuStraight,
  data[parseInt(dataLength * 0.2)].sku,
  data,
);
testSearchFunction(
  searchBySkuBinary,
  sortedData[parseInt(dataLength * 0.2)].sku,
  sortedData,
);

// ---- Finding element in second half of the array
console.log(`------ Results for finding element near end of the list ------`);
testSearchFunction(
  searchBySkuStraight,
  data[parseInt(dataLength * 0.8)].sku,
  data,
);
testSearchFunction(
  searchBySkuBinary,
  sortedData[parseInt(dataLength * 0.8)].sku,
  sortedData,
);

// ---- Trying to find non-existent element
const notExistentSku = 'test6074-332f-4661-8f3a-4cdcb3adfb6a';
console.log('------ Results for trying to find non-existent element ------');
testSearchFunction(searchBySkuStraight, notExistentSku, data);
testSearchFunction(searchBySkuBinary, notExistentSku, sortedData);

// ---- Performance of sorting algorithms
console.log('\n---- Bonus: testing sorting algorithms ----');
console.time('sortArrayBySku');
sortArrayBySku(data);
console.timeEnd('sortArrayBySku');

console.time('sortArrayBySkuMerge');
sortArrayBySkuMerge(data);
console.timeEnd('sortArrayBySkuMerge');

console.log(
  `Custom sorting using JS sort() and Merge sort provide same result?: ${
    JSON.stringify(sortArrayBySku(data)) ==
    JSON.stringify(sortArrayBySkuMerge(data))
  }`,
);
