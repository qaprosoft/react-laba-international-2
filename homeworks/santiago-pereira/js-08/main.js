const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

const randomValue = Math.random();
const nullValue = null;

const solution1 = (obj, properties) => {
  const propertyPath = properties.split('.');
  let value = obj;

  for (const property of propertyPath) {
    if (value && value.hasOwnProperty(property)) value = value[property];
    else {
      return null;
    }
  }
  return value;
};

const solution2 = obj => structuredClone(obj);
/* console.log(solution2(user,"solution 2")); */

const solution3 = (data1, data2) => {
  const date1 = new Date(data1);
  const date2 = new Date(data2);
  const differenceOfTime = date1.getTime() - date2.getTime();
  const differenceInDays = Math.round(differenceOfTime / (1000 * 3600 * 24));
  const differenceInHours = Math.round(differenceOfTime / (1000 * 3600));
  const differenceInMinutes = Math.round(differenceOfTime / 1000 / 60);
  let strDay;
  differenceInDays === 1 ? (strDay = 'day') : (strDay = 'days');
  let strHour;
  differenceInHours === 1 ? (strHour = 'hour') : (strHour = 'hours');
  let strMinutes;
  differenceInMinutes === 1
    ? (strMinutes = 'minute')
    : (strMinutes = 'minutes');

  let selection;
  let combinedSelection;
  let str;
  let strCombined;

  if (differenceInDays > 0) {
    selection = differenceInDays;
    str = strDay;
    combinedSelection = 'ago...';
    strCombined = '';
  } else if (differenceInDays < 1) {
    selection = differenceInHours;
    str = strHour;
    combinedSelection = 'ago...';
    strCombined = '';
  }
  if (differenceInDays < 1 && differenceInHours < 1) {
    selection = differenceInMinutes;
    str = strMinutes;
    combinedSelection = 'ago...';
    strCombined = '';
  }
  if (
    differenceInDays < 1 &&
    differenceInHours >= 1 &&
    differenceInMinutes >= 1
  ) {
    selection = differenceInHours;
    combinedSelection = differenceInMinutes - differenceInHours * 60;
    str = strHour;
    strCombined = strMinutes + ' ago...';
  }

  let message = `this was ${selection} ${str} ${combinedSelection} ${strCombined}`;

  if (date1 != date2) {
    return message;
  }
};

//console.log(solution3('03-03-2023 10:00:00', '02-01-2023 10:00:00'));

function solution4(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const timeDiff = date2.getTime() - date1.getTime();
  const randomTimestamp = date1.getTime() + Math.random() * timeDiff;
  return new Date(randomTimestamp);
}
//console.log(solution4('03-05-2023', '03-01-2023'));

let a = {1: '1', 2: '2', 3: '3'},
  b = {3: '4', 5: '6', 6: '7', 7: '8'},
  c = {5: '9', 8: '9', 6: '12', 23: '35'};
o = [a, b, c];

function solution5(objects) {
  let mergedObj = {};

  for (let i = 0; i <= objects.length; i++) {
    let currentObj = objects[i];
    for (let key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        mergedObj[key] = currentObj[key];
      }
    }
  }

  return mergedObj;
}

//console.log(solution5(o));

class solution6 {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.updateFullName();
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
    this.updateFullName();
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
    this.updateFullName();
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }

  set fullName(value) {
    const names = value.split(' ');
    if (names.length === 2) {
      this._firstName = names[0];
      this._lastName = names[1];
    }
  }

  updateFullName() {
    this._fullName = this._firstName + ' ' + this._lastName;
  }
}

let namedOne = new solution6('Naomi', 'Wang');
namedOne.firstName = 'John';
namedOne.lastName = 'Doe';
//console.log(namedOne.fullName);
