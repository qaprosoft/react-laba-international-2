/* 1. Pluck */
function pluck(obj, path) {
    const keys = path.split('.');
    let result = obj;

    for (const key of keys) {
        if (result === null || result === undefined) {
            return null;
        }

        result = result[key];
    }

    return result !== undefined ? result : null;
}

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

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null


/* 2. Deep Clone */
function clone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const newArr = [];
        for (let i = 0; i < obj.length; i++) {
            newArr[i] = clone(obj[i]);
        }
        return newArr;
    }

    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = clone(obj[key]);
        }
    }
    return newObj;
}

/* const user = {
    username: 'testuser1',
    preferences: {
        sound: {
            maxValue: 50,
            value: 30,
        },
    },
};
const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); */ // false


/* 3. "A long time ago" */

function moment(dateTimeStr, format) {
    return {
        dateTime: new Date(dateTimeStr),
        format: format,
        diffFromNow: function () {
            const now = new Date();
            const diff = now - this.dateTime;

            const minute = 60 * 1000;
            const hour = 60 * minute;
            const day = 24 * hour;

            const days = Math.floor(diff / day);
            const hours = Math.floor((diff % day) / hour);
            const minutes = Math.floor((diff % hour) / minute);

            let result = '';

            if (days > 0) {
                result += `${days} day${days > 1 ? 's' : ''} `;
            }

            if (hours > 0) {
                result += `${hours} hour${hours > 1 ? 's' : ''} `;
            }

            if (minutes > 0) {
                result += `${minutes} minute${minutes > 1 ? 's' : ''} `;
            }

            if (result === '') {
                result = 'just now';
            } else {
                result += 'ago';
            }

            return result;
        },
    };
}

console.log(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss').diffFromNow()); // 30 minutes ago
console.log(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss').diffFromNow()); // 1 hour ago
console.log(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss').diffFromNow()); // 2 hours 30 minutes ago
console.log(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss').diffFromNow()); // 1 day ago
console.log(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss').diffFromNow()); // 549 days ago


/* 4. Random dates */

function randomDate(startDate, endDate) {

    const startMillis = startDate.dateTime.getTime();
    const endMillis = endDate.dateTime.getTime();
    const randomMillis = startMillis + Math.random() * (endMillis - startMillis);
    const randomDate = new Date(randomMillis);

    return moment(randomDate, startDate.format);
}

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

console.log(randomDate(date1, date2).format('DD/MM/YY'));

/* 5. Merged Objects */

const a = { 1: '1', 2: '2', 3: '3' }
const b = { 3: '4', 5: '6', 6: '7', 7: '8' }
const c = { 5: '9', 8: '9', 6: '12', 23: '35' }
const o = [a, b, c];


const mergeObjects = () => {
    var merged = {};

    for (var i = 0; i < o.length; i++) {
        var currentObj = o[i];

        for (var key in currentObj) {
            if (currentObj.hasOwnProperty(key)) {

                if (merged.hasOwnProperty(key)) {
                    merged[key] = currentObj[key];
                } else {
                    merged[key] = currentObj[key];
                }
            }
        }
    }
    return merged
}


/* 6. "this" is an other problem */

function NamedOne(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.updateFullName = function () {
        if (this.firstName && this.lastName) {
            this.fullName = this.firstName + ' ' + this.lastName;
        }
    };

    this.updateFullName();

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
            this.updateFullName();
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
            this.updateFullName();
        }
    });

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            var parts = value.split(' ');
            if (parts.length === 2) {
                this._firstName = parts[0];
                this._lastName = parts[1];
                this.updateFullName();
            }
        }
    });
}
