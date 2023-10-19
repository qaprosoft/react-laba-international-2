
export const fetchRandomUser = async () => {

    let user: {} = {}

    try {
        const response = await fetch(`https://tinyfac.es/api/data?limit=1`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        user = data[0];

    } catch (err) {
        console.log(err)
        user = {
            name: 'Default User',
            url: '/assets/default-placeholder.png',
        };
    }

    return user
};