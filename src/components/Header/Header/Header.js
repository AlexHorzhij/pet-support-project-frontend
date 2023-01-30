import { Header, Wrapper, LogoInfo } from '../Header/Header.styled';
import Nav from '../Nav/Nav';
import { Span } from '../Logo/Logo.styled';
import SimpleListMenu from '../MobileMenu/MobileMenu';
import AuthNav from '../AuthNav/AuthNav';

export default function ApplicationBar() {
  return (
    <Header position="fixed">
      <Wrapper>
        <LogoInfo>
          pe<Span>t</Span>ly
        </LogoInfo>
        <Nav />
        <AuthNav />
        <SimpleListMenu />
      </Wrapper>
    </Header>
  );
}
