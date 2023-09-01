const fs = require('fs');
const {needleList, searchingID} = require('./MOCK_DATA');

function straightSearch(data, needle) {
  for (const obj of data) {
    if (obj.sku === needle) {
      return obj;
    }
  }
  return null;
}

function binarySearch(data, needle) {
  let left = 0;
  let right = data.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSku = data[mid].sku;

    if (midSku === needle) {
      return data[mid];
    } else if (midSku < needle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

function writeResultsToFile(results) {
  fs.writeFile('result.log', results, err => {
    if (err) {
      console.error('Error', err);
    } else {
      console.log('Results were written to file');
    }
  });
}

const startTimeStraight = process.hrtime();
for (const needle of searchingID) {
  straightSearch(needleList, needle);
}
const endTimeStraight = process.hrtime(startTimeStraight);

const startTimeBinary = process.hrtime();
for (const needle of searchingID) {
  binarySearch(needleList, needle);
}
const endTimeBinary = process.hrtime(startTimeBinary);

const performanceStraight =
  (endTimeStraight[0] * 1e9 + endTimeStraight[1]) / 1e6;
const performanceBinary = (endTimeBinary[0] * 1e9 + endTimeBinary[1]) / 1e6;

const results = `
Straight Search: ${performanceStraight.toFixed(3)}ms
Binary Search: ${performanceBinary.toFixed(3)}ms
`;

console.log(results);

writeResultsToFile(results);
