import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project section">
      <SectionTitle name="О проекте" id="about-project" />
      <ul className="project__blocks">
        <li className="project__block">
          <h3 className="project__heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__block">
          <h3 className="project__heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="project__chart">
        <li className="project__chart-item">
          <p className="project__text project__text_background_green">
            1 неделя
          </p>
          <p className="project__text project__text_color_silver">Back-end</p>
        </li>
        <li className="project__chart-item">
          <p className="project__text project__text_background_grey">
            4 недели
          </p>
          <p className="project__text project__text_color_silver">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;