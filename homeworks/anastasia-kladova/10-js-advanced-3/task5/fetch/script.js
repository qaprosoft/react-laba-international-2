const URL = "https://randomuser.me/api/?gender=female&results=10";

//get users data from server
async function getUsers() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const users = await data.results;
    displayUsers(users);
  } catch (error) {
    alert(error.message);
  }
}
getUsers(URL);

//display users data
function displayUsers(data) {
  const usersContainer = document.querySelector(".users__container");
  const users = data;

  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.classList.add("users__item", "user");

    userElement.innerHTML = `
    <img class="user__avatar" alt=${user.name.last} src=${user.picture.medium}>
    <p class="user__fullName">${user.name.first} ${user.name.last}</p>
    `;

    usersContainer.append(userElement);
  });
}
