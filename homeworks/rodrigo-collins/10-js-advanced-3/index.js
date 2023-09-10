/* 1.Error Throwing - Error Handling #2 */

function evaluateString(str) {
    if (str === null) {
        throw new ReferenceError('Message is null!');
    }

    if (typeof str !== 'string') {
        throw new TypeError(`Message should be of type string but was of type ${typeof str}!`);
    }

    if (str.length === 0 || str.length > 255) {
        throw new RangeError(`Message contains ${str.length} characters!`);
    }

    if (/<[a-z][\s\S]*>/i.test(str)) {
        return false;
    }

    return true;
}


try {
    const input = '<p>Hello, world!</p>';
    const result = evaluateString(input);
    if (!result) {
        console.log('HTML tags found.');
    } else {
        console.log('No HTML tags found.');
    }
} catch (error) {
    console.error(error.message);
}

/* 2. Jokes you've been 'awaiting' for ... promise */

async function getJokeById(apiUrl, jokeId) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching jokes: ${response.statusText}`);
        }

        const data = await response.json();
        if (!Array.isArray(data.jokes)) {
            throw new Error(`No jokes at url: ${apiUrl}`);
        }

        const joke = data.jokes.find(j => j.id === jokeId);
        if (!joke) {
            throw new Error(`No jokes found id: ${jokeId}`);
        }

        return {
            saySetup: () => joke.setup,
            sayPunchLine: () => joke.punchLine,
        };
    } catch (error) {
        throw error;
    }
}

function fetch(url) {
    const mockResponse = {
        ok: true,
        json: async () => ({
            jokes: [
                { id: 201, setup: "Why did the scarecrow win an award?", punchLine: "Because he was outstanding in his field!" },
                { id: 202, setup: "Why don't scientists trust atoms?", punchLine: "Because they make up everything!" },
            ],
        }),
    };
    return Promise.resolve(mockResponse);
}


const apiUrl = 'http://great.jokes/christmas';
const jokeId = 55;

getJokeById(apiUrl, jokeId)
    .then(joke => {
        console.log('Setup:', joke.saySetup());
        console.log('Punchline:', joke.sayPunchLine());
    })
    .catch(error => {
        console.error(error.message);
    });

/* 3. setTimeout / setInterval */

let startTime = Date.now();
let intervalId = setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Elapsed time: ${elapsedTime} sec`);

    if (elapsedTime >= 5) {
        clearInterval(intervalId);
        console.log('Reached 5 seconds. Stopping the timer.');
    }
}, 1000);

/* 6. Digit or not */

function startsWithDigit(inputString) {
    const regex = /^\d/;
    return regex.test(inputString);
}

/* 7. Optional(advanced) */

function isArgentinePhoneNumber(inputString) {
    const regex = /^\+54 \d{3}-\d{4}-\d{3}$/;
    return regex.test(inputString);
}