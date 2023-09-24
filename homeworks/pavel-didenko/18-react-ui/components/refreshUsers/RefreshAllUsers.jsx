const RefreshAllUsers = ({setUsers, fetchUsers, allUsers, setAllUsers, users}) => {
  async function refreshAll() {
    await fetchUsers();
    setUsers(users => {
      return users.map((_, index) => {
        if (index < allUsers.length){
          return {id: allUsers[index].id, url: allUsers[index].url};
        }
      })
    });
  }

  return (
    <button
      className="refresh-button"
      onClick={refreshAll}
      style={{marginTop: users.length < 10 ? '20.9rem' : '3rem'}}
    >
      Refresh All
    </button>
  );
};
