// task 3: https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
// part 1
let elapsed = 1;
const printElapsedTime = setInterval(() => {
  console.log(`Elapsed time: ${elapsed} sec`);
  elapsed++;
}, 1000);

// part 2
setTimeout(() => clearInterval(printElapsedTime), 5000);
