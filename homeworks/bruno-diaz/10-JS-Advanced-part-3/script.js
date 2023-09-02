const apiUrl = "https://randomuser.me/api/?gender=female&results=10";

const usersList = document.querySelector(".usersList");

fetch(`${apiUrl}`)
  .then((response) => response.json())
  .then((data) => {
    const users = data.results;
    users.forEach((user) => {
      const listElemet = document.createElement("li");
      listElemet.classList.add("user");
      listElemet.innerHTML = `
                <img src="${user.picture.thumbnail}" alt="User Thumbnail">
                <p>${user.name.first} ${user.name.last}</p>
            `;
      usersList.appendChild(listElemet);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// //XMKHttpRequest

// const usersList = document.querySelector(".usersList");
// const xhr = new XMLHttpRequest();
// xhr.open("GET", `${apiUrl}`, true);

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     const users = data.results;
//     users.forEach((user) => {
//       const listElemet = document.createElement("li");
//       listElemet.classList.add("user");
//       listElemet.innerHTML = `<img src="${user.picture.thumbnail}" alt="User Thumbnail">
//         <p>${user.name.first} ${user.name.last}</p>
//     `;
//     usersList.appendChild(listElemet);
//     });
//   } else {
//     console.error('Request failed with status:', xhr.status);
//   }
// };

// xhr.onerror = function() {
//   console.error('Request failed.')
// };

// xhr.send();
