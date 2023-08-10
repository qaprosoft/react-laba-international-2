//task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function validateMessage(msg) {
  if (typeof msg !== 'string' && msg !== null) {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }

  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }

  if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (/<\/?[a-z][\s\S]*>/i.test(msg) || /<[^>]+>/g.test(msg)) {
    return false;
  }

  return true;
}

//task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
  try {
    const someData = await fetch(apiUrl);
    const data = await someData.json();
    if (!data.jokes) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const joke = data.jokes.find(joke => joke.id === jokeId);
    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }
    if (!joke.setup || !joke.punchLine) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine,
    };
  } catch (error) {
    throw error;
  }
}

//task 3 https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/10-js-advanced-3/task.md#3-settimeoutsetinterval

let count = 1;

const timerID = setInterval(() => {
  console.log(`Elapsed time: ${count} sec`);
  if (count === 5) clearInterval(timerID);
  count++;
}, 1000);

//task 5

const fetchUsers = async () => {
  const data = await fetch('https://randomuser.me/api/?results=10');
  const response = await data.json();
  return response.results;
};

const loadUsersViaXMLHttpRequest = () => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/?results=10');

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response).results);
      } else {
        reject(new Error('Request failed'));
      }
    });

    xhr.send();
  });
};

loadUsersViaXMLHttpRequest();

const loadUsers = async () => {
  try {
    //request using XMLHttpRequest
    const users = await loadUsersViaXMLHttpRequest();
    //request using fetch
    //const users = await fetchUsers();
    const divForUsers = document.getElementById('task5');

    for (let i = 0; i < users.length; i++) {
      const newDiv = document.createElement('div');
      const image = document.createElement('img');
      const p = document.createElement('p');
      image.setAttribute('src', users[i].picture.medium);
      image.setAttribute('alt', '');
      p.innerHTML = `${users[i].name.first} ${users[i].name.last}`;
      newDiv.appendChild(image);
      newDiv.appendChild(p);
      divForUsers.appendChild(newDiv);
    }
  } catch {
    const divForUsers = document.getElementById('task5');
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Unable to load users';
    divForUsers.appendChild(h3);
  }
};

loadUsers();

//task 6

function digitOrNot(str) {
  const isFirestCharIsDigitRegex = new RegExp('^[0-9].*');
  return isFirestCharIsDigitRegex.test(str);
}

console.log(digitOrNot('1asdas'));

//task 7

//not done
