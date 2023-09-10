const {MOCK_DATA} = require('./MOCK_DATA.js');

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

function straightSearch(needle, haystack) {
  const result = [];
  for (const obj of haystack) {
    needle.forEach(el => {
      if (obj.sku === el) {
        result.push(obj);
      }
    });
  }
  return result.length > 0 ? result : null;
}
const straightResult = straightSearch(needleList, MOCK_DATA);

function binarySearch(needle, haystack) {
  let left = 0;
  let right = haystack.length - 1;
  let result = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSKU = haystack[mid];
    for (const midSKU of haystack) {
      needle.forEach(el => {
        if (midSKU.sku === el) {
          result.push(haystack[mid]);
        } else if (midSKU < el) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      });
    }
  }
  return result.length > 0 ? result : null;
}
const sortedList = needleList.sort();
const sortedData = MOCK_DATA.sort();
const binaryResult = binarySearch(sortedList, sortedData);

for (const needle of needleList) {
  console.log(`Search of SKU: ${needle}`);
  console.time('Straight search');
  console.timeEnd('Straight search');

  console.time('Binary search');
  console.timeEnd('Binary search');

  console.log('-------------------------------------');
}
console.log('Result of straight search: ', straightResult);
console.log('Result of binary search: ', binaryResult);
console.log('-------------------------------------');
