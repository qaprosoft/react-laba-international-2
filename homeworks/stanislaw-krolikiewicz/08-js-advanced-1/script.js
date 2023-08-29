// task 1 Pluck https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
const pluck = (object, string) => {
  const path = string.split('.');
  let value = object;

  for (const key of path) {
    if (value === null || value === undefined) return null;
    value = value[key];
  }

  return value !== undefined ? value : null;
};

// task 2 Deep Clone https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
const clone = object => JSON.parse(JSON.stringify(object));

// task 3 "A long time ago"
const moment = (dateString, format) => {
  const dateArray = dateString.split(/\/|\s|:/);
  const formatedDateString =
    dateArray[1] + '/' + dateArray[0] + dateString.substring(5);

  const date = new Date(formatedDateString);
  return date;
};

const offset = date => {
  const millisecond = 1;
  const second = 1000 * millisecond;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const now = new Date();
  const difference = now - date;

  if (difference < minute) return 'just now';
  if (difference < hour)
    return `${Math.floor(difference / minute)} minutes ago`;
  if (difference < day) {
    const minutes = Math.floor(difference / minute);
    const hours = Math.floor(difference / hour);
    const minutesLeft = minutes - hours * 60;
    if (hour === 1) {
      if (minutesLeft === 0) return '1 hour ago';
      else if (minutesLeft === 1) return '1 hour 1 minute ago';
      else if (minutesLeft > 1) return `1 hour ${minutesLeft} minutes ago`;
    }
    if (hour > 1) {
      if (minutesLeft === 0) return `${hours} hours ago`;
      else if (minutesLeft === 1) return `${hours} hours 1 minute ago`;
      else if (minutesLeft > 1)
        return `${hours} hours ${minutesLeft} minutes ago`;
    }
  }
  if (difference >= day) {
    const days = Math.floor(difference / day);
    if (days === 1) return '1 day ago';
    if (days > 1) return `${days} days ago`;
  }

  return difference;
};

// task 4 Random dates https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
const randomDate = (startDate, endDate) => {
  const randomMillis =
    Math.random() * (endDate - startDate) + Number(startDate);
  const date = new Date(randomMillis);
  return {
    format: function (format) {
      const dateArray = date.toLocaleString().split(/\/|\s|:/);
      const formatedDateString =
        dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2];
      return formatedDateString;
    },
  };
};
