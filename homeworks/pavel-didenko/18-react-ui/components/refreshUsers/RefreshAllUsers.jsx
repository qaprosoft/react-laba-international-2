const RefreshAllUsers = ({setUsers, fetchUsers, allUsers}) => {
  async function refreshAll() {
    await fetchUsers();
    setUsers(users => {
      return users.map((_, index) => {
        console.log(allUsers);
        return {id: allUsers[index].id, url: allUsers[index].url};
      });
    });

  }

  return (
    <button className="refresh-button" onClick={refreshAll}>
      Refresh All
    </button>
  );
};
