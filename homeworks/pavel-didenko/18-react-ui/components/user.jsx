const User = ({link}) => {
  return (
    <div className="user">
      <img className="user__foto" src={link} alt="user image" />
      <img className="user__refresh-foto" src="./assets/img/icons/update-user.svg"/>
    </div>
  )
}