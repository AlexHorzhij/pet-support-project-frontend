import { useSelector } from 'react-redux';
import { Header, Wrapper } from '../Header/Header.styled';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import { NavWrapper } from '../Header/Header.styled';
import UserNav from '../UserNav/UserNav';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MenuProvider } from '../Context/menuContext';
import { getAuth } from 'redux/auth/authSelectors';
import MultiLanguage from '../Multilanguage/Multilanguage';
import Logo from '../Logo/Logo';

export default function ApplicationBar() {
  const { isLoggedIn } = useSelector(getAuth);

  return (
    <MenuProvider>
      <Header>
        <Wrapper>
          <Logo />
          <Nav />
          <NavWrapper>
            <MultiLanguage />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
            <MobileMenu />
          </NavWrapper>
        </Wrapper>
      </Header>
    </MenuProvider>
  );
}
