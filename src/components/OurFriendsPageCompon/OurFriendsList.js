import { Loader } from 'components';
import OurFriendsItem from './OurFriendsItem';
import css from './OurFriendsList.module.css';

export default function OurFriendsList({ partners }) {
  if (!partners) {
    return <Loader />;
  }

  return (
    <ul className={css.partnersList}>
      {partners.map(partner => (
        <OurFriendsItem key={partner._id} partner={partner} />
      ))}
    </ul>
  );
}
