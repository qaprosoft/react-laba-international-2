const fs = require('fs');
const data = require("../../../lectures/12-data-structures-and-algorithms/MOCK_DATA");

const needleList = [
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  '83b65687-1774-4172-9e28-44537a619a7e',
];
const filePath = "./homeworks/max-hirning/12-js-advanced-5/result.log";

data.sort((a, b) => a.sku.localeCompare(b.sku));

function test() {
  deleteLogFile();

  needleList.forEach((sku) => {
    const straightStart = performance.now();
    findByStraightSearch(sku);
    const straightEnd = performance.now();


    const binaryStart = performance.now();
    findByBinarySearch(sku);
    const binaryEnd = performance.now();

    writeInLogFileResults(`Straight search ${(straightEnd-straightStart).toFixed(5)}    Binary search ${(binaryEnd-binaryStart).toFixed(5)}`);
  })
}
function deleteLogFile() {
  fs.unlink(filePath, (err) => {
    if (err) console.error('Error deleting file:', err);
  });
}
function findByStraightSearch(sku) {
	const res = data.find(product => product.sku === sku);

  return res ?? 'Product not found.'
}
function findByBinarySearch(targetSku) {
	let left = 0;
	const arr = data;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSku = arr[mid].sku;

    if (midSku === targetSku) {
      return arr[mid];
    } else if (midSku < targetSku) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}
function writeInLogFileResults(string) {
  fs.appendFile(filePath, string + '\n', (err) => {
    if (err) console.error('Error writing to file:', err);
  });
}


test();