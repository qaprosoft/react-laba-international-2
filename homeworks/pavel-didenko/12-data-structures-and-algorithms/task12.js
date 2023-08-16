const data = require('./data/MOCK_DATA.js');

function straightSearchAlgorithm(key, value, data) {
  for (let item of data) {
    if (item[key] === value) {
      return item;
    }
  }
  return 'Not found';
}

//An array has to be sorted, to implement binary search.
const sortedForBinary = structuredClone(data);

sortedForBinary.sort((a, b) => {
  if (a['name'] > b['name']) return 1;
  if (a['name'] === b['name']) return 0;
  if (a['name'] < b['name']) return -1;
});

function binarySearchAlgorithm(key, value, data) {
  if (data.length === 1 && data[0].name) {
    return 'Not found';
  }

  const halfLength = Math.floor(data.length / 2);

  if (value === data[halfLength].name) {
    return data[halfLength];
  } else if (value > data[halfLength].name) {
    return binarySearchAlgorithm(key, value, data.slice(halfLength, data.length));
  } else if (value < data[halfLength].name) {
    return binarySearchAlgorithm(key, value, data.slice(0, halfLength));
  }
}

//Binary search test:

function searchAlgorithmTest(callback){
  for (let i = 0; i < sortedForBinary.length; i++) {
    if (
      callback('name', sortedForBinary[i].name, sortedForBinary) ===
      'Not found'
    ) {
      throw new Error('Binary search is not working');
    }
  }

  if (callback('name', 'fail value', sortedForBinary) !== "Not found"){
    throw new Error("Failed on unexisting value");
  }
    return `${callback.name} test passed`;
}

function testFunctionSpeed(callback, key, value, data) {
  const start = performance.now();

  console.log(callback(key, value, data));

  const end = performance.now();

  return `Function ${callback.name} executed in ${Math.round(end - start)} ms`;
}

//Test are launched here:

const fs = require('fs');
const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/result.log', {flags: 'w'});
const log_stdout = process.stdout;

console.log = function (d) {
  log_file.write(util.format(d) + '\n \n');
  log_stdout.write(util.format(d) + '\n \n');
};

console.log(
  testFunctionSpeed(
    straightSearchAlgorithm,
    'name',
    'Wine - Gato Negro Cabernet',
    data,
  ),
);
console.log(
  testFunctionSpeed(
    binarySearchAlgorithm,
    'name',
    'Wine - Gato Negro Cabernet',
    sortedForBinary,
  ),
);

console.log(searchAlgorithmTest(binarySearchAlgorithm));
console.log(searchAlgorithmTest(straightSearchAlgorithm));
