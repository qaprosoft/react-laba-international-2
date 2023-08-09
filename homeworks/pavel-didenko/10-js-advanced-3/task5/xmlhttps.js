const url2 = 'https://randomuser.me/api/?gender=male&results=10';
const menBlock = document.querySelector('.men-block');

let xhr = new XMLHttpRequest();
xhr.open('GET', url2);

xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    let responseObj = xhr.response;
    const users = responseObj.results;
    for (let user of users) {
      menBlock.appendChild(
        createUser(user.picture.medium, user.name.first, user.name.last),
      );
    }
  }
};

xhr.onprogress = function (event) {
  let responseObj = xhr.response;
};

xhr.onerror = function () {
  console.log('Request failed');
};
