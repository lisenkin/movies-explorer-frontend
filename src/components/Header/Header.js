import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({backgroundColor, loggedIn }) {
  return (
    <header className={`header header_type_${backgroundColor ? 'isDark' : 'isWhite'} section app__section`}>
      <Logo />
      <Navigation loggedIn={loggedIn}/>
    </header>
  );
}

export default Header;