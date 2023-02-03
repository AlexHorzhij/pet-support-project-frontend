import OurFriendsItem from './OurFriendsItem';
// import { FriendsList } from './OurFriendsList.styled';
import { Loader } from 'components';
import { ListGrid } from './OurFiendsPage.styled';

const OurFriendsList = ({ partners }) => {
  if (!partners) {
    return <Loader />;
  }

  return (
    <ListGrid container component="ul">
      {partners.map(partner => (
        <OurFriendsItem key={partner._id} partner={partner} />
      ))}
    </ListGrid>
  );
};

export default OurFriendsList;
