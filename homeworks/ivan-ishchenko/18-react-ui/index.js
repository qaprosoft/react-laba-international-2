const App = () => {
  const [avatars, setAvatars] = React.useState([]);

  const fetchUsers = async (limit = 1) => {
    const res = await fetch(
      `https://tinyfac.es/api/data?limit=${limit}&quality=0`,
    );
    const data = await res.json();
    return data;
  };

  const onAddHandler = async () => {
    const avatar = (await fetchUsers())[0];
    setAvatars(prev => [...prev, {id: avatar.id, url: avatar.url}]);
  };

  const onRefreshHandler = async ind => {
    const avatar = (await fetchUsers())[0];
    setAvatars(prev => {
      const newArr = [...prev];
      newArr[ind] = {id: avatar.id, url: avatar.url};
      return newArr;
    });
  };

  const onRefreshAllHandler = async () => {
    console.log(avatars);
    const data = await fetchUsers(avatars.length);
    const newAvatars = data.map(user => ({id: user.id, url: user.url}));
    setAvatars(newAvatars);
  };

  return (
    <React.Fragment>
      <div className="avatars">
        {avatars.map(({id, url}, ind) => (
          <Avatar
            key={id}
            imgSrc={url}
            onClick={onRefreshHandler.bind(null, ind)}
          />
        ))}
        <AddAvatar onClick={onAddHandler} />
      </div>
      <button className="refreshAll" onClick={onRefreshAllHandler}>
        Refresh All
      </button>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
