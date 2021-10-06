import { Route } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const likeButtonClassName = `button movies-card__like-button ${
    movie.isLiked && 'movies-card__like-button_active'
  }`;

  return (
    <article className="movies-card">
      <a
        className="link movies-card__link"
        href={movie.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies__image" src={movie.image} alt={movie.name} />
          <Route path="/movies">
          <button className={likeButtonClassName} type="button"></button>
          <button className="button movies-card__save-button" type="submit">Сохранить</button>
        </Route>
        <Route path="/saved-movies">
          <button
            className="button movies-card__delete-button"
            type="reset"
          ></button>
        </Route>
      </a>
      <div className="movies-card__container">
        <h2 className="movies-card__title">{movie.name}</h2>
      <p className="movies-card__duration">{movie.duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;