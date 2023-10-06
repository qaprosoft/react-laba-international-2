const AddAvatar = ({onClick}) => {
  return (
    <div className="tile addAvatar" onClick={onClick}>
      <img className="tileIcon" src="./assets/icons/add.svg" />
    </div>
  );
};
