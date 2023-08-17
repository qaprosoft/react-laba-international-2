// run script
// node homeworks/ivan-ishchenko/12-data-structures-and-algorithms/tests.js
const {
  straightSearch,
  binarySearch,
  mergeSort,
} = require('./solution');

// import data
const data = require('../../../lectures/12-data-structures-and-algorithms/MOCK_DATA');

const isMin = (a, b) => a < b;
const isMax = (a, b) => a > b;

// test isSorted funtion
const testStraightSearch = () => {
  console.log('Straight search tests');
  const fields = ['sku', 'name'];

  const expectedItem = data[Math.floor(Math.random() * data.length)];

  for (let field of fields) {
    console.log(`Search by ${field}: `);
    let start = performance.now();
    let actualItem = straightSearch(field, expectedItem[field], data);
    let end = performance.now();

    if (actualItem[field] === expectedItem[field])
      console.log(`Passed in ${end - start} ms`);
    else console.log('Failed');
  }
};
testStraightSearch();

const testBinarySearch = () => {  
  const fields = ['sku', 'name'];
  const compareFunctions = [isMax, isMin];

  const expectedItem = data[Math.floor(Math.random() * data.length)];

  console.log('Binary search test');
  for (let field of fields) {
    for (let compareFunc of compareFunctions) {
      console.log(
        `Search by ${field} using ${compareFunc.name} compare function: `,
      );
      let startSort = performance.now();
      const sortedData = mergeSort(data, compareFunc, field);
      let endSort = performance.now();
      console.log(`Sort done in ${endSort - startSort} ms`)
      let startSearch = performance.now();
      let actualItem = binarySearch(field, expectedItem[field], sortedData, compareFunc);
      let endSearch = performance.now();

      if (actualItem[field] === expectedItem[field])
        console.log(`Passed in ${endSearch - startSearch} ms\nSort & search done in ${endSearch - startSort} ms`);
      else console.log('Failed');
    }
  }
};
testBinarySearch();
