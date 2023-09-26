const useState = React.useState;
const useEffect = React.useEffect;
const useRef = React.useRef;


const App = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);


  async function fetchUsers(url, limit, quality) {
    const queryURL = `${url}?limit=${limit}&quality=${quality}`;
    try {
      const response = await fetch(queryURL);
      const json = await response.json();
      console.log(json);
      return json;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function refreshAllUsers() {
    const newUsers = await fetchUsers(url, users.length, avatarsQuality);
    setAllUsers(newUsers);
    setUsers(users => {
      return users.map((_, index) => {
        if (index < newUsers.length) {
          return newUsers[index].url;
        }
      });
    });
  }



  async function addUserToState() {
    const newUser = await fetchUsers(url, 1, 1);
    setUsers(users.concat(newUser[0].url));
  }

  async function updateUserAvatar(event) {
    const [newAvatar] = await fetchUsers(url, 1, avatarsQuality);
    setUsers(users.map((item, i) => {
      if(i.toString() !== event.target.getAttribute('index')){
        return item
      }else {
        return newAvatar.url;
      }
    }))
  }

  return (
    <main>
      <div className="image-wrapper">
        {users.map((user, index) => (
          <User
            link={user}
            key={index}
            index={index}
            updateUserAvatar={updateUserAvatar}
          />
        ))}
        <img
          className="add-user"
          src="./assets/img/icons/add-user.svg"
          alt="Add user tile"
          onClick={addUserToState}
        />
      </div>
      <RefreshAllUsers refreshAllUsers={refreshAllUsers} />
    </main>
  );
};

const rootDOMNode = document.body.firstElementChild;
const root = ReactDOM.createRoot(rootDOMNode);
root.render(<App />);
