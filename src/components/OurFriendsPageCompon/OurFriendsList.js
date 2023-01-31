import OurFriendsItem from './OurFriendsItem';
import { FriendsList } from './OurFriendsList.styled';
import { Loader } from 'components';

const OurFriendsList = ({ partners }) => {
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
};

export default OurFriendsList;
