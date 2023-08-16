//shallow copy
const obj = {name: 'Version 1', additionalInfo: {version: 1}};

const shallowCopy1 = {...obj};
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = 'Version 2';
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = 'Version 2';
shallowCopy2.additionalInfo.version = 2;

console.log(obj);
console.log(shallowCopy1);
console.log(shallowCopy2);

//deep copy
const obj2 = {
  name: 'Version 1',
  additionalInfo: {version: 1},
  birthday: new Date(),
};

const deepCopy1 = JSON.parse(JSON.stringify(obj2));
const deepCopy2 = structuredClone(obj2); // work with node > 17

deepCopy1.name = 'Version 2';
deepCopy1.additionalInfo.version = 2;

deepCopy2.name = 'Version 2';
deepCopy2.additionalInfo.version = 2;

console.log(obj2);
console.log(deepCopy1);
console.log(deepCopy2);

const fruits = ['Apple', 'Oranage', 'Banana'];

for (const key in fruits) {
  console.log(typeof key);
  console.log(key);
  console.log(fruits[key]);
}

for (const iterator of fruits) {
  console.log(iterator);
}

for (const key in obj) {
  console.log(typeof key);
  console.log(key);
  console.log(fruits[key]);
}
