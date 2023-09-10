const apiUrl = 'https://randomuser.me/api/?results=5&nat=ua';
const container = document.querySelector('#fetch-container');

function createContainers(picture, name) {
  const userDiv = document.createElement('div');
  const userImg = document.createElement('img');
  userImg.setAttribute('src', picture);
  const userName = document.createElement('p');
  userName.innerHTML = name;
  userDiv.appendChild(userImg);
  userDiv.appendChild(userName);
  return userDiv;
}

async function createUsers() {
  const request = await userRequest(apiUrl);
  const users = request.results;

  users.map(user => {
    const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const userPicture = user.picture.thumbnail;
    container.appendChild(createContainers(userPicture, userName));
  });
}

async function userRequest(url) {
  try {
    const response = await fetch(url);
    const users = response.json();
    return users;
  } catch (error) {
    console.log(error.message);
  }
}

createUsers();
