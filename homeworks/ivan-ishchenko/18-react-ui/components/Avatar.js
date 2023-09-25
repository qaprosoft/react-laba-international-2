const Avatar = ({imgSrc, onClick}) => {
  return (
    <div className="tile avatar">
      <img src={imgSrc} />
      <div className="overlay" onClick={onClick}>
        <img src="./assets/icons/refresh.svg" />
      </div>
    </div>
  );
};
