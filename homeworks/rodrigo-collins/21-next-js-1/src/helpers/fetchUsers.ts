export const fetchUsers = async (limit: number) => {

    try {
        const response = await fetch(`https://tinyfac.es/api/data?limit=${limit}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data

    } catch (err) {
        console.log(err)
    }

};