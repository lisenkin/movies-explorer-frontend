import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';
import avatar from '../../images/student/avatar.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="student section">
      <SectionTitle name="Студент" id="about-me" />
      <div className="student__container">
        <section className="student__info">
          <h3 className="student__name">Маша</h3>
          <p className="student__about">Веб-разработчик, 30 лет</p>
          <p className="student__paragraph">
           Живу в Осло, люблю лес 
          </p>
          <ul className="student__links">
            <li className="student__links-item">
              <a
                target="_blank"
                href="https://ru-ru.facebook.com/1isena"
                rel="noreferrer"
                className="link student__link"
              >
                Facebook
              </a>
            </li>
            <li className="student__links-item">
              <a
                target="_blank"
                href="https://github.com/lisenkin"
                rel="noreferrer"
                className="link student__link"
              >
                Github
              </a>
            </li>
          </ul>
        </section>
        <img
          className="student__image"
          src={avatar}
          alt="Фотография студента"
        />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;