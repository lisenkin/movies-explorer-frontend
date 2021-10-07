import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              target="_blank"
              href="https://praktikum.yandex.ru/"
              rel="noreferrer"
              className="link footer__link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a
              target="_blank"
              href="https://github.com/"
              rel="noreferrer"
              className="link footer__link"
            >
              Github
            </a>
          </li>
          <li className="footer__item">
            <a
              target="_blank"
              href="https://ru-ru.facebook.com/"
              rel="noreferrer"
              className="link footer__link"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;