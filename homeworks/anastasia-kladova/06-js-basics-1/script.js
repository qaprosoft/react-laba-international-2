   //task1 http://www.codewars.com/kata/opposite-number
   function opposite(number) {
    return -number;
  }

  //task2 http://www.codewars.com/kata/basic-mathematical-operations
  function basicOp(operation, value1, value2) {
    switch (operation) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      //break;
      default:
        return "Please, write operation as a string";
    }
  }

  //task3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
  function printArray(array) {
    return array.join(",");
  }

  //task4 http://www.codewars.com/kata/transportation-on-vacation
  function baseCost(d) {
    const costPerDay = 40;
    return d * costPerDay;
  }

  function rentalCarCost(d) {
    let sum;
    const [dictountBig, dictountSmall] = [50, 20];

    if (d >= 7) {
      sum = baseCost(d) - dictountBig;
    } else if (d >= 3) {
      sum = baseCost(d) - dictountSmall;
    } else {
      sum = baseCost(d);
    }

    return sum;
  }

  //task5 http://www.codewars.com/kata/calculating-with-functions
  const zero = (operation) => (operation ? operation(0) : 0);
  const one = (operation) => (operation ? operation(1) : 1);
  const two = (operation) => (operation ? operation(2) : 2);
  const three = (operation) => (operation ? operation(3) : 3);
  const four = (operation) => (operation ? operation(4) : 4);
  const five = (operation) => (operation ? operation(5) : 5);
  const six = (operation) => (operation ? operation(6) : 6);
  const seven = (operation) => (operation ? operation(7) : 7);
  const eight = (operation) => (operation ? operation(8) : 8);
  const nine = (operation) => (operation ? operation(9) : 9);

  const plus = (operand1) => (operand2) => operand2 + operand1;
  const minus = (operand1) => (operand2) => operand2 - operand1;
  const times = (operand1) => (operand2) => operand2 * operand1;
  const dividedBy = (operand1) => (operand2) =>
    Math.trunc(operand2 / operand1);

  //task6 http://www.codewars.com/kata/get-the-middle-character
  function getMiddle(s) {
    const stringLength = s.length;
    const middleIndex = Math.round(s.length / 2 - 1);

    return stringLength % 2 === 0
      ? s.substr(middleIndex, 2)
      : s.charAt(middleIndex);
  }

  //task7 http://www.codewars.com/kata/partition-on
  function partitionOn(pred, items) {
    const trueItems = items.filter((item) => pred(item));
    const falseItems = items.filter((item) => !pred(item));

    items.splice(0, items.length, ...falseItems, ...trueItems);

    return falseItems.length;
  }

  //task8

  //task9 https://www.codewars.com/kata/find-the-odd-int/
  function findOdd(array) {
    if (array.length === 1) return array[0];

    const frequencyObject = {};

    for (let item of array) {
      frequencyObject[item] = (frequencyObject[item] || 0) + 1;
    }

    const result = +Object.keys(frequencyObject).find(
      (item) => frequencyObject[item] % 2 !== 0
    );

    return result;
  }

  //task10 https://www.codewars.com/kata/find-the-parity-outlier
  function findOutlier(integers) {
    const oddArray = integers.filter((integer) => integer % 2 !== 0);
    const evenArray = integers.filter((integer) => integer % 2 === 0);

    return oddArray.length === 1 ? oddArray[0] : evenArray[0];
  }

  //task11 https://www.codewars.com/kata/zipwith
  function zipWith(fn, a0, a1) {
    const result = [];
    const shortLength = Math.min(a0.length, a1.length);

    for (let i = 0; i < shortLength; i++) {
      result.push(fn(a0[i], a1[i]));
    }

    return result;
  }

  //task12 https://www.codewars.com/kata/filter-the-number
  const filterString = (value) => {
    const regEx = /\D/g;
    const number = parseInt(value.replace(regEx, ""));

    return number;
  };

  //task13 https://www.codewars.com/kata/n-th-fibonacci
  function nthFibo(n) {
    return n === 1 ? 0 : n === 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
  }

  //task14 https://www.codewars.com/kata/cat-and-mouse-2d-version
  function catMouse(map, moves) {
    if (!map.includes("C") || !map.includes("m"))
      return "boring without two animals";

    const length = map.indexOf("\n") + 1;
    const [catIndex, mouseIndex] = [map.indexOf("C"), map.indexOf("m")];

    const catRow = Math.floor(catIndex / length);
    const catColumn = catIndex % length;
    const mouseRow = Math.floor(mouseIndex / length);
    const mouseColumn = mouseIndex % length;

    const catMoves =
      Math.abs(catRow - mouseRow) + Math.abs(catColumn - mouseColumn);

    return catMoves <= moves ? "Caught!" : "Escaped!";
  }

  //task15 https://www.codewars.com/kata/duplicate-encoder
  function duplicateEncode(word) {
    const array = word.toLowerCase().split("");
    let result = "";

    const object = array.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

    array.forEach((el, i) => {
      if (object[array[i]] === 1) result += "(";
      if (object[array[i]] > 1) result += ")";
    });

    return result;
  }

  //task16 https://www.codewars.com/kata/5693239fb761dc8670000001

  //task17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
  function towerBuilder(nFloors) {
    const tower = [];
    const [starSymbol, spaceSymbol] = ["*", " "];

    for (let i = 0; i < nFloors; i++) {
      const stars = starSymbol.repeat(i * 2 + 1);
      const spaces = spaceSymbol.repeat(nFloors - i - 1);
      const floor = spaces + stars + spaces;

      tower.push(floor);
    }

    return tower;
  }

  //task18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
  function wave(str) {
    const wave = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        const substring =
          str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        wave.push(substring);
      }
    }

    return wave;
  }

  //task19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
  function stringBreakers(n, string) {
    const regex = /\s/g;
    const stringWithoutSpaces = string.replace(regex, "");
    const stringLength = string.length;
    const result = [];

    for (let i = 0; i < stringLength; i += n) {
      const substring = stringWithoutSpaces.slice(i, i + n);
      result.push(substring);
    }

    return result.join("\n");
  }

  //task20 https://www.codewars.com/kata/514a024011ea4fb54200004b
  function domainName(url) {
    const [protolcolRegex, startUrlRegex] = [/^https?:\/\//, /^www\./];
    const domain = url
      .replace(protolcolRegex, "")
      .replace(startUrlRegex, "")
      .split(".")[0];
    return domain;
  }