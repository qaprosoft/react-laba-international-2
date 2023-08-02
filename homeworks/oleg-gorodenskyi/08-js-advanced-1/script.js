// task 1 Pluck https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#1-pluck
function pluck(object, prop) {
    const arrOfProp = prop.split(".")
    let result = object
    for (const key of arrOfProp) {
        if (!result || typeof result !== 'object') {
            return null
        }
        result = result[key]
    }
    return result
}

// task 2 Deep Clone https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#2-deep-clone
function clone(object) {
    return clonedObj = structuredClone(object)
}

// task 3 A long Time Ago https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#3-a-long-time-ago
function offset(date) {
    const [datePart, timePart] = date.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute, second] = timePart.split(':');
    const correctFormatDate = new Date(year, month - 1, day, hour, minute, second)
    const currentDate = new Date();
    const timeInMilliseconds = currentDate - correctFormatDate;

    const days = Math.floor(timeInMilliseconds / (1000 * 3600 * 24))
    const hours = Math.floor(timeInMilliseconds / (1000 * 3600) % 24)
    const minutes = Math.floor(timeInMilliseconds / (1000 * 60) % 60)

    if (days == 1) {
        return `${days} day ago`;
    } if (days > 1) {
        return `${days} days ago`
    } if (days < 1 && hours) {
        return `${hours} hours ${minutes} minutes ago`
    } if (days < 1 && hours == 1) {
        return `${hours} hour ago`
    } if (days < 1 && !hours) {
        return `${minutes} minutes ago`
    }
}

// task 4 Random Dates https://github.com/qaprosoft/react-laba-international-2/blob/main/lectures/08-js-advanced-1/task.md#4-random-dates
function randomDate(date1, date2) {
    const [day1, month1, year1] = date1.split('/')
    const [day2, month2, year2] = date2.split('/')

    const correctFormatDate1 = new Date(year1, month1 - 1, day1).getTime()
    const correctFormatDate2 = new Date(year2, month2 - 1, day2).getTime()
    const millisecondsBetweenTwoDates = Math.abs((correctFormatDate2 - correctFormatDate1))
    const randomDayInMillisec = (Math.floor(Math.random() * millisecondsBetweenTwoDates))
    const lessDateInMillisec = Math.min(correctFormatDate1, correctFormatDate2);
    const result = new Date(lessDateInMillisec + randomDayInMillisec)

    return result.toLocaleDateString('en-GB')
}

