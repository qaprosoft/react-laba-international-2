const {needleList, userId} = require('./MOCK_DATA');
const fs = require('fs');

function strightSearch(value) {
  for (let i = 0; i < needleList.length; i++) {
    if (needleList[i] === value) return `index of serching value is ${i}`;
  }
  return 'not binarySearch';
}

function binarySearch(value, list) {
  const length = list.length;

  if (length === 0) {
    return 'Searching string wasn`t found';
  }

  if (value === list[Math.floor(length / 2)]) {
    return 'Searching string was found';
  }

  if (value.localeCompare(list[Math.floor(length / 2)]) > 0) {
    return binarySearch(value, list.slice(Math.floor(length / 2)));
  } else {
    return binarySearch(value, list.slice(0, Math.floor(length / 2)));
  }
}

// implement bubble sort)
function bubbleSort(array) {
  let isSwapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      continue;
    }
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === array[i + 1][j]) {
        continue;
      }
      if (array[i].localeCompare(array[i + 1]) > 0) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSwapped = true;
        break;
      }
    }
  }
  if (isSwapped) {
    return bubbleSort(array);
  }

  return array;
}
const strightSearchStart = performance.now();
strightSearch(userId);
const strightSearchTimeTaken = performance.now() - strightSearchStart;

const binarySearchStart = performance.now();
binarySearch(userId, needleList.sort());
const binarySearchTimeTaken = performance.now() - binarySearchStart;

const bubbleSortStart = performance.now();
bubbleSort(needleList);
const bubbleSortTimeTaken = performance.now() - bubbleSortStart;

const resultLog = `Time to pass stright search - ${strightSearchTimeTaken} ms\n
Time to pass binary search - ${binarySearchTimeTaken} ms\n
Time to pass bubble sort - ${bubbleSortTimeTaken} ms`;

fs.writeFile('result.log', resultLog, err => {
  if (err) console.log(err);
  else {
    console.log('File written successfully');
    console.log('The written has the following contents:\n');
    console.log(fs.readFileSync('result.log', 'utf8'));
  }
});
