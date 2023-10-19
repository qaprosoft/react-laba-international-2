import plus from './../assets/images/plus.svg';
import Image from 'next/image';
import Avatar from './Avatar';

function Avatars({avatars, onAdd, onRefresh}) {
  return (
    <section className="avatars">
      {avatars.map(avatar => (
        <Avatar
          avatar={avatar}
          key={avatar.id}
          onRefresh={() => onRefresh(avatar)}
        ></Avatar>
      ))}
      <div className="avatar__container border--green" onClick={onAdd}>
        <Image className="avatar__icon" src={plus} alt="Plus sign" />
      </div>
    </section>
  );
}

export default Avatars;
