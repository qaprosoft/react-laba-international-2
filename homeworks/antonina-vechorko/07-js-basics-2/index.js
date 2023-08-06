function sudoku(puzzle) {
  let arr = createArr(puzzle);
  const sum = 45;

  while (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let array = [];
      array = checkSquare(puzzle, arr[i][0], arr[i][1], array);
      array = checkLine(puzzle, arr[i][0], arr[i][1], array);
      array = array.filter((item, index) => array.indexOf(item) === index);

      if (array.length === 8) {
        puzzle[arr[i][0]][arr[i][1]] =
          sum - array.reduce((item, s) => item + s);
      }
    }
    arr = createArr(puzzle);
  }

  return puzzle;
}

function createArr(puzzle) {
  const arr = [];
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle.length; j++) {
      if (puzzle[i][j] === 0) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
}

function checkSquare(puzzle, i, j, array) {
  let n = i - (i % 3),
    m = j - (j % 3);

  for (let x = n; x < n + 3; x++) {
    for (let y = m; y < m + 3; y++) {
      if (puzzle[x][y]) {
        array.push(puzzle[x][y]);
      }
    }
  }

  return array;
}

function checkLine(puzzle, i, j, array) {
  for (let x = 0; x < 9; x++) {
    if (puzzle[i][x]) {
      array.push(puzzle[i][x]);
    }
    if (puzzle[x][j]) {
      array.push(puzzle[x][j]);
    }
  }

  return array;
}
