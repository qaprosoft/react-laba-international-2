interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export default ({children, className, onClick}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-green text-white flex justify-center items-center text-[21px] rounded-[3px] h-[40px] w-[240px] transition hover:opacity-90 active:scale-95`}
    >
      {children}
    </button>
  );
};
