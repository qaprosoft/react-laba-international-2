const useState = React.useState;
const useEffect = React.useEffect;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers(url, limit, quality) {
    const queryURL = `${url}?limit=${limit}&quality=${quality}`;
    try {
      const response = await fetch(queryURL);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function refreshAllUsers() {
    setLoading(true);
    const newUsers = await fetchUsers(url, users.length, 1);
    setUsers(users => {
      return users.map((_, index) => {
        if (index < newUsers.length) {
          return newUsers[index].url;
        }
      });
    });
    setLoading(false);
  }

  async function addUserToState() {
    const newUser = await fetchUsers(url, 1, 1);
    setUsers(users.concat(newUser[0].url));
  }

  async function updateUserAvatar(event) {
    
    const [newAvatar] = await fetchUsers(url, 1, 1);
    setUsers(
      users.map((item) => {
        const avatarToUpdate =
          event.target.className === 'user__foto'
            ? event.target
            : event.target.previousElementSibling;
        if (item !== avatarToUpdate.src) {
          return item;
        } else {
          return newAvatar.url;
        }
      }),
    );
  }

  return (
    <main>
      <div className="image-wrapper">
        {users.map((user, index) => (
          <User
            link={user}
            key={index}
            updateUserAvatar={updateUserAvatar}
            loading={loading}
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
