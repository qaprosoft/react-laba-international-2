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
      setAllUsers(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function getRandomUser() {
    const min = 0;
    const max = Math.floor(allUsers.length - 1);
    const user = allUsers[Math.floor(Math.random() * (max - min) + min)];
    return {id: user.id, url: user.url};
  }

  async function addUserToState() {
    if (users.length < 50) {
      const userObject = await getRandomUser();
      setAllUsers(() => allUsers.filter(item => item.id !== userObject.id));
      setUsers(users.concat(userObject));
    }
  }

  return (
    <main>
      <div className="image-wrapper">
        {users.map((user, index) =>
          user ? (
            <User
              link={user ? user.url : ''}
              key={index}
              index={index}
              setUsers={setUsers}
              url={url}
            />
          ) : (
            ''
          ),
        )}
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
        allUsers={allUsers}
        setAllUsers={setAllUsers}
        users={users}
      />
    </main>
  );
};

const rootDOMNode = document.body.firstElementChild;
const root = ReactDOM.createRoot(rootDOMNode);
root.render(<App />);
