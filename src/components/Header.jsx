import { HeaderNav } from "./Header/HeaderNav";
import { Logo } from "./Logo";
import { Container } from "./Container";
import './Header/Header.css'

export const Header = () => {
  return (<header className="header">
    <Container className='header-container'>
      <Logo/>
      <HeaderNav/>
    </Container>
  </header>)
}