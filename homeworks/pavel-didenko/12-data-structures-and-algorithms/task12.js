const data = require('./data/MOCK_DATA.js');
const sampleData = require('./data/sample_data.js');

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

function binarySearch(key, value, data) {

  if (data.length === 1 && data[0].name) {
    return 'Not found';
  }

  const halfLength = Math.floor(data.length / 2);

  if (value === data[halfLength].name) {
    return data[halfLength];
  } else if (value > data[halfLength].name) {
    return binarySearch(key, value, data.slice(halfLength, data.length));
  } else if (value < data[halfLength].name) {
    return binarySearch(key, value, data.slice(0, halfLength));
  }
}

//Binary search test:

/* for(let i = 0; i < sortedForBinary.length; i++){
  if(binarySearch('name', sortedForBinary[i].name, sortedForBinary) === "Not found"){
    throw new Error("Binary search is not working");
  }else{
    console.log(binarySearch('name', sortedForBinary[i].name, sortedForBinary))
  }
} */

function testFunctionSpeed(callback, key, value, data) {
  const start = performance.now();

  console.log(callback(key, value, data));

  const end = performance.now();

  return `Function ${callback.name} executed in ${Math.round(end - start)} ms`;
}

// console.log(binarySearch('name', 'Wine - Gato Negro Cabernet', sortedForBinary));

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
    binarySearch,
    'name',
    'Wine - Gato Negro Cabernet',
    sortedForBinary,
  ),
);
