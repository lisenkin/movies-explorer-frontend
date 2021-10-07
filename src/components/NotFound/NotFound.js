import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  function handleGoBackClick() {
    history.goBack();
  }

  return (
    <main className="not-found-content">
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__paragraph">Cтраница не найдена</p>
        <button onClick={handleGoBackClick} className="not-found__button">
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;