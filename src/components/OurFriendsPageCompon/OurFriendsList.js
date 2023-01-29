import { Loader } from 'components';
import OurFriendsItem from './OurFriendsItem';
// import css from './OurFriendsList.module.css';
import { FriendsList } from './OurFriendsList.styled';

export default function OurFriendsList({ partners }) {
  if (!partners) {
    return <Loader />;
  }

  return (
    <FriendsList>
      {partners.map(partner => (
        <OurFriendsItem key={partner._id} partner={partner} />
      ))}
    </FriendsList>
  );
}
