const fs = require('fs');
const logFile = fs.createWriteStream('./data/result.log');
const mockData = require('./data/MOCK_DATA');
// random sku for search purpose
const sku = '17e8b37d-3825-43ed-824a-14ccfb8b024d';

// clones to be use by binary search
const bubbleSortData = structuredClone(mockData);
const sortedData = structuredClone(mockData);


// basic sort
sortedData.sort((a, b) => {
  if (a['sku'] > b['sku']) return 1;
  if (a['sku'] === b['sku']) return 0;
  if (a['sku'] < b['sku']) return -1;
});

//bubble sort
const bubbleSort = data => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j].sku > data[j + 1].sku) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  return data;
};

bubbleSort(bubbleSortData);


// straight search

const straightSearch = (data, sku) => {
  const result = data.find(e => e.sku === sku);
  return result ? result : 'not found';
};

// binary search

const binarySearch = (data, sku) => {
  let low = 0;
  let high = data.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    if (data[mid].sku === sku) {
      return data[mid];
    }

    if (data[mid].sku > sku) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 'item not found';
};

// search speed test function

const searchSpeedTest = (cb, data, sku, sortType) => {
  let start = performance.now();
  cb(data, sku);
  let finish = performance.now();
  const log = `The search time of ${cb.name} using ${sortType}  was ${
    finish - start
  }\n`;
  logFile.write(log);
  return log;
};

// speed test for binary search using both types of sorted data

console.log(searchSpeedTest(binarySearch, bubbleSortData, sku, 'bubble sort'));
console.log(
  searchSpeedTest(binarySearch, sortedData, sku, '.sort'),
);


// speed test for straight search using both types of sorted data

console.log(searchSpeedTest(straightSearch, mockData, sku, 'no sorting'));
console.log(
  searchSpeedTest(straightSearch, bubbleSortData, sku, 'bubble sort'),
);
console.log(
  searchSpeedTest(straightSearch, sortedData, sku, '.sort'),
);
