import Refresh from 'public/assets/icons/refresh.svg';

interface Props {
  fullScreen?: boolean;
  rotate?: boolean;
}

export default ({fullScreen, rotate}: Props) => {
  return (
    <div
      className={`${
        fullScreen ? 'fixed w-screen h-screen' : 'absolute w-full h-full'
      } z-50 top-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center`}
    >
      <Refresh
        fill="#02CC67"
        className={`${rotate && 'animate-spin'} h-[96px] w-[96px] z-50`}
      />
    </div>
  );
};
