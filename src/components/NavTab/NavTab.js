import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
    <section className="NavTab section">
    <ul className="nav-tab">
      <li className="nav-tab__item">
        <HashLink className="link nav-tab__link" to="#about-project">
          О проекте
        </HashLink>
      </li>
      <li className="nav-tab__item">
        <HashLink className="link nav-tab__link" to="#techs">
          Технологии
        </HashLink>
      </li>
      <li className="nav-tab__item">
        <HashLink className="link nav-tab__link" to="#about-me">
          Студент
        </HashLink>
      </li>
    </ul>
    </section>
  );
}

export default NavTab;