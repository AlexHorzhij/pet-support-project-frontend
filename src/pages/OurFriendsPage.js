import { OurFriendsList } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFriends } from 'redux/friends/friendsOperation';
import { CustomContainer } from 'components/OurFriendsPageComponents/OurFiendsPage.styled';
import { ScrollUpBtn } from 'components';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common')

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <main>
      <CustomContainer sx={{ mt: 8 }} >
        <Typography variant='h2' sx={{ textAlign: 'center' }}>text={t("OurFriendsPage.title")}</Typography>
        <OurFriendsList />
        <ScrollUpBtn />
      </CustomContainer>
    </main>
  );
};

export default OurFriendsPage;
