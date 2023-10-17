const RefreshAllBtn = ({refreshAllAvatars, avatars}) => {
  return (
    <button className="refresh" onClick={() => refreshAllAvatars(avatars.length)}>
      Refresh All
    </button>
  );
};

export default RefreshAllBtn;
