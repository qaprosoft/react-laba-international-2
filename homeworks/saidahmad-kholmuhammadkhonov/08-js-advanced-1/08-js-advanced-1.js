// task 1 Pluck

const user = {
    username: 'testuser1',
    preferences: {
        sound: {
            maxValue: 50,
            value: 30,
        },
    },
};
const randomValue = Math.random();
const nullValue = null;

function getProperty(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
        return obj[propertyName];
    } else {
        return null;
    }
}

//task 2 Deep Clone

const user1 = {
    username: 'testuser1',
    preferences: {
        sound: {
            maxValue: 50,
            value: 30,
        },
    },
};

const clone = function (obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = clone(obj[key]);
        }
    }

    return objCopy;
}

const clonedUser = clone(user1);

clonedUser.preferences.sound.maxValue = 70;

console.log(
    user1.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);

// task 3  "A long time ago"

function offSet(inputDate) {
    const today = new Date(2021, 1, 23, 14, 0, 0);

    const givenTime = inputDate.getTime();

    const timeDifference = today.getTime() - givenTime;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
        return `${minutes} minutes ago`
    } else if (hours < 24) {
        return `${hours} hours ago`
    } else {
        return `${days} days ago`
    }
}

// task 4 Random dates

const randomDate = function (date1, date2) {
    const startDate = date1.getTime();
    const endDate = date2.getTime();

    const randomTime = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTime);
}

