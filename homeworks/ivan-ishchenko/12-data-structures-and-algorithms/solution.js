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
    sortedData = [...data];
    // sort array
    sortedData.sort((a, b) => (compareFunc(a[field], b[field]) ? -1 : 1));
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

const res = binarySearch('name', 'haah', data);
console.log(res);
