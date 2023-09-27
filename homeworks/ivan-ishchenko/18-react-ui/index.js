const App = () => {
  const [avatars, setAvatars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const fetchUsers = async (limit = 1) => {
    let data = [];
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://tinyfac.es/api/data?limit=${limit}&quality=0`,
      );
      if (!res.ok) throw new Error('Could not load avatars. Try again later');
      data = await res.json();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    return data;
  };

  const onAddHandler = async () => {
    const avatar = (await fetchUsers())[0];
    if (!avatar) return;
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
    const data = await fetchUsers(avatars.length);
    const newAvatars = data.map(user => ({id: user.id, url: user.url}));
    setAvatars(newAvatars);
  };

  if (error) {
    return <ErrorModal errorText={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

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
