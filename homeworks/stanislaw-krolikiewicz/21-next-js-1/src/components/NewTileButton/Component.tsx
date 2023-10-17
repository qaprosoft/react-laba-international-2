import AddNewTile from 'public/assets/icons/addNewTile.svg';

interface Props {
  onClick: () => void;
}

export default ({onClick}: Props) => {
  return (
    <button
      onClick={onClick}
      className="transition hover:opacity-90 active:scale-95"
    >
      <AddNewTile alt="Add new tile" />
    </button>
  );
};
