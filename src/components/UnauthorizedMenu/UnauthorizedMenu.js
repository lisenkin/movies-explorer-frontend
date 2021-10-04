import { Link } from 'react-router-dom';
import './UnauthorizedMenu.css';

function UnauthorizedMenu() {
  return (
    <ul className="menu">
      <li className="menu__unauthorized-item">
        <Link to="/signup" className="link menu__unauthorized-link">
          Регистрация
        </Link>
      </li>
      <li className="menu__unauthorized-item">
        <Link
          to="/signin"
          className="link menu__unauthorized-link menu__unauthorized-link_type_button"
        >
          Войти
        </Link>
      </li>
    </ul>
  );
}

export default UnauthorizedMenu;