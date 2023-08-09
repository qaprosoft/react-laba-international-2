const API = 'https://randomuser.me/api/?gender=female&results=10';

const cards = document.querySelector('.cards')

async function getUsers(API) {
    try {
        const response = await fetch(API);
        const data = await response.json()
        return displayUsers(data.results)
    } catch (error) {
        console.log('Error', error)
    }
}

function fetchDataWithXMLHttpreq(API) {
    const request = new XMLHttpRequest();
    request.open("GET", API);
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const response = JSON.parse(request.responseText)
                displayUsers(response.results)
            }
            else {
                console.log('Error:', request.status, request.statusText)
            }
        }
    }
}

function displayUsers(arrOfUsers) {
    arrOfUsers.forEach(element => {
        const user = document.createElement('div');

        user.innerHTML = `
        <img src='${element.picture.medium}'>
        <div>${element.name.first} ${element.name.last}</div>
        `
        user.classList.add('profile')
        cards.append(user)
    });
}

getUsers(API);
// fetchDataWithXMLHttpreq(API)