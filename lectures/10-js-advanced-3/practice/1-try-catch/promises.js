let done = false;

let promise = new Promise(function (resolve, reject) {
  if (done) {
    resolve('Done');
  } else {
    reject('Not done');
  }
});

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

console.log(1111);

const function1 = () => {
  console.log(1);
  function2();
};

const function2 = () => {
  console.log(2);
  function3();
};

const function3 = () => {
  console.log(3);
  function4();
};

const function4 = () => {
  console.log(4);
};

function1();
