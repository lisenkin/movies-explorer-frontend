import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(landingColor) {
  return (
    <header className={`header header_type_${landingColor ? 'isDark' : 'isWhite'} section app__section`}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;