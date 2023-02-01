import { Header, Wrapper } from '../Header/Header.styled';
import Nav from '../Nav/Nav';
import { LogoInfo, Span } from '../Logo/Logo.styled';
import AuthNav from '../AuthNav/AuthNav';
import { NavWrapper } from '../Header/Header.styled';
import UserNav from '../UserNav';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function ApplicationBar() {
  const isLogIn = false;
  return (
    <Header position="fixed">
      <Wrapper>
        <LogoInfo>
          pe<Span>t</Span>ly
        </LogoInfo>
        <Nav />
        <NavWrapper>
          {isLogIn ? <UserNav /> : <AuthNav />}
          <MobileMenu />
        </NavWrapper>
      </Wrapper>
    </Header>
  );
}
