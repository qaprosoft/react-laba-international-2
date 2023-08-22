const data = require('./data/MOCK_DATA');
const needleList = require('./data/NEEDLE_LIST');

const skuToFindReal = 'ccdb70f4-91f1-4543-93fa-8a93f980dc99';
const skuToFindNoReal = 'ccccccccccccccccccccc';

//Linear search
const linearSearch = (array, sku) => {
  const item = array.find(el => el.sku === sku);
  return item ? item : 'The item not found';
};

//Binary search
const sortedArray = data.sort((a, b) => a - b);
const dataLength = sortedArray.length;

const binarySearch = (array, sku) => {
  let [start, end] = [0, dataLength - 1];

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle].sku === sku) return array[middle];

    array[middle].sku > sku ? (start = middle + 1) : (end = middle - 1);
  }

  return 'The item not found';
};

//Quick sort
const quickSort = array => {
  if (array.length <= 1) return array;

  const [pivot, smallerArray, biggerArray] = [array[0], [], []];

  for (let i = 1; i < array.length; i++) {
    const currentEl = array[i];

    pivot.sku < currentEl.sku
      ? smallerArray.push(currentEl)
      : biggerArray.push(currentEl);
  }

  return [...quickSort(smallerArray), pivot, ...quickSort(biggerArray)];
};

//TESTS
console.log(linearSearch(data, skuToFindReal));
console.log(linearSearch(data, skuToFindNoReal));

console.log(binarySearch(sortedArray, skuToFindReal));
console.log(binarySearch(sortedArray, skuToFindNoReal));

const quickSortedArray = quickSort(data);
//console.log(quickSortedArray);

//PERFOMANCE TESTS
const fs = require('fs');
const writer = fs.createWriteStream('result.log');

const perfomanceTest = (functionTotest, dataToTest) => {
  const start = performance.now();

  for (let needle of needleList) {
    functionTotest(dataToTest, needle);
  }

  const end = performance.now();
  const elapsed = end - start;

  const message = `${functionTotest.name} perfomance tests took ${elapsed}ms;\n`;
  writer.write(message);
};

perfomanceTest(linearSearch, data);
perfomanceTest(binarySearch, sortedArray);
