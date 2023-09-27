import plus from './../assets/images/plus.svg';
import Avatar from './Avatar';

function Avatars({avatars, onAdd, onRefresh}) {
  return (
    <section className="avatars">
      {avatars.map((avatar, index) => {
        return (
          <Avatar
            avatar={avatar}
            key={index}
            onRefresh={() => onRefresh(index)}
          ></Avatar>
        );
      })}
      <div className="avatar__container border--green" onClick={onAdd}>
        <img className="avatar__icon" src={plus} alt="Plus sign"></img>
      </div>
    </section>
  );
}

export default Avatars;
