const url = 'https://randomuser.me/api/?gender=female&results=10';

const womenBlock = document.querySelector('.women-block');

function createUser(avatar, firstName, lastName) {
  const userBlock = document.createElement('div');
  const userAvatar = document.createElement('img');
  const userName = document.createElement('p');
  userAvatar.setAttribute('src', avatar);
  userName.innerHTML = `${firstName} ${lastName}`;

  userBlock.appendChild(userAvatar);
  userBlock.appendChild(userName);
  return userBlock;
}

async function generateUsers() {
  const users = await requestUsers(url);
  for (let user of users) {
    womenBlock.appendChild(
      createUser(user.picture.medium, user.name.first, user.name.last),
    );
  }
}

async function requestUsers(url) {
  let response
  try {
    response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      users = json.results;
      return users;
    }
  } catch (e) {
    console.log(e.message);
    console.log(e);
  }finally{
    console.log(response.status);
  }
}

generateUsers();
