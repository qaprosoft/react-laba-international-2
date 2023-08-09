// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }

  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }

  const msgLength = msg.length;
  if (msgLength > 255 || msgLength === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  return hasHTMLTags(msg);
}

function hasHTMLTags(inputString) {
  const htmlTagRegex = /<[^>]*>/g;
  return !htmlTagRegex.test(inputString);
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
// SKIP, API IS NOT WORKING

// task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval
function timer() {
  let second = 1;
  const interval = setInterval(() => {
    console.log(`Elapsed time: ${second} sec`);
    if (second === 5) clearInterval(interval);
    second++;
  }, 1000);
}

// task 5 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#5-fetch-apixmlhttprequest
const listContainer = document.querySelector('.list');

class UsersAPI {
  constructor(url) {
    this.url = url;
  }

  async getUsers(gender, results) {
    try {
      const response = await fetch(
        this.url +
          '?' +
          new URLSearchParams({
            gender,
            results,
          }),
      );
      const users = await response.json();
      return users.results;
    } catch (error) {
      console.error('There was some ERROR!!!!!');
      console.error(error);
    }
  }

  getUsersXML(gender, results) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        this.url +
          '?' +
          new URLSearchParams({
            gender,
            results,
          }),
        true,
      );

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const users = JSON.parse(xhr.responseText);
          resolve(users.results);
        } else {
          console.error('There was some ERROR!!!!!');
          console.error(xhr.statusText);
          reject(xhr.statusText);
        }
      };

      xhr.onerror = function () {
        console.error('There was some ERROR!!!!!');
        console.error(xhr.statusText);
        reject(xhr.statusText);
      };

      xhr.send();
    });
  }
}

async function displayList() {
  try {
    const usersAPI = new UsersAPI('https://randomuser.me/api');
    const users = await usersAPI.getUsersXML('female', 10);
    //or
    // const users = await usersAPI.getUsers("female", 10);

    users.forEach(user => {
      listContainer.innerHTML += `
                <div class="card">
                    <img src=${user.picture.medium} class="avatar" alt="${user.name.first}' avatar">
                    <p class="name">${user.name.title} ${user.name.first} ${user.name.last}</p>
                </div>
            `;
    });
  } catch (error) {
    console.error(error);
  }
}

displayList();

// task 6 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#6-digit-or-not
function startsWithDigit(inputString) {
  const digitRegex = /^\d/;
  return digitRegex.test(inputString);
}
console.log(startsWithDigit('123abc')); // Output: true
console.log(startsWithDigit('abc123')); // Output: false
console.log(startsWithDigit('xyz')); // Output: false

// task 7 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#7-optional-advanced
function isValidPhoneNumber(phoneNumber) {
  const regexp = /^\+38\s0[1-9]\d{1}-\d{3}-\d{2}-\d{2}$/;
  return regexp.test(phoneNumber);
}

console.log(isValidPhoneNumber('+38 011-429-38-32')); // Output: true
console.log(isValidPhoneNumber('+38 099-429-38-32')); // Output: true
console.log(isValidPhoneNumber('+38 055-45-678')); // Output: false (not enough digits)
console.log(isValidPhoneNumber('+38 000-429-38-32')); // Output: false (second and third digits must not be 0)
console.log(isValidPhoneNumber('123-45-678')); // Output: false (missing country code)
