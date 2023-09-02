const URL = "https://randomuser.me/api/?gender=female&results=10";

//get users data from server
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = function () {
  if (xhr.status !== 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    const response = xhr.response;
    const data = JSON.parse(response);
    const users = data.results;
    displayUsers(users);
  }
};

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
