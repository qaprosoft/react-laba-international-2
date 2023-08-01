// 1. https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0)
        sum += array[i];
    }
    return sum;
  }
// 2. https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(array) {
    let count = 0;
    for (let i = 0; i < array.length; i += 2) {
      if (i + 1 < array.length && Math.abs(array[i] - array[i + 1]) === 1) {
        count++;
      }
    }
    return count;
  }
// 3. https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
  }
// 4. https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbers) {
    const evenNumbers = [];
  
    for (const number of numbers) {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      }
    }
  
    return evenNumbers;
  }
// 5. https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  arr.sort((a, b) => a - b); 
  const result = [];

  while (arr.length) {
    result.push(arr.pop()); 
    if (arr.length) {
      result.push(arr.shift()); 
    }
  }

  return result;
}
// 6. https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }

  const result = [];
  for (let i = 1; i < string.length; i += 2) {
    result.push(string[i]);
  }

  return result;
}
// 7. https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(inputArray) {
  const middleValue = inputArray.slice().sort((a, b) => a - b)[1];
  return inputArray.indexOf(middleValue);
}
// 8. https://www.codewars.com/kata/578553c3a1b8d5c40300037c
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(''), 2);
}
// 9. https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  const uniqueNumber = arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
  return parseFloat(uniqueNumber);
}
// 10. https://www.codewars.com/kata/581e014b55f2c52bb00000f8
const decipherThis = secretMessage =>
  secretMessage
    .split(' ')
    .map(word => {
      const charCode = parseInt(word, 10);
      const decryptedWord = String.fromCharCode(charCode) + word.slice(String(charCode).length);
      return decryptedWord.replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2");
    })
    .join(' ');

// 11. https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;

  return arr.map(num => num % 2 !== 0 ? oddNumbers[oddIndex++] : num);
}

// 12. https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  
  itemCount() {
    return this.collection.length;
  }

  pageItemCount(pageIndex) {
    const totalPages = this.pageCount();
    if (pageIndex >= totalPages || pageIndex < 0) return -1;
    if (pageIndex === totalPages - 1) {
      return this.collection.length % this.itemsPerPage || this.itemsPerPage;
    }
    return this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
} 
// 13. https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  let nonZeros = [];
  let zeros = [];

  for (const element of arr) {
    if (element === 0) {
      zeros.push(element);
    } else {
      nonZeros.push(element);
    }
  }

  return [...nonZeros, ...zeros];
}
// 14. https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

// 15. https://www.codewars.com/kata/5296bc77afba8baa690002d7

