const promise = new Promise((resolve, reject) => {
  resolve('1');
});

const testFunction = () => {
  console.log('2');
};

promise.then(data => {
  console.log(data);
});

testFunction();
