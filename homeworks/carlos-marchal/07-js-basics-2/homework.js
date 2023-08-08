// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let counter = 0;
  arr.forEach(element => {
    element > 0 ? (counter += element) : null;
  });

  return counter;
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar) {
  let counter = 0;

  for (let i = 0; i <= ar.length; i += 2) {
    ar[i] == ar[i + 1] - 1 || ar[i] == ar[i + 1] + 1
      ? (counter += 1)
      : (counter += 0);
  }

  return counter;
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let n;
  for (let i = 0; i <= bound; i++) {
    i % divisor === 0 ? (n = i) : null;
  }
  return n;
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  let evenArray = numbersArray.filter(element => element % 2 == 0);

  return evenArray;
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let resultArr = [];
  arr.sort((elementA, elementB) => elementA - elementB);

  do {
    resultArr.push(arr.pop());
    arr.length > 0 ? resultArr.push(arr.shift()) : null;
  } while (arr.length != 0);

  return resultArr;
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  let resultArr = [];

  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  } else {
    for (let i = 1; i <= string.length; i += 2) {
      if (string[i] != undefined) {
        resultArr.push(string[i]);
      }
    }
  }

  return resultArr;
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  let sortedArr = [...triplet];
  sortedArr.sort((elementA, elementB) => elementA - elementB);

  return triplet.indexOf(sortedArr[1]);
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  let filteredArr = arr.filter(element => element == arr[0]);
  let filteredArr2 = arr.filter(element => element != arr[0]);

  if (filteredArr.length > filteredArr2.length) {
    return filteredArr2[0];
  } else {
    return filteredArr[0];
  }
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  let arrString = str.split(' ');
  let result = '';

  for (let i = 0; i < arrString.length; i++) {
    let numArray = arrString[i].match(/[0-9]/g);
    let charArray = arrString[i].match(/[aA-zZ]/g);

    result += String.fromCharCode(numArray.join(''));

    if (charArray) {
      let secondChar = charArray.pop();
      let lastChar = charArray.shift();
      let restChars = charArray.join('');

      secondChar ? (result += secondChar) : null;
      restChars ? (result += restChars) : null;
      lastChar ? (result += lastChar) : null;
      result += ' ';
    } else {
      result += ' ';
    }
  }
  return result.trim();
}

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  let oddArray = array.filter(element => element % 2 != 0);
  let counter = 0;
  let resultArray = [];
  oddArray.sort((elementA, elementB) => elementA - elementB);
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 != 0) {
      resultArray = array.fill(oddArray[counter], i, i + 1);
      counter += 1;
    }
  }
  return resultArray;
}

// task 12 https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
  }
  itemCount() {
    return this.collection.length;
    // returns the number of items within the entire collection
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
    // returns the number of pages
  }
  pageItemCount(pageIndex) {
    if (pageIndex >= this.pageCount() || pageIndex < 0) {
      return -1;
    } else if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPerPage
        ? this.collection.length % this.itemsPerPage
        : this.itemsPerPage;
    } else {
      return this.itemsPerPage;
    }
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    } else {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

// task 13 https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  arr.reverse();
  let resultArr = [];
  arr.forEach((e, i) => {
    e == 0 && Number.isInteger(e) ? resultArr.push(e) : resultArr.unshift(e);
  });
  return resultArr;
}

// task 14 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
  let result = arr
    .sort()
    .filter((element, index, arr) =>
      element.match(new RegExp(`[^${arr[1]}]`, 'i')),
    );

  return result[0];
}
