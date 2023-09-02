// object - built in type in ts
const person: object = {
  name: 'Ilya',
  age: 22,
};
console.log('person', person);

const person1: {
  name: string;
  age?: number; // optional
} = {
  name: 'Ilya',
  age: 22,
};
console.log(person1.name);
// person1.test = 123; // error

export {};
