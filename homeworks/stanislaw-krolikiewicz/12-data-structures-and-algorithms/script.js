const fs = require('fs');
const products = require('../../../lectures/12-data-structures-and-algorithms/MOCK_DATA');

const resultLog = fs.createWriteStream(
  './homeworks/stanislaw-krolikiewicz/12-data-structures-and-algorithms/result.log',
);
const result = new console.Console(resultLog);

const skuLength = products[0].sku.length;

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
];

const straightSearch = sku => {
  if (sku.length !== skuLength) return "Product's sku key is invalid!";
  let found;
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    for (let j = 0; j < skuLength; j++) {
      if (sku[j] !== item.sku[j]) break;
      if (j === skuLength - 1) found = item;
    }
    if (found) {
      break;
    }
  }

  if (found) result.log('Key', sku, 'found:', found);
  else result.log("There's no such a product in the list!");
};

result.log('STRAIGHT SEARCH');
needleList.forEach(sku => {
  straightSearch(sku);
});
