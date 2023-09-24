const useState = React.useState;
const useEffect = React.useEffect;
const useRef = React.useRef;

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const url = 'https://tinyfac.es/api/data?limit=50&quality=0';

  async function fetchUsers() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    async function requestUsersFromAPI() {
      const users = await fetchUsers();
      setAllUsers(users);
    }

    requestUsersFromAPI();
  }, []);

  function getRandomUser() {
    const min = 0;
    const max = Math.floor(allUsers.length - 1);
    const user = allUsers[Math.floor(Math.random() * (max - min) + min)];
    return user.url;
  }

  async function addUserToState() {
    const maxNumberOfPicturesOnThePage = 50;

    if (users.length < maxNumberOfPicturesOnThePage) {
      const userFoto = getRandomUser();
      setAllUsers(() => allUsers.filter(item => item.url !== userFoto));
      setUsers(users.concat(userFoto));
    }
  }

  return (
    <main>
      <div className="image-wrapper">
        {users.map((user, index) => (
          <User
            link={user ? user : ''}
            key={index}
            index={index}
            setUsers={setUsers}
            url={url}
          />
        ))}
        <img
          className="add-user"
          src="./assets/img/icons/add-user.svg"
          alt="Add user tile"
          onClick={addUserToState}
        />
      </div>
      <RefreshAllUsers
        setUsers={setUsers}
        fetchUsers={fetchUsers}
        setAllUsers={setAllUsers}
        users={users}
      />
    </main>
  );
};

const rootDOMNode = document.body.firstElementChild;
const root = ReactDOM.createRoot(rootDOMNode);
root.render(<App />);
