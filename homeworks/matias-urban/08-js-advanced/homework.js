const pluck = (obj, path) => {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    if (!value || !value.hasOwnProperty(key)) {
      return null;
    }
    value = value[key];
  }

  return value;
};

const deepClone = obj => {
  const newObj = structuredClone(obj);
  return newObj;
};
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const clonedUser = deepClone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);

const aLongTimeAgo = date => {
  const currentDate = moment();
  const duration = moment.duration(currentDate.diff(date));

  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  let result = '';

  if (days > 0) {
    if (result !== '') result += days + (days === 1 ? ' day' : ' days');
  }
  if (hours > 0) {
    if (result !== '') result += ' ';
    result += hours + (hours === 1 ? ' hour' : ' hours');
  }
  if (minutes > 0) {
    if (result !== '') result += ' ';
    result += minutes + (minutes === 1 ? ' minute' : ' minutes');
  }

  if (result === '') {
    return 'Just now';
  } else {
    return result + ' ago';
  }
};

console.log(aLongTimeAgo(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(aLongTimeAgo(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(aLongTimeAgo(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(aLongTimeAgo(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(aLongTimeAgo(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));

const solution4 = (date1, date2) => {
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);
  const randomDate = moment(
    new Date(
      dateObj1.getTime() +
        Math.random() * (dateObj2.getTime() - dateObj1.getTime()),
    ),
  );
  return `${randomDate.day()}/${randomDate.month() + 1} ${randomDate.year()}`;
};
const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');
console.log(solution4(date1, date2));

//Task 5: https://www.codewars.com/kata/merged-objects
const objConcat = array => {
  const newObj = {};
  for (obj of array) {
    Object.entries(obj).forEach(([element, value]) => {
        newObj[element] = value;
        
    });
  }
  return newObj;
}


//Task 6: https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
     this._fullName = `${firstName} ${lastName}`;
   }
    
  get firstName() {
      return this._firstName;
  }
    
  set firstName(newFirstName) {
    this._firstName = newFirstName;
    this._fullName = `${newFirstName} ${this._lastName}`;
  }
    
  get lastName() {
    return this._lastName;
  }
    
  set lastName(newLastName) {
    this._lastName = newLastName;
    this._fullName = `${this._firstName} ${newLastName}`;
  }
    
  get fullName() {
    return this._fullName;
  }
    
  set fullName(newFullName) {
    const names = newFullName.split(' ');
    if (names.length === 2) {
      this._firstName = names[0];
      this._lastName = names[1];
      this._fullName = newFullName;
    }
  }
}