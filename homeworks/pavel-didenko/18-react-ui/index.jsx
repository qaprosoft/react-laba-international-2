const useState = React.useState;

const App = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const url = 'https://tinyfac.es/api/data?limit=50&quality=0';

    try {
      const response = await fetch(url);
      const json = await response.json();
      return getRandomUser(json);
    } catch (err) {
      console.log(err);
    }
  }

  function getRandomUser(usersArray) {
    const min = 0;
    const max = Math.floor(usersArray.length);
    const user = usersArray[Math.floor(Math.random() * (max - min + 1) + min)];
    return {id: user.id, foto: user.url};
  }

  async function addUserToState() {
    const userObject = await fetchUsers();
    setUsers(users.concat(userObject));
    console.log(users);
  }

  return (
    <main>
      <div className="image-wrapper">
        {users.map((user) => <User link={user.foto} key={user.id}/>)}
        <img
          className="add-user"
          src="./assets/img/icons/add-user.svg"
          alt="Add user tile"
          onClick={addUserToState}
        />
      </div>
      <button className="refresh-button">Refresh All</button>
    </main>
  );
};

const rootDOMNode = document.body.firstElementChild;
const root = ReactDOM.createRoot(rootDOMNode);
root.render(<App />);
