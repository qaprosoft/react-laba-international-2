const data = require('./MOCK_DATA');

function straightSearch(arr, skuCode) {
  console.time('timer');
  const result = [];
  arr.forEach(ele => {
    skuCode.find(obj => {
      const matched = obj.sku === ele;
      if (matched) {
        result.push(obj);
      }
    });
  });
  console.timeEnd('timer');
  return result;
}

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

/* console.log(straightSearch(needleList, data));
 */
function binarySearch(arr, skuCode) {
  console.time('timer');
  const result = [];
  const sortedSku = [...skuCode].sort((a, b) => a.sku.localeCompare(b.sku));

  const binaryRecursiveSearch = (arr, sku, left, right) => {
    const pointer = Math.floor((left + right) / 2);

    if (sku.localeCompare(arr[pointer].sku) < 0) {
      binaryRecursiveSearch(arr, sku, left, pointer);
    } else if (sku.localeCompare(arr[pointer].sku) < 0) {
      binaryRecursiveSearch(arr, sku, pointer, right);
    } else {
      result.push(arr[pointer]);
    }
  };
  arr.forEach(ele => {
    binaryRecursiveSearch(sortedSku, ele, 0, sortedSku.length);
  });
  console.timeEnd('timer');
  return result;
}
console.log(binarySearch(needleList, data));
