import css from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, id, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.isOnline : css.offline}`}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};
