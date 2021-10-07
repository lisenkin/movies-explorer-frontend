import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({backgroundColor}) {
  return (
    <header className={`header header_type_${backgroundColor ? 'isDark' : 'isWhite'} section app__section`}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;