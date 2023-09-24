const User = ({link, index, setUsers, fetchUsers}) => {

  async function updateUserAvatar() {
    const [newAvatar] = await fetchUsers();
    setUsers(users =>
      users.map((user, i) => {
        if (i === index) {
          return newAvatar.url;
        }

        return user;
      }),
    );
  }
  return (
    <div className="user">
      <img className="user__foto" src={link} alt="user image" />
      <img
        className="user__refresh-foto"
        src="./assets/img/icons/update-user.svg"
        onClick={updateUserAvatar}
      />
    </div>
  );
};
