import { OurFriendsList } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFriends } from 'redux/friends/friendsOperation';
import { CustomContainer } from 'components/OurFriendsPageComponents/OurFiendsPage.styled';
import { ScrollUpBtn } from 'components';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { ThreeCircles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';
import { useTheme } from '@mui/material';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common')
  const { isLoading } = useSelector(getAuth)
  const { palette } = useTheme()

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <main>
      <CustomContainer sx={{ mt: 8 }} >

        <Typography variant='h2' sx={{ textAlign: 'center' }}>{t("OurFriendsPage.title")}</Typography>

        {isLoading ?
          <Container sx={{ display: 'flex', justifyContent: 'center', pt: 15 }}>
            <ThreeCircles color={palette.primary.main} />
          </Container>
          : <OurFriendsList />
        }

        <ScrollUpBtn />
      </CustomContainer>
    </main>
  );
};

export default OurFriendsPage;
