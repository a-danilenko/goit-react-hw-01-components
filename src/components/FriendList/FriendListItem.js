import s from "./FriendList.module.css";
import PropTypes from 'prop-types';

const FriendListItem = (friends) => {
  const { isOnline, avatar, name } = friends;

  return (
    <li className={s.listItem}>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={avatar} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

FriendListItem.defaultProps = {
  avatar: "что-то пошло не так"
}

export default FriendListItem;