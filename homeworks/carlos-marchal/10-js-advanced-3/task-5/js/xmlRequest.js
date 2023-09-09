const apiUrl2 = 'https://randomuser.me/api/?results=5&nat=us';
const container2 = document.querySelector('#xml-container');

const xhttp = new XMLHttpRequest();

xhttp.open('GET', apiUrl2);
xhttp.responseType = 'json';
xhttp.send();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = xhttp.response;
    const users = response.results;

    users.map(user => {
      const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      const userPicture = user.picture.thumbnail;
      container2.appendChild(createContainers(userPicture, userName));
    });
  }
};
