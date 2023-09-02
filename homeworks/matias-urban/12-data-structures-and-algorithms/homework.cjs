const mockData = require('./MOCK_DATA.js');

const straightSearch = (array, skuArray) => {
  console.log("Straight Search: ");
  console.time('Time taken')
  const solution = []; 
  for (const code of skuArray) {
    const matchingObj = array.find(obj => obj.sku === code);

    if (matchingObj) {
      const newObj = {
        sku: matchingObj.sku,
        name: matchingObj.name,
        price: matchingObj.price,
        pack: matchingObj.pack,
      };
      solution.push(newObj);
    }
  }
  console.timeEnd('Time taken');
  return solution;
}
const binarySearch = (array, skuArray) => {
  console.log("Binary Search: ");
  console.time('Time taken');
  const solution = [];
  const sortedArray = [...array].sort((a, b) => a.sku.localeCompare(b.sku));
  
  const recursiveSearch = (array, skuElem, start, finish, solution) => {
    if (start > finish) {
      return; // Exit condition for binary search
    }
    
    const elemNumber = Math.floor((finish + start) / 2);
    
    if (array[elemNumber].sku === skuElem) {
      const newObj = {
        sku: array[elemNumber].sku,
        name: array[elemNumber].name,
        price: array[elemNumber].price,
        pack: array[elemNumber].pack,
      };
      solution.push(newObj);
    } else if (array[elemNumber].sku.localeCompare(skuElem) > 0) {
      finish = elemNumber - 1;
      recursiveSearch(array, skuElem, start, finish, solution);
    } else {
      start = elemNumber + 1;
      recursiveSearch(array, skuElem, start, finish, solution);
    }
  };

  for (skuElem of skuArray) {
    recursiveSearch(sortedArray, skuElem, 0, sortedArray.length - 1, solution);
  }

  console.timeEnd('Time taken');
  return solution;
};
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
console.log(straightSearch(mockData, needleList));
console.log(binarySearch(mockData, needleList));
