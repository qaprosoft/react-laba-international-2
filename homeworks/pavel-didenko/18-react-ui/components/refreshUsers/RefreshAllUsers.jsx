const RefreshAllUsers = ({setUsers, fetchUsers, allUsers, users, setAllUsers}) => {
  async function refreshAll() {
    const newUsers = await fetchUsers();
    setAllUsers(newUsers);
    setUsers(users => {
      return users.map((_, index) => {
        if (index < newUsers.length) {
          return newUsers[index].url;
        }
      });
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
