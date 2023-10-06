type RefreshAllAvatarsButtonProps = {
  onRefreshAllAvatars: () => void;
};

function RefreshAllAvatarsButton({
  onRefreshAllAvatars,
}: RefreshAllAvatarsButtonProps) {
  return (
    <button className="btn btn-refresh" onClick={onRefreshAllAvatars}>
      Refresh All
    </button>
  );
}
export default RefreshAllAvatarsButton;
