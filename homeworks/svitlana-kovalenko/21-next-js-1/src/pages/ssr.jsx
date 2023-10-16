import Gallery from "../components/Gallery/Gallery";


export async function getServerSideProps() {
    const response = await fetch("https://tinyfac.es/api/data?limit=5&quality=0");
    const data = await response.json();
    const users = data.map((item, index) => ({ id: index, url: item.url }));

    return {
        props: {
            users,
        },
    };
}
const SSRPage = ({ users }) => {
    return <Gallery users={users} />;
};

export default SSRPage;
