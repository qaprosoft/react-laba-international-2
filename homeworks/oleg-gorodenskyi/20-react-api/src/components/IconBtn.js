
const IconBtn = ({iconHandler, src, alt}) => {

  return (
    <button className="iconBtn" onClick={iconHandler} type='button'>
      <img src={src} alt={alt} style={{width: '64px', height: '65px'}}/>
    </button>
  );
};

export default IconBtn;
