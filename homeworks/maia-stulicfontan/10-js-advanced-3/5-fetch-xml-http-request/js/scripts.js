async function getUsersWithFetch(url) {
  try {
    let temp = '';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not successful');
    }
    await response.json().then(data => {
      data.results.forEach(user => {
        temp += `<div class="user"><img class="picture" src="${user.picture.large}"><p>${user.name.first} ${user.name.last}</p><p>${user.email}</p></div>`;
      });
      document.querySelector('#fetch').innerHTML += temp;
    });
  } catch (err) {
    return console.log(err);
  }
}

function getUsersWithXMLHttpRequest(url) {
  let temp = '';
  const req = new XMLHttpRequest();
  req.open('GET', url);
  req.responseType = 'json';
  req.send();
  req.onload = () => {
    req.response.results.forEach(user => {
      temp += `<div class="user"><img class="picture" src="${user.picture.large}"><p>${user.name.first} ${user.name.last}</p><p>${user.email}</p></div>`;
    });
    document.querySelector('#xml-http-req').innerHTML += temp;
  };
  req.onerror = () =>
    console.log('Error loading resources with XMLHttpRequest');
}

getUsersWithFetch('https://randomuser.me/api/?gender=female&results=5');
getUsersWithXMLHttpRequest(
  'https://randomuser.me/api/?gender=female&results=5',
);
