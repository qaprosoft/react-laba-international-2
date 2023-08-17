// run script
// node homeworks/ivan-ishchenko/12-data-structures-and-algorithms/solution.js

// import data
const data = require('../../../lectures/12-data-structures-and-algorithms/MOCK_DATA');

const isMin = (a, b) => a < b;
const isMax = (a, b) => a > b;

// checks if array of objects is sorted by field using provided compare function
const isSorted = (field, data, compareFunc) => {
  for (let i = 1; i < data.length; i++) {
    if (!compareFunc(data[i - 1][field], data[i][field])) return false;
  }
  return true;
};

// Straight searches array of objects by specified field
// if nothing found, returns undefined
function straightSearch(field, value, data) {
  for (let item of data) {
    if (item[field] === value) return item;
  }
}

// Binary searches array of objects by specified field
// if array is not sorted, sorts it using specified compare function
// if nothing found, returns undefined
function binarySearch(field, value, data, compareFunc = isMin) {
  let sortedData = data;

  // check if array is sorted
  if (!isSorted(field, data, compareFunc)) {
    // sort array
    sortedData = mergeSort([...data], compareFunc, field);
  }

  let startIndex = 0;
  let endIndex = sortedData.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = endIndex - Math.floor((endIndex - startIndex) / 2);
    if (sortedData[middleIndex][field] === value)
      return sortedData[middleIndex];

    if (compareFunc(value, sortedData[middleIndex][field]))
      endIndex = middleIndex + 1;
    else startIndex = middleIndex - 1;
  }
}

// Merge Sort
function mergeSort(arr, compareFunction, field) {
  // if array consists only of 1 element it's sorted
  if (arr.length <= 1) {
    return arr;
  }

  // split array into 2
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left, compareFunction, field),
    mergeSort(right, compareFunction, field),
    compareFunction,
    field,
  );
}

// merges two arrays into one using provided compare function
function merge(left, right, compareFunction, field) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (
      compareFunction(left[leftIndex][field], right[rightIndex][field])
    ) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // concat is used to add remaining elements from left or right side if there are any
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}