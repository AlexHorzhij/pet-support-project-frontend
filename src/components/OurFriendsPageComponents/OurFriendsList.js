import OurFriendsItem from './OurFriendsItem';
import { Loader } from 'components';
import { ListGrid } from './OurFiendsPage.styled';
import { getFriends } from 'redux/friends/friendsSelectors';
import { useSelector } from 'react-redux';

const OurFriendsList = () => {
  const { friends, error, isLoading } = useSelector(getFriends);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {error && <p>{error.data}</p>}
      {friends.length === 0 ? (
        <p>We have not any friends on this topic</p>
      ) : (
        <ListGrid container component="ul">
          {friends.map(friend => (
            <OurFriendsItem key={friend._id} partner={friend} />
          ))}
        </ListGrid>
      )}
    </>
  );
};

export default OurFriendsList;
