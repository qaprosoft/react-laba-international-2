//task1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  const positiveArray = arr.filter((item) => item > 0);
  const sum = positiveArray.reduce((sum, current) => sum + current, 0);
  return sum;
}

//task2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    const [currentEl, nextEl] = [ar[i], ar[i + 1]];
    if (currentEl === nextEl - 1 || nextEl === currentEl - 1) count++;
  }
  return count;
}

//task3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
    let integer;
    for (let i = bound; i >= divisor; i--) {
      if (i % divisor === 0) {
        integer = i;
        break;
      }
    }
    return integer;
  }

//task4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((number) => number % 2 === 0);
}

//task5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  const ascendingArr = [...arr].sort((a, b) => a - b);
  const maxMinArr = arr.map((item, i) =>
    i % 2 === 0 ? ascendingArr.pop() : ascendingArr.shift()
  );
  return maxMinArr;
}

//task6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  const stringLength = string.length;

  if (stringLength < 2 || stringLength > 100) return "invalid string";

  const array = [...string];
  const evenArray = array.filter((el, i) => i % 2 !== 0);

  return evenArray;
}

//task7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const sortedArray = [...triplet].sort((a, b) => a - b);
  const middleElement = sortedArray[1];
  const resultIndex = triplet.indexOf(middleElement);
  return resultIndex;
}

//task8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  const string = arr.join("");
  const binary = parseInt(string, 2);
  return binary;
};

//task9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  const filteredArray = arr.filter(
    (number) => arr.indexOf(number) === arr.lastIndexOf(number)
  );
  return filteredArray[0];
}

//task10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  const array = str.split(" ");
  const decipheredWord = array
    .map((word) => decipherWord(word))
    .join(" ");
  return decipheredWord;
}

function decipherWord(word) {
  const charCode = parseInt(word);
  const firstLetter = String.fromCharCode(charCode);
  const regex = /^\d+/;
  const restWord = word.replace(regex, "");
  const decipheredWord = firstLetter + `${switchLetters(restWord)}`;

  return decipheredWord;
}

function switchLetters(word) {
  return word.length >= 2
    ? word.slice(-1) + word.slice(1, -1) + word.slice(0, 1)
    : word;
}

//task11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const oddArray = array
    .filter((item) => item % 2 !== 0)
    .sort((a, b) => a - b);
  const sortedArray = array.map((item) =>
    item % 2 !== 0 ? (item = oddArray.shift()) : item
  );
  return sortedArray;
}

//OPTIONAL
//task1 https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    const collectionLength = this.itemCount();
    const itemsPerPage = this.itemsPerPage;

    return Math.ceil(collectionLength / itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    let collectionLength = this.itemCount();
    const pageQuantity = this.pageCount();
    const itemsPerPage = this.itemsPerPage;
    const pageArray = [];

    if (pageIndex < 0 || pageIndex > pageQuantity - 1) return -1;

    for (let i = 0; i < pageQuantity; i++) {
      //count how much items on every page. And make an array from it
      pageArray.push(
        collectionLength > itemsPerPage ? itemsPerPage : collectionLength
      );
      collectionLength -= itemsPerPage;
    }

    return pageArray[pageIndex];
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    const collectionLength = this.itemCount() - 1;
    const itemsPerPage = this.itemsPerPage;

    if (itemIndex > collectionLength || itemIndex < 0) return -1;
    return Math.floor(itemIndex / itemsPerPage);
  }
}

//task2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  const zerosArr = arr.filter((el) => el === 0);
  const noZerosArr = arr.filter((el) => el !== 0);
  const resultArr = [...noZerosArr, ...zerosArr];

  return resultArr;
}

//task3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
  let uniqueWord;
  const sortedArr = arr.map((el) =>
    el.trim().toLowerCase().split("").sort().join("")
  );
  //use Set to leave only unique letters. In order to to make not unique words identical (because some of them at the start have similar letters but different length)
  const uniqueArr = sortedArr.map((el) => [...new Set(el)].join(""));

  uniqueArr.forEach((el, i) => {
    if (uniqueArr.indexOf(el) === uniqueArr.lastIndexOf(el))
      uniqueWord = arr[i];
  });

  return uniqueWord;
}

//task4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
