import { OurFriendsList } from 'components';
import { useEffect } from 'react';
import { Title } from 'components/Title/Title';
import { useDispatch } from 'react-redux';
import { fetchFriends } from 'redux/friends/friendsOperation';
import {
  CustomContainer,
  Main,
} from 'components/OurFriendsPageComponents/OurFiendsPage.styled';

const OurFriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Main>
      <CustomContainer>
        <Title text="Our Friends" />
        <OurFriendsList />
      </CustomContainer>
    </Main>
  );
};

export default OurFriendsPage;
