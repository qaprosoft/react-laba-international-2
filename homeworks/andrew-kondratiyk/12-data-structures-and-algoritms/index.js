const fs = require('fs');
const data = require('./MOCK_DATA.js');

const userId = '4aaaf5c8-2d30-4061-a4d0-70e0954fd4e6';

// Linear search
const linearSearch = (data, userId) => {
  return data.find((item) => item.sku === userId);
}

// Hash table
class HashTable {
  constructor() {
    this.table = {};
  }

  insert(user) {
    this.table[user.sku] = user;
  }

  search(targetSku) {
    return this.table[targetSku] || null;
  }
}

// Binary search

const binarySearch = (data, userId) => {
  const sortedData = [...data].sort((a, b) => a.sku - b.sku);
  let left = 0;
  let right = sortedData.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedData[mid].sku === userId) {
      return sortedData[mid];
    } else if (sortedData[mid].sku < userId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

// Tests
// Linear search
const linearSearchStartTime = new Date().getMilliseconds();
console.log(linearSearch(data, userId));
const linearSearchEndTime = new Date().getMilliseconds();

// Hash table
const hashTable = new HashTable();
const hashTableStartTime = new Date().getMilliseconds();
data.forEach(user => hashTable.insert(user));
console.log(hashTable.search(userId));
const hashTableEndTime = new Date().getMilliseconds();

// Binary search
const binarySearchStartTime = new Date().getMilliseconds();
console.log(binarySearch(data, userId));
const binarySearchEndTime = new Date().getMilliseconds();


// Logging
const logMessage = `
Linear search time: ${linearSearchEndTime - linearSearchStartTime} мс 
Hash table search time: ${hashTableEndTime - hashTableStartTime} мс 
Binary search time: ${binarySearchEndTime - binarySearchStartTime} мс 
=====================`;

fs.appendFile('result.log', logMessage, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('success');
  }
});