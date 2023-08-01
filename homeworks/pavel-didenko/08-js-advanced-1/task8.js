//task1

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function pluck(obj, property) {
  if (obj === null || typeof obj !== 'object') return null;


  const splited = property.split('.');

  if (splited.length > 1 && splited[0] in obj) {
    return pluck(obj[splited[0]], property.slice(splited[0].length + 1));
  } else if (splited.length === 1 && splited[0] in obj) {
    return obj[splited[0]];
  } else {
    return null;
  }
}

const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null


