// task 1 pluck
function pluck(obj, path) {
  const pathArr = path.split('.');
  let result = obj;
  for (let i = 0; i < pathArr.length; i++) {
    if (result === null || result === undefined) {
      return null;
    }
    result = result[pathArr[i]];
  }
  return result;
}

// task 2 deep clone
function clone(obj) {
  return structuredClone(obj);
}

// task 3 "A long time ago"
function offset(date) {

}

// task 5 https://www.codewars.com/kata/596cf5b0e1665a2d02000007
function objConcat(array){
  let result = {};
  array.forEach(obj => {
    result = {
      ...result,
      ...obj
    }
  })
  return result
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  set fullName(value) {
    if (/ /.test(value)) {
      [this.firstName, this.lastName] = value.split(' ')
    }
  }
}

// task 8 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;
  Object.freeze(this);
}

// task 9 https://www.codewars.com/kata/partial-keys
function partialKeys (obj) {
  return new Proxy(obj, {
    get: (obj, prop) => {
      let res = Object.keys(obj).sort().find(key => key.indexOf(prop) === 0);
      return res ? obj[res] : undefined;
    }
  });
}

// task 10 https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor(seconds / 60 % 60);
  const secs = Math.floor(seconds % 60);

  return `${addZero(hours)}:${addZero(mins)}:${addZero(secs)}`;
}

const addZero = (value) => value > 9 ? value : '0' + value;

