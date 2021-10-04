import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ProfileLink from '../ProfileLink/ProfileLink';
import Burger from '../Burger/Burger';
import './BurgerMenu.css';

function BurgerMenu() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  function toggleBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }
  return (
    <>
      <Burger onClick={toggleBurger} isBurgerOpened={isBurgerOpened} />
      <nav
        className={`burger-menu ${isBurgerOpened ? 'burger-menu_opened' : ''}`}
      >
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <NavLink
              exact
              to="/"
              className="link burger-menu__link"
              activeClassName="burger-menu__link_active"
            >
              Главная
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/movies"
              className="link burger-menu__link"
              activeClassName="burger-menu__link_active"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/saved-movies"
              className="link burger-menu__link"
              activeClassName="burger-menu__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <ProfileLink />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default BurgerMenu;