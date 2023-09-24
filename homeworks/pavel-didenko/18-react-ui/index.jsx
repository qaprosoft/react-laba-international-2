const useState = React.useState;
const useEffect = React.useEffect;

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  // const [usersFetched, setUsersFetched] = useState(false);


  async function fetchUsers() {
    const url = 'https://tinyfac.es/api/data?limit=50&quality=0';
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json)
      setAllUsers(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);


  function getRandomUser() {
    const min = 0;
    const max = Math.floor(allUsers.length);
    const user = allUsers[Math.floor(Math.random() * (max - min) + min)];
    return {id: user.id, foto: user.url};
  }

  async function addUserToState() {
    if(allUsers.length > 0){
      const userObject = getRandomUser();
      setAllUsers(() => allUsers.filter(item => item.id !== userObject.id));
      setUsers(users.concat(userObject));
      console.log(users);
      console.log(allUsers);
    }
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
