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
import MultiLanguage from '../Multilanguage/Multilanguage';

export default function ApplicationBar() {
  const { isLoggedIn } = useSelector(getAuth);

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
            <MultiLanguage />
            {/* ====================================================== */}
            <MobileMenu />
          </NavWrapper>
        </Wrapper>
      </Header>
    </MenuProvider>
  );
}
