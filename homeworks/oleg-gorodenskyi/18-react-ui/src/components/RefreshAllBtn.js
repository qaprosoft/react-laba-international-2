const RefreshAllBtn = ({fetchAllData, avatars}) => {
  return (
    <button className="refresh" onClick={() => fetchAllData(avatars.length)}>
      Refresh All
    </button>
  );
};

export default RefreshAllBtn;
