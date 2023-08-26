const hobbies = ['Cooking', 'Sport']; // automatically defined type "string[]"
const typedHobbies: string[] = ['Cooking', 'Sports'];

// readonly
const myList: readonly string[] = ['value1', 'value2', 'value3'];
// myList.push('value3'); // error
// myList.pop(); // error

// tuple
const tupleType: [string, number] = ['123', 123]; // should be exactly two values which defined in type

// union
const unionType = [2, 'test', 213, 123, 'test2']; // the same
const unionType2: (string | number)[] = [1, 'test', 213, 123, 'test2']; // the same

export {};
