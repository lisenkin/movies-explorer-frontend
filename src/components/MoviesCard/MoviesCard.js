import { Route } from 'react-router-dom';
import './MoviesCard.css';
import { convertMovieLink, convertMovieDuration } from '../../utils/utils';

function MoviesCard({ movie, onCardButtonClick }) {
  const likeButtonClassName = `button movies-card__save-button ${
    movie.isSaved ? 'movies-card__save-button_active' : ''
  }`;

  function handleCardButtonClick() {
    onCardButtonClick(movie);
  }

  function getMovieImageLink(movie) {
    if (movie.image && movie.image.url) {
      return convertMovieLink(movie.image.url);
    } else if (movie.image) {
      return movie.image;
    } else {
      return 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
    }
  }
  return (
    <article className="movies-card">
      <a
        className="link movies-card__link"
        href={movie.trailer || movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
          <img
          className="movies-card__image"
          src={getMovieImageLink(movie)}
          alt={movie.nameRU}
        />
         </a>
          <Route path="/movies">
           <button
            className={likeButtonClassName}
            onClick={handleCardButtonClick}
            type="button"
          >
          </button>
      
        </Route>
        <Route path="/saved-movies">
          <button
            className="button movies-card__delete-button"
            type="reset"
            onClick={handleCardButtonClick}
          ></button>
        </Route>
     
      <div className="movies-card__container">
      <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">
        {convertMovieDuration(movie.duration)}
      </p>
      </div>
    </article>
  );
}

export default MoviesCard;