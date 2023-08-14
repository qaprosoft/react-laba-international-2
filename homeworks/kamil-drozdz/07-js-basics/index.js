1.
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  
  2.
  
  function pairs(ar) {
    let count = 0;
    for (let i = 0; i < ar.length - 1; i += 2) {
        if (Math.abs(ar[i] - ar[i + 1]) === 1) {
            count++;
        }
    }
    return count;
}

  
3.
function maxMultiple(divisor, bound) {
    for (let i = bound; i >= divisor; i--) {
      if (i % divisor === 0) {
        return i;
      }
    }
  }
  


4.
  
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(function(n) {
    return n % 2 === 0;
  });
}

  
 5.
  
  function solve(arr){
    const sorted  = arr.sort((a,b) => b - a);
    const newArr = [];
    
    while (sorted.length > 0) {
      newArr.push(sorted.shift());
      if (sorted.length > 0) {
        newArr.push(sorted.pop());
      }
    }
    
    return newArr;
  };
  
  
6.
function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
      return 'invalid string';
    }
  
    const marks = [];
    for (let i = 1; i < string.length; i += 2) {
      marks.push(string[i]);
    }
  
    return marks;
  }
  
  
  7.
  
  function gimme (triplet) {
  
    const sorted = [...triplet].sort((a,b)=> a-b);
  
    let middle = sorted[Math.round((sorted.length - 1) / 2)];
    
    return triplet.indexOf(middle);
  }
  
8.
  
  const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
  };
  
9.

  
  function findUniq(arr) {
    const unique = arr.filter((value) => {
      return arr.indexOf(value) === arr.lastIndexOf(value);
    });
  
    return unique[0];
  }
  
10.

  function decipherThis(str) {
    return str.split(' ')
      .map(word => word.replace(/(\d+)(.*)/, (_, digits, rest) => {
        let char = String.fromCharCode(digits);
        if (rest.length > 1) {
          rest = rest.replace(/(.)(.*)(.)/, '$3$2$1');
        }
        return char + rest;
      })).join(' ');
}

11.

  function sortArray(array) {
 
    let oddNumbers = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
    
  
    return array.map(n => n % 2 !== 0 ? oddNumbers.shift() : n);
  }
  
12.

class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
    }
  
    itemCount() {
      return this.collection.length;
    }
  
    pageCount() {
      return Math.ceil(this.itemCount() / this.itemsPerPage);
    }
  
    pageItemCount(pageIndex) {
      if (pageIndex < 0 || pageIndex >= this.pageCount()) {
        return -1;
      } else if (pageIndex < this.pageCount() - 1) {
        return this.itemsPerPage;
      } else {
        let remainingItems = this.itemCount() % this.itemsPerPage;
        return remainingItems === 0 ? this.itemsPerPage : remainingItems;
      }
    }
  
    pageIndex(itemIndex) {
      if (itemIndex < 0 || itemIndex >= this.itemCount()) {
        return -1;
      } else {
        return Math.floor(itemIndex / this.itemsPerPage);
      }
    }
  }
  
  
13.

  function moveZeros(arr) {
    return arr.sort((a, b) => {
      if (b === 0) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  
14.

  function findUniq(arr) {
    function normalize(str) {
      return [...new Set(str.toLowerCase().replace(/\s/g, ''))].sort().join('');
    }
    let [first, second, third] = arr.slice(0, 3).map(normalize);
    let commonPattern = first === second ? first : (first === third ? first : second);
    return arr.find(str => normalize(str) !== commonPattern);
  }
  