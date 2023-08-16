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


// Logging
const logMessage = `
Linear search time: ${linearSearchEndTime - linearSearchStartTime} мс 
Hash table search time: ${hashTableEndTime - hashTableStartTime} мс 
=====================`;

fs.appendFile('result.log', logMessage, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('success');
  }
});