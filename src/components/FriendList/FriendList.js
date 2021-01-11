import s from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={s.listItem}>
          <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
