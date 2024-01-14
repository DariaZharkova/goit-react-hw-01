import { SectionTitle } from '../SectionTitle/SectionTitle';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <SectionTitle>Friends</SectionTitle>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
