import { useSelector } from 'react-redux';
import { Header, Wrapper } from '../Header/Header.styled';
import Nav from '../Nav/Nav';
import { LogoInfo, Span } from '../Logo/Logo.styled';
import AuthNav from '../AuthNav/AuthNav';
import { NavWrapper } from '../Header/Header.styled';
import UserNav from '../UserNav/UserNav';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MenuProvider } from '../Context/menuContext';

import { getAuth } from 'redux/auth/authSelectors';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

const lngs = {
  en: {
    nativeName: 'English',
    shortName: 'EN',
  },
  ua: {
    nativeName: 'Ukrainian',
    shortName: 'UA',
  },
};

export default function ApplicationBar() {
  const { isLoggedIn } = useSelector(getAuth);
  const { i18n } = useTranslation();

  return (
    <MenuProvider>
      <Header>
        <Wrapper>
          <LogoInfo>
            pe<Span>t</Span>ly
          </LogoInfo>
          <Nav />
          <NavWrapper>
            {isLoggedIn ? <UserNav /> : <AuthNav />}
            {/* ====================Multilanguage===================== */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {Object.keys(lngs).map(lng => {
                return (
                  <Button
                    variant={
                      i18n.resolvedLanguage === lng ? 'contained' : 'outlined'
                    }
                    size="small"
                    type="submit"
                    key={lng}
                    sx={{
                      fontWeight:
                        i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                    }}
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    {lngs[lng].shortName}
                  </Button>
                );
              })}
            </Box>
            {/* ====================================================== */}
            <MobileMenu />
          </NavWrapper>
        </Wrapper>
      </Header>
    </MenuProvider>
  );
}
