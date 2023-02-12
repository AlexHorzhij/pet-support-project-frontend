import OurFriendsItem from './OurFriendsItem';
import { ListGrid } from './OurFiendsPage.styled';
import { getFriends } from 'redux/friends/friendsSelectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const OurFriendsList = () => {
  const { friends, isLoading } = useSelector(getFriends);
  const { t } = useTranslation('common');


  return (
    <>
      {friends.length === 0 && !isLoading ? (
        <p>{ t('OurFriendsPage.error')}</p>
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
