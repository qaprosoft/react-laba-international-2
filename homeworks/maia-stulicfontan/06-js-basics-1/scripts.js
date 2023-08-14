// task 1: http://www.codewars.com/kata/opposite-number
function opposite(number) {
  return -number;
}

// task 2: http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 'Accepted operators are +, -, * and /';
  }
}

// task 3: http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.toString();
}

// task 4: http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(totalDays) {
  const COST_PER_DAY = 40;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;
  const totalCost = totalDays * COST_PER_DAY;
  return totalDays >= 7
    ? totalCost - SEVEN_DAYS_DISCOUNT
    : totalDays >= 3
    ? totalCost - THREE_DAYS_DISCOUNT
    : totalCost;
}

// task 5: http://www.codewars.com/kata/calculating-with-functions
function zero(operation) {
  return !operation ? 0 : operation(0);
}
function one(operation) {
  return !operation ? 1 : operation(1);
}
function two(operation) {
  return !operation ? 2 : operation(2);
}
function three(operation) {
  return !operation ? 3 : operation(3);
}
function four(operation) {
  return !operation ? 4 : operation(4);
}
function five(operation) {
  return !operation ? 5 : operation(5);
}
function six(operation) {
  return !operation ? 6 : operation(6);
}
function seven(operation) {
  return !operation ? 7 : operation(7);
}
function eight(operation) {
  return !operation ? 8 : operation(8);
}
function nine(operation) {
  return !operation ? 9 : operation(9);
}

function plus(number) {
  return leftOperand => leftOperand + number;
}
function minus(number) {
  return leftOperand => leftOperand - number;
}
function times(number) {
  return leftOperand => leftOperand * number;
}
function dividedBy(number) {
  return leftOperand => Math.floor(leftOperand / number);
}

// task 6: http://www.codewars.com/kata/get-the-middle-character
function getMiddle(word) {
  const midLength = Math.floor(word.length / 2);
  return word.length % 2 == 0
    ? word.substring(midLength - 1, midLength + 1)
    : word[midLength];
}

// task 7: http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  const falseArray = items.filter(element => !pred(element));
  const trueArray = items.filter(element => pred(element));
  items.splice(0, items.length, ...falseArray.concat(trueArray));
  return falseArray.length;
}

// task 8: http://www.codewars.com/kata/word-count -- link not working

// task 9: https://www.codewars.com/kata/find-the-odd-int/
function findOdd(integerArray) {
  for (let number of integerArray) {
    if (integerArray.filter(element => element == number).length % 2 !== 0)
      return number;
  }
}
// task 10: https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  const evenArray = integers.filter(element => element % 2 == 0);
  return evenArray.length == 1
    ? evenArray[0]
    : integers.find(element => !evenArray.includes(element));
}

// task 11: https://www.codewars.com/kata/zipwith
function zipWith(fn, array0, array1) {
  const zipped = [];
  for (let i = 0; i < Math.min(array0.length, array1.length); i++) {
    zipped.push(fn(array0[i], array1[i]));
  }
  return zipped;
}

// task 12: https://www.codewars.com/kata/filter-the-number
const filterString = function (value) {
  return parseInt(value.match(/\d/g).join(''));
};

// task 13: https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(number) {
  const fiboArray = [0, 1];
  for (let i = 2; i < number; i++) {
    fiboArray.push(fiboArray[i - 2] + fiboArray[i - 1]);
  }
  return fiboArray[number - 1];
}
// task 14: https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  if (!map.includes('C') || !map.includes('m'))
    return 'boring without two animals';

  const floorLength = map.indexOf('\n');
  const flat = map.replace(/\s/g, '');
  const catPosition = flat.indexOf('C');
  const mousePosition = flat.indexOf('m');

  const verticalDistance = Math.abs(
    Math.floor(mousePosition / floorLength) -
      Math.floor(catPosition / floorLength),
  );
  const horizontalDistance = Math.abs(
    (mousePosition % floorLength) - (catPosition % floorLength),
  );

  return verticalDistance + horizontalDistance <= moves
    ? 'Caught!'
    : 'Escaped!';
}

// task 15: https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  let wordArray = word.toLowerCase().split('');
  wordArray = wordArray.map(element => {
    return wordArray.indexOf(element) == wordArray.lastIndexOf(element)
      ? '('
      : ')';
  });
  return wordArray.join('');
}

// task 16: https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(num) {
  for (let i = 1; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] == '0' && j - i > 1) continue; // if second number starts with a 0 and has more than one digit (leading zeros)
      const first = parseInt(num.substring(0, i));
      const second = parseInt(num.substring(i, j));

      // calculate rest of the sequence from first two numbers
      const sequence = Array.of(first.toString(), second.toString());
      let seqStringLength = sequence[0].length + sequence[1].length;
      while (seqStringLength < num.length) {
        sequence.push(
          (
            parseInt(sequence[sequence.length - 2]) +
            parseInt(sequence[sequence.length - 1])
          ).toString(),
        );
        seqStringLength += sequence[sequence.length - 1].length;
      }
      if (sequence.join('') === num) return sequence;
    }
  }
  return [];
}

// task 17: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 1; i <= nFloors; i++) {
    const spaces = ' '.repeat(nFloors - i);
    const asterisks = '*'.repeat(i * 2 - 1);
    tower.push(spaces + asterisks + spaces);
  }
  return tower;
}

// task 18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    result.push(
      str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1),
    );
  }
  return result;
}

// task 19: https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(number, string) {
  const flat = string.replace(/\s/g, '');
  const result = [];
  for (let i = 0; i < flat.length; i += number) {
    result.push(flat.substring(i, number + i));
  }
  return result.join('\n');
}

// task 20: https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  return url.replace(/(\w+:\/\/)?(w{3}\.)?/, '').replace(/\..*/, '');
}
