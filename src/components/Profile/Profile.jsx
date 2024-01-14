import { SectionTitle } from '../../SectionTitle/SectionTitle';
import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <SectionTitle>Profile</SectionTitle>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={image} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
          <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.value}>{followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.value}>{views}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Likes</span>
            <span className={css.value}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
