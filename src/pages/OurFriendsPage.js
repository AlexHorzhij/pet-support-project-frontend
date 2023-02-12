import { OurFriendsList } from 'components';
import { useEffect } from 'react';
import { Title } from 'components/Title/Title';
import { useDispatch } from 'react-redux';
import { fetchFriends } from 'redux/friends/friendsOperation';
import {
  CustomContainer,
  Main,
} from 'components/OurFriendsPageComponents/OurFiendsPage.styled';
import { ScrollUpBtn } from 'components';
import { useTranslation } from 'react-i18next';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common')

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Main>
      <CustomContainer>
        <Title text={t("OurFriendsPage.title")} />
        <OurFriendsList />
        <ScrollUpBtn />
      </CustomContainer>
    </Main>
  );
};

export default OurFriendsPage;
