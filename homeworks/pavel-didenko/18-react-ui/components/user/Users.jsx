const User = ({link, index, setUsers, url}) => {
  async function fetchNewAvatar(){
    try{
       const response = await fetch(url);
       const json = await response.json();
       return json[0].url;
    }catch(err){
      console.log(err);
    }
  }
  async function updateUserAvatar() {
    const newAvatar = await fetchNewAvatar();
    setUsers(users => users.map((user, i) => {
      if(i === index){
        return newAvatar;
      }

      return user;
    }));
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
