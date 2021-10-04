import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a
                        target="_blank"
                        href="https://github.com/lisenkin/how-to-learn"
                        rel="noreferrer"
                        className="link portfolio__link"
                    >
                        Статичный сайт
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        target="_blank"
                        href="https://lisenkin.github.io/russian-travel/"
                        rel="noreferrer"
                        className="link portfolio__link"
                    >
                        Адаптивный сайт
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        target="_blank"
                        href="https://github.com/lisenkin/react-mesto-auth"
                        rel="noreferrer"
                        className="link portfolio__link"
                    >
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;