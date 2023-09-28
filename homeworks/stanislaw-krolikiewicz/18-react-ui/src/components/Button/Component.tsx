interface ButtonProps {
  children: React.ReactNode;
}

export default ({children}: ButtonProps) => {
  return (
    <button className="bg-green text-white text-[21px] rounded-[3px] py-2 px-[72px] transition hover:opacity-90 active:scale-95">
      {children}
    </button>
  );
};
