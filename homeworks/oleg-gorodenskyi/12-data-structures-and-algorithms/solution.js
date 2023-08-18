
const data = require('./MOCK_DATA');
const needleList = require('./needleList');

function straightSearch(needleList, data) {
    let count = 0;
    const needleListLength = needleList.length;

    data.map(item => {
        if (needleList.includes(item.sku)) {
            count += 1;
        }
    })
    return needleListLength === count
}
console.log(straightSearch(needleList,data))

function binarySearch(needleList, data) {
    const sortedData = data.sort((a, b) => a.sku.localeCompare(b.sku));
    
}