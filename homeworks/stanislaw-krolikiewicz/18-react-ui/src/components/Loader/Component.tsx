import Refresh from 'public/assets/icons/refresh.svg';

export default () => {
  return (
    <div className="fixed z-50 top-0 left-0">
      <div className="bg-black w-screen h-screen bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
        <Refresh
          fill="#02CC67"
          className="animate-spin h-[96px] w-[96px] z-50"
        />
      </div>
    </div>
  );
};
