const fs = require('fs');
const data = require('./MOCK_DATA.js');

const linearSearch = (data, userId) => {
  return data.find((item) => item.sku === userId);
}

const startTime = new Date().getMilliseconds();
console.log(linearSearch(data, '4aaaf5c8-2d30-4061-a4d0-70e0954fd4e6'));
const endTime = new Date().getMilliseconds();

const logMessage = `Line search time: ${endTime - startTime} мс \n ===================== \n`;

fs.appendFile('result.log', logMessage, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('success');
  }
});