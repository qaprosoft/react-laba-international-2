const RefreshAllUsers = ({setUsers, fetchUsers, allUsers, users}) => {
  async function refreshAll() {
    const newUsers = await fetchUsers();
    setTimeout(() => {
      setUsers(users => {
        return users.map((_, index) => {
          if (index < newUsers.length) {
            return newUsers[index].url;
          }
        });
      });
    }, 0)
    
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
