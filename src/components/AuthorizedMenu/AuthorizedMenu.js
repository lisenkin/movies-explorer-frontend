import { NavLink } from 'react-router-dom';
import ProfileLink from '../ProfileLink/ProfileLink';
import './AuthorizedMenu.css';

function AuthorizedMenu() {
  return (
    <ul className="menu">
      <li className="menu__authorized-item">
        <NavLink
          to="/movies"
          className="link menu__authorized-link"
          activeClassName="menu__link_active"
        >
          Фильмы
        </NavLink>
      </li>
      <li className="menu__authorized-item">
        <NavLink
          to="/saved-movies"
          className="link menu__authorized-link"
          activeClassName="menu__link_active"
        >
          Сохранённые фильмы
        </NavLink>
      </li>
      <li className="menu__authorized-item">
        <ProfileLink />
      </li>
    </ul>
  );
}

export default AuthorizedMenu;